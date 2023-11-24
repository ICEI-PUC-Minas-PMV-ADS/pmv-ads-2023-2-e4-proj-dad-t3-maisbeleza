using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    [Table("Meis")]
    public class Mei : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nome")]
        [Required(ErrorMessage = "É necessário informar o nome!")]
        public string NomeMei { get; set; }

        [Display(Name = "E-mail")]
        [Required(ErrorMessage = "É necessário informar o email!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "É necessário informar o telefone!")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "É necessário informar a rua!")]
        public string Rua { get; set; }

        [Display(Name = "Número")]
        [Required(ErrorMessage = "É necessário informar o numero!")]
        public string Numero { get; set; }

        [Required(ErrorMessage = "É necessário informar o bairro!")]
        public string Bairro { get; set; }

        [Required(ErrorMessage = "É necessário informar a cidade!")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "É necessário informar o estado!")]
        public string Estado { get; set; }

        [Required]
        public Perfil Perfil { get; set; }

        [Display(Name = "Senha")]
        [Required(ErrorMessage = "É necessário informar a senha!")]
        [JsonIgnore]
        public string Password { get; set; }

        [Display(Name = "Horário de funcionamento")]
        [Required(ErrorMessage = "É necessário informar o horário!")]
        public string HorarioFuncionamento { get; set; }

        public ICollection<Servico> Servicos { get; set; }

        public ICollection<Faturamento> Faturamentos { get; set; }

        public ICollection<Agendamento> Agendamentos { get; set; }
    }
}