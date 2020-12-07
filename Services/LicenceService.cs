using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Management;
using System.Runtime.InteropServices;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Models;
using Newtonsoft.Json;

namespace Services
{
    public class Info {
        public string macId {get; set;}
        public string cpuId {get; set;}
        public string biosId {get; set;}
        public string baseId {get; set;}

    }
    public class LicenceService
    {
        public LicenceService()
        {
        }

        // Generating 16 digit product key  
        public static string GenerateKey2(string fingerPrint, string ProductName, string RegistredUser)
        {
            var pKey = "";
            while (pKey.Length < 16)
            {
                pKey += new Random().Next(0, int.MaxValue);
            }
            pKey = pKey.Substring(0, 16);

            return pKey;
        }

        public Info GetInfo()
        {
            return new Info
            {
                macId = macId(),
                cpuId = cpuId(),
                biosId = biosId(),
                baseId = baseId(),
            };
        }


        public string GenerateTokken(Activation model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(macId()));

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, model.Nom),
                new Claim(ClaimTypes.Surname, model.Prenom),
                new Claim(ClaimTypes.Email, model.Email),
                new Claim("cpuId", model.CpuId),
                new Claim("biosId", model.BiosId),
                new Claim("baseId", model.BaseId),
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddYears(5),
                // Issuer = "http://mysite.com",
                // Audience = "http://myaudience.com",
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            };
            var createToken = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(createToken);
        }

        // public static string Base64Encode(string plainText)
        // {
        //     var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
        //     return Convert.ToBase64String(plainTextBytes, plainText.IndexOf("."), 12);
        // }

        // public static string Base64Decode(string base64EncodedData)
        // {
        //     var base64EncodedBytes = Convert.FromBase64String(base64EncodedData);
        //     return Encoding.UTF8.GetString(base64EncodedBytes);
        // }

        // public static string Code(string plainText)
        // {
        //     var requestCodeByte = Encoding.UTF8.GetBytes(plainText);
        //     // byte[] requestCodeByte = Convert.FromBase64String(plainText);
        //     string requestCode = string.Empty;

        //     foreach (byte b in requestCodeByte)
        //     {
        //         requestCode += b.ToString();
        //     }

        //     // long requestCodeDouble = Convert.ToDecimal(requestCode);

        //     // long p1 = requestCodeDouble * requestCodeDouble - 2 * requestCodeDouble;
        //     // long p2 = (requestCodeDouble - 2) * (requestCodeDouble - 1);
        //     // long p3 = (requestCodeDouble + 2 * requestCodeDouble);

        //     // var r = string.Format("{0}-{1}-{2}", p1, p2, p3);

        //     return requestCode.ToString();
        // }


        // public static string Decode(string plainText)
        // {
        //     byte[] userNumberByte = Convert.FromBase64String(plainText);
        //     string userRequestCode = "";
        //     foreach (byte b in userNumberByte)
        //     {
        //         userRequestCode += b.ToString();
        //     }
        //     long userRequestCodeDouble = Convert.ToInt64(userRequestCode);
        //     string[] parts = plainText.Split(new string[] { "-" }, StringSplitOptions.RemoveEmptyEntries);
        //     long p1c = Convert.ToInt64(parts[0]);
        //     long p2c = Convert.ToInt64(parts[1]);
        //     long p3c = Convert.ToInt64(parts[2]);


        //     return "";
        // }

        public bool ValidateToken(string token)
        {
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(macId()));


            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // ValidIssuer = myIssuer,
                    // ValidAudience = myAudience,
                    IssuerSigningKey = key
                }, out SecurityToken validatedToken);
            }
            catch/*(Exception e)*/
            {
                // Console.WriteLine(e.Message);
                return false;
            }
            return true;
        }


        private static string GetClaim(string jwt, string type)
        {
            // var token0 = await context.GetTokenAsync("name");
            // var me = context.User.Claims;
            var token = new JwtSecurityTokenHandler().ReadJwtToken(jwt);
            var claim = token.Claims.SingleOrDefault(e => e.Type == type);

            return claim?.Value;
        }

        private static string GetHash(string s)
        {
            var sec = new MD5CryptoServiceProvider();
            var enc = new ASCIIEncoding();
            byte[] bt = enc.GetBytes(s);
            return GetHexString(sec.ComputeHash(bt));
        }

        private static string GetHexString(byte[] bt)
        {
            string s = string.Empty;
            for (int i = 0; i < bt.Length; i++)
            {
                byte b = bt[i];
                int n, n1, n2;
                n = (int)b;
                n1 = n & 15;
                n2 = (n >> 4) & 15;
                if (n2 > 9)
                    s += ((char)(n2 - 10 + (int)'A')).ToString();
                else
                    s += n2.ToString();
                if (n1 > 9)
                    s += ((char)(n1 - 10 + (int)'A')).ToString();
                else
                    s += n1.ToString();
                if ((i + 1) != bt.Length && (i + 1) % 2 == 0) s += "-";
            }
            return s;
        }

        private static string cpuId()
        {
            //Uses first CPU identifier available in order of preference
            //Don't get all identifiers, as very time consuming
            string retVal = identifier("Win32_Processor", "UniqueId");
            if (retVal == "") //If no UniqueID, use ProcessorID
            {
                retVal = identifier("Win32_Processor", "ProcessorId");
                if (retVal == "") //If no ProcessorId, use Name
                {
                    retVal = identifier("Win32_Processor", "Name");
                    if (retVal == "") //If no Name, use Manufacturer
                    {
                        retVal = identifier("Win32_Processor", "Manufacturer");
                    }
                    //Add clock speed for extra security
                    retVal += identifier("Win32_Processor", "MaxClockSpeed");
                }
            }
            return retVal;
        }
        //BIOS Identifier
        private static string biosId()
        {
            return identifier("Win32_BIOS", "Manufacturer")
            + identifier("Win32_BIOS", "SMBIOSBIOSVersion")
            + identifier("Win32_BIOS", "IdentificationCode")
            + identifier("Win32_BIOS", "SerialNumber")
            + identifier("Win32_BIOS", "ReleaseDate")
            + identifier("Win32_BIOS", "Version");
        }
        //Main physical hard drive ID
        private static string diskId()
        {
            return identifier("Win32_DiskDrive", "Model")
            + identifier("Win32_DiskDrive", "Manufacturer")
            + identifier("Win32_DiskDrive", "Signature")
            + identifier("Win32_DiskDrive", "TotalHeads");
        }
        //Motherboard ID
        private static string baseId()
        {
            return identifier("Win32_BaseBoard", "Model")
            + identifier("Win32_BaseBoard", "Manufacturer")
            + identifier("Win32_BaseBoard", "Name")
            + identifier("Win32_BaseBoard", "SerialNumber");
        }
        //Primary video controller ID
        private static string videoId()
        {
            return identifier("Win32_VideoController", "DriverVersion")
            + identifier("Win32_VideoController", "Name");
        }
        //First enabled network card ID
        private static string macId()
        {
            return identifier("Win32_NetworkAdapterConfiguration", "MACAddress"/*, "IPEnabled"*/);
        }

        //Return a hardware identifier
        private static string identifier(string wmiClass, string wmiProperty)
        {
            string result = "";
            var mc = new ManagementClass(wmiClass);

            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {


                ManagementObjectCollection moc = mc.GetInstances();
                foreach (ManagementObject mo in moc)
                {
                    //Only get the first one
                    if (result == "")
                    {
                        try
                        {
                            result = mo[wmiProperty].ToString();
                            break;
                        }
                        catch
                        {
                        }
                    }
                }

            }
            return result;
        }



    }
}