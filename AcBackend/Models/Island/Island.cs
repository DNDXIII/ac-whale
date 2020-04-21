using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public enum EntryFeeType
{
    Bells,
    NookTicket,
    Other,
    None
}
public enum Hemisphere
{
    North,
    South
}

public class Island
{
    [Key]
    public long Id { get; set; }

    public DateTime DateCreated { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public EntryFeeType EntryFeeType { get; set; }

    public int EntryFeeAmount { get; set; }

    public Hemisphere Hemisphere { get; set; }

    [StringLength(5, ErrorMessage = "Dodo code must have 5 characters.")]
    public string DodoCode { get; set; }

    [Range(0, 30, ErrorMessage = "Invalid value!")]
    public int MaxVisitors { get; set; }

    [Range(0, int.MaxValue, ErrorMessage = "Invalid value!")]
    public int MaxVisitorsQueue { get; set; }


    public ICollection<VisitingUser> Visitors { get; set; } = new List<VisitingUser>(); // Visitors inside

    public Queue<QueueUser> VisitorsQueue { get; set; } = new Queue<QueueUser>(); // Visitors waiting


    public Island()
    {
        this.DateCreated = DateTime.Now;
    }
}

