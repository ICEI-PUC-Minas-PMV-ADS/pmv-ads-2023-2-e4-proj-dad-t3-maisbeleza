﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MaisBeleza.Models
{
    [Table("Clientes")]
    public class Cliente : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Telefone { get; set; }
        [Required]
        public Perfil Perfil { get; set; }

        [Required]
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
