using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        [EnableCors("CorsPolicy")]
        [HttpPost]
        public IActionResult Get([FromBody] User user)
        {
            return Ok(new { mensaje = "Datos salvos con suceso!" });
        }
    }
}