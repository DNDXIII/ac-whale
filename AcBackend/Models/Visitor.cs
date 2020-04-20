

using System;

public class Visitor
{
    public long Id { get; set; }

    public string Name { get; set; }

    public DateTime DateCreated { get; set; }


    public Visitor()
    {
        this.DateCreated = DateTime.Now;
    }
}

