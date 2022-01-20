using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3TannerGlazier.Models
{
    public class GradesModel
    {
        /* Set all variables to be required and only accept values in a range from 0 to 100*/
        /* add getters and setters for each variable */
        [Required]
        [Range(0,100)]
        public float Assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public float Group { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float Exam { get; set; }
        [Required]
        [Range(0, 100)]
        public float INTEX { get; set; }
    }
}
