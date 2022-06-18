using InspectionAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace InspectionAPI.Data
{
    public class InspectionDataContext:DbContext
    {
        public InspectionDataContext(DbContextOptions<InspectionDataContext> options) : base(options)
        {

        }

        public DbSet<Inspection> Inspections { get; set; }
        public DbSet<InspectionType> InspectionTypes { get; set; }
        public DbSet<Status> Statuses { get; set; }
    }
}
