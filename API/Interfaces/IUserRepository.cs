﻿using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);

        Task<bool> SaveAllAsync(int id);  

        Task<IEnumerable<AppUser>>GetUsersAsync();

        Task<AppUser?>GetUserByIdAsync(int id);

        Task<AppUser?> GetByUsernameAsync(string username);

        Task<IEnumerable<MemberDto>> GetMembersAsync();
        Task<MemberDto?> GetMemberAsync(string username);

    }
}
