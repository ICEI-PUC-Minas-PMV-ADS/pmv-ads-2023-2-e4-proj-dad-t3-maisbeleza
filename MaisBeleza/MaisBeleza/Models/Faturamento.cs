using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MaisBeleza.Models
{

    [Table("Faturamentos")]
    public class Faturamento: LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        public DateTime Data { get; set; }
        [Required(ErrorMessage = "É necessário informar a data!")]
        [Column(TypeName = "decimal(18,2)")]
        public decimal ValorTotal { get; set; }

        [Required(ErrorMessage = "É necessário informar o valor!")]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

    }
}
