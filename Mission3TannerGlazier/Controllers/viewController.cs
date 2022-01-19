using Microsoft.AspNetCore.Mvc;
using Mission3TannerGlazier.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3TannerGlazier.Controllers
{
    public class viewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /*Get*/
        [HttpGet]
        public IActionResult Grades()
        {
            return View();
        }

        /*Post*/
        [HttpPost]
        public IActionResult Grades (GradesModel model)
        {
            return View();
        }
    }
}
