using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    public class MeiDto
    {
        public int? Id { get; set; }
        [Required]
        public string NomeMei { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Telefone { get; set; }
        [Required]
        public string Rua { get; set; }
        [Required]
        public string Numero { get; set; }
        [Required]
        public string Bairro { get; set; }
        [Required]
        public string Cidade { get; set; }
        [Required]
        public string Estado { get; set; }
        [Required]
        public Perfil Perfil { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string HorarioFuncionamento { get; set; }
    }
}
