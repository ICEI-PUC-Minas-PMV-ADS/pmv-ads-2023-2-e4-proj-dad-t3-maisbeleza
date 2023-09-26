using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    [Table("Clientes")]
    public class Cliente : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "É necessário informar o nome!")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "É necessário informar o email!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "É necessário informar o telefone!")]
        public string Telefone { get; set; }
        [Required(ErrorMessage = "É necessário informar o perfil!")]
        public Perfil Perfil { get; set; }

        [Display(Name = "Senha")]
        [Required(ErrorMessage = "É necessário informar a senha!")]
        [JsonIgnore]
        public string Password { get; set; }

        public ICollection<Agendamento> Agendamentos { get; set;}

    }

    public enum Perfil
    {
        [Display(Name = "Administrador")]
        Administrador,
        [Display(Name = "Usuário")]
        Usuario
    }
}
