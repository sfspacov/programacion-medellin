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
        public IActionResult Post([FromBody] User parametroUser)
        {
            if (parametroUser.Clave != "" && parametroUser.Correo != "")
            {
                SalvarUsuario(parametroUser);
                return Ok(new { mensaje = "Datos salvos con suceso!" });
            }
            return BadRequest("No fue posible salvar los datos");
        }

        private void SalvarUsuario(User parametroUser)
        {

        }
    }
}