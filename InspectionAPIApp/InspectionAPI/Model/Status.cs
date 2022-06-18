using System.ComponentModel.DataAnnotations;

namespace InspectionAPI.Model
{
    public class Status
    {
        public int Id { get; set; } 

        [StringLength(20)]
        public string NamStatusOption { get; set; } = String.Empty;
    }
}
