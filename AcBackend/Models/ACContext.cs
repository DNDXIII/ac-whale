using Microsoft.EntityFrameworkCore;

namespace AcBackend.Models
{
    public class ACContext : DbContext
    {
        public ACContext(DbContextOptions<ACContext> options)
            : base(options)
        {
        }

        public DbSet<TurnipIsland> TurnipIslands { get; set; }
        public DbSet<Visitor> Visitors { get; set; }

    }
}