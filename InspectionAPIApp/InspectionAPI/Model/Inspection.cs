﻿using System.ComponentModel.DataAnnotations;

namespace InspectionAPI.Model
{
    public class Inspection
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = String.Empty;

        [StringLength(200)]
        public string Comments { get; set; } = String.Empty;

        public int InspectionTypeId { get; set; }

        public InspectionType? InspectionType { get; set; }

    }
}
