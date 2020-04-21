using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AcBackend.Models;

namespace AcBackend.Controllers
{
    [Route("api/Islands/Events")]
    [ApiController]
    public class EventIslandsController : ControllerBase
    {
        private readonly ACContext _context;

        public EventIslandsController(ACContext context)
        {
            _context = context;
        }

        // GET: api/EventIslands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventIsland>>> GetEventIslands()
        {
            return await _context.EventIslands.ToListAsync();
        }

        // GET: api/EventIslands/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventIsland>> GetEventIsland(long id)
        {
            var eventIsland = await _context.EventIslands.FindAsync(id);

            if (eventIsland == null)
            {
                return NotFound();
            }

            return eventIsland;
        }

        // PUT: api/EventIslands/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventIsland(long id, EventIsland eventIsland)
        {
            if (id != eventIsland.Id)
            {
                return BadRequest();
            }

            _context.Entry(eventIsland).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventIslandExists(id))
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

        // POST: api/EventIslands
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<EventIsland>> PostEventIsland(EventIsland eventIsland)
        {
            _context.EventIslands.Add(eventIsland);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEventIsland", new { id = eventIsland.Id }, eventIsland);
        }

        // DELETE: api/EventIslands/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EventIsland>> DeleteEventIsland(long id)
        {
            var eventIsland = await _context.EventIslands.FindAsync(id);
            if (eventIsland == null)
            {
                return NotFound();
            }

            _context.EventIslands.Remove(eventIsland);
            await _context.SaveChangesAsync();

            return eventIsland;
        }

        private bool EventIslandExists(long id)
        {
            return _context.EventIslands.Any(e => e.Id == id);
        }
    }
}
