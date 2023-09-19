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
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal ValorTotal { get; set; }

        [Required]
        public int MeiId { get; set; }
        public Mei Mei { get; set; }

    }
}
