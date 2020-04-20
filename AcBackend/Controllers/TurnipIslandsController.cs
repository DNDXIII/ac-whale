using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AcBackend.Models;

namespace AcBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurnipIslandsController : ControllerBase
    {
        private readonly ACContext _context;

        public TurnipIslandsController(ACContext context)
        {
            _context = context;
        }

        // GET: api/TurnipIslands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TurnipIsland>>> GetTurnipIslands()
        {
            return await _context.TurnipIslands.ToListAsync();
        }

        // GET: api/TurnipIslands/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TurnipIsland>> GetTurnipIsland(long id)
        {
            var turnipIsland = await _context.TurnipIslands.FindAsync(id);

            if (turnipIsland == null)
            {
                return NotFound();
            }

            return turnipIsland;
        }

        // PUT: api/TurnipIslands/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTurnipIsland(long id, TurnipIsland turnipIsland)
        {
            if (id != turnipIsland.Id)
            {
                return BadRequest();
            }

            _context.Entry(turnipIsland).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurnipIslandExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TurnipIslands
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TurnipIsland>> PostTurnipIsland(TurnipIsland turnipIsland)
        {
            _context.TurnipIslands.Add(turnipIsland);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTurnipIsland", new { id = turnipIsland.Id }, turnipIsland);
        }

        // DELETE: api/TurnipIslands/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TurnipIsland>> DeleteTurnipIsland(long id)
        {
            var turnipIsland = await _context.TurnipIslands.FindAsync(id);
            if (turnipIsland == null)
            {
                return NotFound();
            }

            _context.TurnipIslands.Remove(turnipIsland);
            await _context.SaveChangesAsync();

            return turnipIsland;
        }



        // POST: api/TurnipIslands/5/VisitorsQueue
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}/VisitorsQueue")]
        public async Task<ActionResult<TurnipIsland>> PostVisitorToQueue(long id, Visitor visitor)
        {
            var turnipIsland = await _context.TurnipIslands.FindAsync(id);

            if (turnipIsland == null)
            {
                return NotFound();
            }

            turnipIsland.Visitors.Add(visitor);
            await _context.SaveChangesAsync();

            return turnipIsland;
        }




        private bool TurnipIslandExists(long id)
        {
            return _context.TurnipIslands.Any(e => e.Id == id);
        }
    }
}
