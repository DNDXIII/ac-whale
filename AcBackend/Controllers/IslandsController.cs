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
    public class IslandsController : ControllerBase
    {
        private readonly ACContext _context;

        public IslandsController(ACContext context)
        {
            _context = context;
        }

        // GET: api/Islands
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Island>>> GetIslands()
        {
            return await _context.Islands.ToListAsync();
        }

        // DELETE: api/Islands/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Island>> DeleteIsland(long id)
        {
            var island = await _context.Islands.FindAsync(id);
            if (island == null)
            {
                return NotFound();
            }

            _context.Islands.Remove(island);
            await _context.SaveChangesAsync();

            return island;
        }
    }
}
