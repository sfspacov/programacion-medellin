﻿namespace WebApi.Models
{
    public class User
    {
        public int? Id { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public string? Apellido { get; set; }
        public string? Tema { get; set; }
        public string Mesaje { get; set; }

    }
}
