using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace Services
{
    public class HtmlService
    {
        private readonly EmailSettings _emailSettings;
        public HtmlService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task<string> GenerateHtmlLicence(
            string nom, string prenom, string email, string licence, string action_url, int year, string lang)
        {
            var filename = "licence.html";
            var strHTML = await System.IO.File.ReadAllTextAsync($"db/{filename}");

            strHTML = strHTML.Replace("{{nom}}", nom);
            strHTML = strHTML.Replace("{{prenom}}", prenom);
            strHTML = strHTML.Replace("{{email}}", email);
            strHTML = strHTML.Replace("{{licence}}", licence);

            strHTML = strHTML.Replace("{{action_url}}", action_url);
            strHTML = strHTML.Replace("{{support_email}}", _emailSettings.SenderEmail);
            strHTML = strHTML.Replace("{{year}}", $"{year}");

            return strHTML;
        }
        public async Task<string> GenerateHtmlUser(string action_url, string support_email, string email, string psudo, string lang)
        {
            var filename = "registration_user.html";
            var strHTML = await System.IO.File.ReadAllTextAsync($"db/{filename}");
            strHTML = strHTML.Replace("{{action_url}}", action_url);
            strHTML = strHTML.Replace("{{email}}", email);
            strHTML = strHTML.Replace("{{support_email}}", support_email);
            strHTML = strHTML.Replace("{{psudo}}", psudo);

            return strHTML;
        }

        public async Task<string> GenerateHtmlReset(string action_url, string support_email, string name, string lang)
        {
            var filename = "reset_password.html";
            var strHTML = await System.IO.File.ReadAllTextAsync($"db/{filename}");
            strHTML = strHTML.Replace("{{action_url}}", action_url);
            strHTML = strHTML.Replace("{{support_email}}", support_email);
            strHTML = strHTML.Replace("{{name}}", name);

            return strHTML;
        }

        public async Task<string> GenerateHtmlMessage(string action_url, string support_email
            , string name, string message, int year, string lang)
        {
            var filename = "message.html";
            var strHTML = await System.IO.File.ReadAllTextAsync($"db/{filename}");
            strHTML = strHTML.Replace("{{action_url}}", action_url);
            strHTML = strHTML.Replace("{{support_email}}", support_email);
            // strHTML = strHTML.Replace("{{name}}", name);
            strHTML = strHTML.Replace("{{message}}", message);
            strHTML = strHTML.Replace("{{year}}", $"{year}");

            return strHTML;
        }
    }
}