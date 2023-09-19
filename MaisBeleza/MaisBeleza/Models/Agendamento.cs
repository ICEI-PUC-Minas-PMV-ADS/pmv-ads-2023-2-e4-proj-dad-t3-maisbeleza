using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
{
    [Table("Agendamentos")]
    public class Agendamento : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime Data { get; set; }
        [Required]
        public string Horario { get; set; }

        [Required]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

        [Required]
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public ICollection<Agenda> Servicos { get; set; }
    }
}
