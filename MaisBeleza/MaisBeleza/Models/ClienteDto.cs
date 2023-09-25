using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    public class ClienteDto
    {
        public int? Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Telefone { get; set; }
        [Required]
        public Perfil Perfil { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
