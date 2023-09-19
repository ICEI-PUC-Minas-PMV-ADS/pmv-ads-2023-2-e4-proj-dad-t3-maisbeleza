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
        public string Numero { get; set; }
        [Required]
        public string Bairro { get; set; }
        [Required]
        public string Cidade { get; set; }
        [Required]
        public Estado Estado { get; set; }
        [Required]
        public string Senha { get; set; }
        [Required]
        public string HorarioFuncionamento { get; set; }

        public ICollection<Servico> Servicos { get; set; }

        public ICollection<Faturamento> Faturamentos { get; set; }

        public ICollection<Agendamento> Agendamentos { get; set; }
    }
        public enum Estado

        {

            AC,

            AL,

            AP,

            AM,

            BA,

            CE,

            DF,

            ES,

            GO,

            MA,

            MT,

            MS,

            MG,

            PA,

            PB,

            PR,

            PE,

            PI,

            RJ,

            RN,

            RS,

            RO,

            RR,

            SC,

            SP,

            SE,

            TO


        }
    }