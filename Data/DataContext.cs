using Microsoft.EntityFrameworkCore;
using PortalRandkowy.API.Controllers.Models;

namespace PortalRandkowy.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
        
    }
}