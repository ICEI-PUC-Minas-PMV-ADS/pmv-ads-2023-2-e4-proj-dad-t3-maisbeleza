using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MaisBeleza.Migrations
{
    /// <inheritdoc />
    public partial class V2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Senha",
                table: "Meis",
                newName: "Password");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Meis",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Perfil",
                table: "Meis",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ClienteId",
                table: "LinkDto",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Clientes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Perfil",
                table: "Clientes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_ClienteId",
                table: "LinkDto",
                column: "ClienteId");

            migrationBuilder.AddForeignKey(
                name: "FK_LinkDto_Clientes_ClienteId",
                table: "LinkDto",
                column: "ClienteId",
                principalTable: "Clientes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkDto_Clientes_ClienteId",
                table: "LinkDto");

            migrationBuilder.DropIndex(
                name: "IX_LinkDto_ClienteId",
                table: "LinkDto");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Meis");

            migrationBuilder.DropColumn(
                name: "Perfil",
                table: "Meis");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "LinkDto");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "Perfil",
                table: "Clientes");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Meis",
                newName: "Senha");
        }
    }
}
