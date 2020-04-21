

using System;
using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public long Id { get; set; }

    public string Name { get; set; }

    public DateTime DateCreated { get; set; }

    public User()
    {
        this.DateCreated = DateTime.Now;
    }
}

