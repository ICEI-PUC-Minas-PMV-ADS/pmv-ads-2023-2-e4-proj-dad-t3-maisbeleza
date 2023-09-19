using System.ComponentModel.DataAnnotations.Schema;

namespace MaisBeleza.Models
{
    [Table("Agenda")]
    public class Agenda
    {
        public int AgendamentoId { get; set; }
        public Agendamento Agendamento { get; set; }

        public int ServicoId { get; set; }
        //public Servico Servico { get; set; }
    }
}
