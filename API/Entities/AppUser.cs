using API.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public required string UserName { get; set; }
        public byte[] PasswordHash { get; set; } = [];
        public byte[] PasswordSalt { get; set; } = [];
        public DateOnly DateOfbirth { get; set; }
        public required string KnownAs { get; set; }
        public DateTime Created {  get; set; }
        public DateTime LastActive{ get; set; }
        public required string Gender { get; set; }
        public string? Interoduction {  get; set; }
        public  string? Interests { get; set; }
        public string? LookingFor { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }
        public List<Photo> Photos { get; set; } = [];

        //public int GetAge()
        //{
        //    return DateOfbirth.CalculateAge();
        //}
    }
}