using Microsoft.EntityFrameworkCore;

namespace AcBackend.Models
{
    public class ACContext : DbContext
    {
        public ACContext(DbContextOptions<ACContext> options)
            : base(options)
        {
        }

        public DbSet<Island> Islands { get; set; }
        public DbSet<TurnipIsland> TurnipIslands { get; set; }
        public DbSet<EventIsland> EventIslands { get; set; }

        public DbSet<QueueUser> QueueUsers { get; set; }
        public DbSet<VisitingUser> VisitingUsers { get; set; }

    }
}