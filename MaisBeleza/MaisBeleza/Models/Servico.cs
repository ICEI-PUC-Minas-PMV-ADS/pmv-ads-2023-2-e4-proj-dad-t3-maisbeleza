using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
 {

    [Table("Servicos")] 
    public class Servico : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string NomeServico { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public int Duracao { get; set; }
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Valor { get; set; }

        [Required]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

        public ICollection<Agenda> Agendamentos { get; set; }

    }
}



 