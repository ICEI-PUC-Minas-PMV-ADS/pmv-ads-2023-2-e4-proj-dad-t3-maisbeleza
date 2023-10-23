using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
{
    [Table("Agendamentos")]
    public class Agendamento : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "É necessário informar a data!")]
        public DateTime Data { get; set; }

        [Display(Name = "Horário")]
        [Required(ErrorMessage = "É necessário informar o horário!")]
        public string Horario { get; set; }

        [Required]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

        [Required]
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public int ServicoId { get; set; }
        public Servico Servico { get; set; }

    }
}
