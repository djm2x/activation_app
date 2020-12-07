using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace apps.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Activations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nom = table.Column<string>(type: "TEXT", nullable: true),
                    Prenom = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Website = table.Column<string>(type: "TEXT", nullable: true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    NomProduit = table.Column<string>(type: "TEXT", nullable: true),
                    MacId = table.Column<string>(type: "TEXT", nullable: true),
                    CpuId = table.Column<string>(type: "TEXT", nullable: true),
                    BiosId = table.Column<string>(type: "TEXT", nullable: true),
                    BaseId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nom = table.Column<string>(type: "TEXT", nullable: true),
                    Prenom = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Password = table.Column<string>(type: "TEXT", nullable: true),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    Matricule = table.Column<string>(type: "TEXT", nullable: true),
                    Phone = table.Column<string>(type: "TEXT", nullable: true),
                    Profil = table.Column<string>(type: "TEXT", nullable: true),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "ImageUrl", "IsActive", "Matricule", "Nom", "Password", "Phone", "Prenom", "Profil" },
                values: new object[] { 1, "sa@angular.io", "", true, "1171", "Fleury", "123", "+33 535050366", "Andéol", "sa" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "ImageUrl", "IsActive", "Matricule", "Nom", "Password", "Phone", "Prenom", "Profil" },
                values: new object[] { 2, "admin@angular.io", "", false, "1637", "Maillard", "123", "+33 337453162", "Silvère", "admin" });

            migrationBuilder.CreateIndex(
                name: "IX_Activations_Email",
                table: "Activations",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_Activations_Website",
                table: "Activations",
                column: "Website");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activations");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
