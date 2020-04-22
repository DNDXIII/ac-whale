using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace AcBackend.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Islands",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    EntryFeeType = table.Column<int>(nullable: false),
                    EntryFeeAmount = table.Column<int>(nullable: false),
                    Hemisphere = table.Column<int>(nullable: false),
                    DodoCode = table.Column<string>(maxLength: 5, nullable: true),
                    MaxVisitors = table.Column<int>(nullable: false),
                    MaxVisitorsQueue = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    CurrentVillager = table.Column<int>(nullable: true),
                    CurrentPrice = table.Column<int>(nullable: true),
                    Buying = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Islands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "QueueUsers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    IslandQueueId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QueueUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QueueUsers_Islands_IslandQueueId",
                        column: x => x.IslandQueueId,
                        principalTable: "Islands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VisitingUsers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    IslandVisitingId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VisitingUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VisitingUsers_Islands_IslandVisitingId",
                        column: x => x.IslandVisitingId,
                        principalTable: "Islands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_QueueUsers_IslandQueueId",
                table: "QueueUsers",
                column: "IslandQueueId");

            migrationBuilder.CreateIndex(
                name: "IX_VisitingUsers_IslandVisitingId",
                table: "VisitingUsers",
                column: "IslandVisitingId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "QueueUsers");

            migrationBuilder.DropTable(
                name: "VisitingUsers");

            migrationBuilder.DropTable(
                name: "Islands");
        }
    }
}
