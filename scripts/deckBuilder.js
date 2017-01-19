const mtg = require('mtgsdk');
const Promise = require('bluebird');

const cards = [
  { name: "Boneknitter", count: 1 },
  { name: "Death Baron", count: 1 },
  { name: "Ghoultree", count: 1 },
  { name: "Grave Titan", count: 1 },
  { name: "Graveborn Muse", count: 2 },
  { name: "Infectious Horror", count: 1 },
  { name: "Lightning Reaver", count: 1 },
  { name: "Mikaeus, the Unhallowed", count: 1 },
  { name: "Noxious Ghoul", count: 3 },
  { name: "Rotting Rats", count: 6 },
  { name: "Sedris, the Traitor King", count: 1 },
  { name: "Sutured Ghoul", count: 1 },
  { name: "Toxic Nim", count: 2 },
  { name: "Unbreathing Horde", count: 1 },
  { name: "Undead Warchief", count: 3 },
  { name: "Vengeful Dead", count: 3 },
  { name: "Vulturous Zombie", count: 2 },
  { name: "Back to Nature", count: 1 },
  { name: "Army of the Damned", count: 1 },
  { name: "Creeping Corrosion", count: 2 },
  { name: "Decree of Pain", count: 1 },
  { name: "Past in Flames", count: 2 },
  { name: "Plaguewind", count: 1 },
  { name: "Ruination", count: 1 },
  { name: "Smallpox", count: 2 },
  { name: "Syphon Flesh", count: 2 },
  { name: "Syphon Mind", count: 4 },
  { name: "Temporal Extortion", count: 3 },
  { name: "Tribute to the Wild", count: 1 },
  { name: "Zombie Apocalypse", count: 4 },
  { name: "Bad Moon", count: 1 },
  { name: "Call to the Grave", count: 1 },
  { name: "Destructive Flow", count: 1 },
  { name: "Endless Ranks of the Dead", count: 4 },
  { name: "Everlasting Torment", count: 1 },
  { name: "Forsaken Wastes", count: 1 },
  { name: "Gibbering Descent", count: 1 },
  { name: "Grave Betrayal", count: 1 },
  { name: "Gravepact", count: 1 },
  { name: "Havoc Festival", count: 1 },
  { name: "No Mercy", count: 1 },
  { name: "Painful Quandary", count: 1 },
  { name: "Zombie Giant", count: 10 },
  { name: "Zombie", count: 119 }
]

// http://stackoverflow.com/a/30048623/1202488
function flatten() {
    var flat = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push.apply(flat, flatten.apply(this, arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}

mtg.set.where({}).then(sets => {
  const setCodes = sets.sort((a, b) => a.releaseDate - b.releaseDate)
    .map(set => set.code);

  Promise.map(cards, ({name, count}) => {
    return mtg.card.where({name: '"' + name + '"'})
    .then(result => {
      const chronological = result.sort((a, b) => setCodes.indexOf(a.set) - setCodes.indexOf(b.set));
      const card = chronological[chronological.length - 1];
      return Array(count).fill(card);
    })
  })
  .then(results => {
    const deck = flatten(results);
    // We've got deck! Let's print it out.
    console.log(JSON.stringify(deck))
  })
})
