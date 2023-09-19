using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
{
    [Table("Meis")]
    public class Mei : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string NomeMei { get; set; }
        [Required]
        public string Telefone { get; set; }
        [Required]
        public string Rua { get; set; }
        [Required]
        public int Numero { get; set; }
        [Required]
        public string Bairro { get; set; }
        [Required]
        public string Cidade { get; set; }
        [Required]
        public string Estado { get; set; }
        [Required]
        public string Senha { get; set; }
    }
}
