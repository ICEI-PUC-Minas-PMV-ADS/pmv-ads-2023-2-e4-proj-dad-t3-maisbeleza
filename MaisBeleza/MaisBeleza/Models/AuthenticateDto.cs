using System.ComponentModel.DataAnnotations;

namespace MaisBeleza.Models
{
    public class AuthenticateDto
    {
        
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }    
    }
}
