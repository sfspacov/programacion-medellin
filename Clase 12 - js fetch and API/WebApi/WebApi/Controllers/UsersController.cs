using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        [EnableCors("CorsPolicy")]
        [HttpPost]
        public IActionResult Get([FromBody]User user)
        {
            return Ok(user);
        }
    }
}