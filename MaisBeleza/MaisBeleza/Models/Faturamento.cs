using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MaisBeleza.Models
{

    [Table("Faturamentos")]
    public class Faturamento: LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "É necessário informar a data!")]
        public DateTime Data { get; set; }
        
        [Display(Name = "Valor (R$)")]
        [Required(ErrorMessage = "É necessário informar o valor!")]
        [Column(TypeName = "decimal(18,2)")]
        public decimal ValorTotal { get; set; }

        public int MeiId { get; set; }
        public Mei Mei { get; set; }

    }
}
