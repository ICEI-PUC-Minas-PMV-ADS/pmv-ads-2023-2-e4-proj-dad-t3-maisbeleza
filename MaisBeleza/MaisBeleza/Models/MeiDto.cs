using MaisBeleza.Models;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    public class MeiDto
    {
        public int? Id { get; set; }

        [Required]
        public string NomeMei { get; set; }

        [Required]
        public string Email { get; set; }

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
        public string Estado { get; set; }

        [Required]
        public Perfil Perfil { get; set; }

        [RequiredOnCreate] // Anotação personalizada
        public string Password { get; set; }

        [Required]
        public string HorarioFuncionamento { get; set; }
    }
}
[AttributeUsage(AttributeTargets.Property)]
public class RequiredOnCreateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        var model = (MeiDto)validationContext.ObjectInstance;

        if (model.Id == null && string.IsNullOrEmpty(value as string))
        {
            return new ValidationResult("O campo é obrigatório durante a criação do perfil.");
        }

        return ValidationResult.Success;
    }
}


