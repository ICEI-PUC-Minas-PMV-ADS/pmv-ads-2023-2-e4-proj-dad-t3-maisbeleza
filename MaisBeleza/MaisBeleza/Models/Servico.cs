using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
 {

    [Table("Servicos")] 
    public class Servico : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        
        [Display(Name = "Serviço")]
        [Required(ErrorMessage = "É necessário informar o serviço!")]
        public string NomeServico { get; set; }

        [Display(Name = "Descrição")]
        [Required(ErrorMessage = "É necessário informar a descrição do serviço!")]
        public string Descricao { get; set; }

        [Display(Name = "Duração")]
        [Required(ErrorMessage = "É necessário informar a duração do serviço!")]
        public int Duracao { get; set; }

        [Display(Name = "Valor (R$)")]
        [Required(ErrorMessage = "É necessário informar o valor!")]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Valor { get; set; }

        [Required]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

        public ICollection<Agenda> Agendamentos { get; set; }

    }
}



 