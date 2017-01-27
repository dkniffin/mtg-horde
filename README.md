# This is a work in progress, and isn't ready for prime-time yet.

# MTG Horde Player

This tool is a helper for playing Horde, which is a cooperative format for Magic: The Gathering, where one or more players can play against a "dumb" deck.

# Format Rules

- There are two factions: the **Horde** (this app), and the **Survivors** (players)
- The Horde will be controlled by this app. It starts with a pre-built deck of 200 cards
- The Survivors are a group of one or more players, who can use any pre-built deck of their choosing.
- The Survivors have a shared life total, which starts at 20 for each player (eg: 1 player = 20 life, 2 players = 40 life, etc)

### Win conditions:
- The Horde wins if the Survivors' shared life total drops to zero or below.
- The Survivors win if the Horde has no cards in its library or in hand, and no creatures on the battlefield.

### Survivor Rules
- Survivors have three turns to set up their defenses before the Horde gets its first turn. Then the turns alternate like normal
- Survivors take their turn simultaneously, and attack and block as a team, like in the Two Headed Giant format.
- When the Survivors attack the Horde, they must choose to either "Confront the Horde" or "Burn the Bodies"
  - If they decide to "Confront the Horde", any combat damage dealt will result in discarding that many cards from the top of the deck, into the graveyard. In the app, that can be done via the "Discard" button below the deck.
  - If they decide to "Burn the Bodies", any combat damage dealt will result in exiling that many cards randomly from the graveyard. In the app, that can be done via the "Exile" button below the graveyard.
  - Survivors must choose one option or the other. They can't "Confront the Horde" with some creatures, and "Burn the Bodies" with others.
  - If you get an additional combat phase, you may choose a different option for it.
- When direct damage is dealt to the Horde, it should be treated as "Confronting the Horde" (ie: discard from the library into the graveyard).

### Horde Rules:
Most of these rules are (or will be) built into the app.
- The Horde has infinite mana
- Any decisions the horde has to make are random.
- The Horde starts with one "Intensity" emblem, and one "Time" counter
- On the Horde's turn, it will reveal cards from the top of its library, until X non-token cards are revealed, where X is the number of "Intensity" emblems the Horde has. Then all those cards will be cast (in the order they were revealed). Then, if the Horde has any cards that can be cast from its graveyard or its hand, it casts those.
- All creatures controlled by the Horde have haste and "This creature must attack each turn if able"
- At the end of each Horde turn, the Horde's "Time" counter increases by one. When it reaches 10 or more, it is reduced by 10, and the Horde gets an additional "Intensity" emblem.
- If the Horde gains life, nothing happens.

Sources:
- http://mtgsalvation.gamepedia.com/Horde_Magic
- http://www.mtgsalvation.com/forums/the-game/commander-edh/variant-commander/490641-zombie-horde-200-card-list

# Future ideas

- More decks
- When the horde gains life, put that many random cards from the graveyard on top of the library, and shuffle it.

# Contributing

- `git clone`
- `npm install`
- `npm start` will start up the app at http://localhost:3000/game
- `npm run storybook` will start storybook at http://localhost:9009
