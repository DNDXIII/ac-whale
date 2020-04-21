using System.ComponentModel.DataAnnotations;

public class TurnipIsland : Island
{
    [Range(0, 1000, ErrorMessage = "Invalid value!")]
    public int CurrentPrice { get; set; }
    public bool Buying { get; set; }
}

