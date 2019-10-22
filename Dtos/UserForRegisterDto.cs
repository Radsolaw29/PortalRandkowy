using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Nazwa użytkowika jest wymagana!")]
        public string Username { get; set; }
        [Required(ErrorMessage="Hasło użytkowika jest wymagane!")]
        [StringLength(12,MinimumLength=6, ErrorMessage="Hasło musi się składać od 6 do 8 znaków")]
        public string Password { get; set; }
        
    }
}