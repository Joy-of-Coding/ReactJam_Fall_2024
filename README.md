# ReactJam Dungeon Crawler

A minimalist retro dungeon crawler game developed for ReactJam using React + TypeScript + Vite.

## Development Schedule

- Start: 9/27/24
- End: 10/06/24

## Theme: Less is More, Minimalism Retro

Combine your Life Task with the fun of dungeon crawling to accomplish more in Life! The game centers around a TO-DO List input by the player, combining real-life task completion with dungeon exploration.
- 3 daily tasks, set by the Player, open access to the Dungeon.
- 5 levels of edge-of-your-seat non-stop action to break away from the mundane day to day life!
- A riveting story as we follow the adventurers of our intrepid champion, George, 
    - Watch as he battles the forces of Ultimate Evil to save his friend, Bessie
    - Help to George to battle and overcome great Odds to complete his Life Quest
    - Get life stuff done and help save the world, that's a darn combination!

- Happy Life and Happy Crawling!

## Core Mechanics

# TO-DO List
- Player inputs 3 daily real-life tasks
- Complete tasks and check them off of the list
- Completing real-life tasks unlocks Daily dungeon access

### Dungeon Structure
- 5 levels to start
- Dungeon completion requires clearing all of current level
- Door to next level opens upon quest completion

### Character Progression
- Basic attributes increase as player levels up
- Level cap: 5
- Attributes: Attack, Defense, Health, Experience

### Combat
- Player has the advantage and always goes first
- Turn-based encounters
- Equipment system for attacks and defense: +2
- Health Potions consumed before intiate combat

### Rewards
- Player sets tasks per day to Open the dungeon
- Player gets the reward of Dungeon Play and completion of a Dungeon Crawl

## Game Elements

### Items
- Weapons (minimalist, whole pieces)
- Armor (minimalist, whole pieces)
- Health potions X 2

### Monsters
- Attributes scale with dungeon levels
- Boss monster on each level
- Types: 
    - Snake
    - Zombie Necromancer - Kassie
    - Skeleton Giant
    - Ettin (two-headed giant)
    - Drow - Queen of Shadows 

## Formulas
- atk = attack(lvl) + weapon
- def = defense(lvl) + armor
- hit points = based on matrix by level
- experience & leveling = based on the level completed within the Dungeon

## Level Progression Chart
-- Example - 

| Level | Experience | Attack | Defense |       | Hit Points |
|-------|------------|--------|---------|-------|------------|
| Base  | 1          | 10     | 10      |       | 100        |
| 1     | 1001       | 10     | 10      |       | 100        |
| 2     | 2001       | 12     | 12      |       | 120        |
| 3     | 3001       | 14     | 14      |       | 140        |
| 4     | 4001       | 16     | 16      |       | 160        |
| 5     | 5001       | 18     | 18      |       | 180        |
| 6     | 16001      | 20     | 20      |       | 250        |
| 7     | 20001      | 22     | 22      |       | 300        |
| 8     | 25001      | 24     | 24      |       | 350        |
| 9     | 30001      | 26     | 26      |       | 400        |
| 10    | 40001      | 28     | 28      |       | 500        |


## Future Enhancements (Time Permitting)

- Create skins for the dungeon, player, monsters, armor, weapons, etc.
- Expanded monster variety
- More diverse weapons and armor
- Enhanced combat skills: food, stamina, dexterity, etc.

## Story Line Template
1. Start Point 
>a. Example: 
>>i. Farmer enters the dungeon with Rake and clothes to get back favorite milk cow(Boring) 
2. Dungeon level Completion
    1. **Level 1**
        - Quest: Weapon quest
            - Stumbles across a rusty sword and rusty helm
        - Weapon: Rusty Sword
        - Armor: Battered Helm
        - Level Minimum: 0
        - Monster: Snake
        - Boss: Giant Arachnid

    2. **Level 2**
        - Quest: Armor quest
            - find chest plate and amulet for chest plate to avoid being turned into a zombie
        - Weapon: Short War Spear
        - Armor: Chest Plate of Non-turning
        - Level Minimum: 1
        - Monster: Zombie
        - Boss: Kassie(Necromancer) -- Turned to evil, villager Hag from town

    3. **Level 3**
        - Quest: Add “what took my %$&#@ milk cow” Quest
            - Some evil is afoot and took my milk cow Bessie. find clues as to what happened to George
        - Weapon: Crafted Mace
        - Armor: Emblazoned Shield
        - Level Minimum: 5
        - Monster: Skeleton
        - Boss: Death Tyrant

    4. **Level 4**
        - Quest: Add “How do i find my %$&#@ milk cow” Quest
            - find clues as to where my Bessie is and how to find the alter on the fifth level
        - Weapon: Two-handed Battle Axe
        - Armor: Spiked Hand Guards
        - Level Minimum: 9
        - Monster: Ogre
        - Boss: Ettin

    5. **Level 5**
        - Quest: Add “how do I defeat the Boss monster and get my %$&#@ milk cow back” Quest
            - how tough can a shadow be and how do I hit it?
        - Weapon: Crystal Staff of Light
        - Armor: Radiant Great Helm
        - Level Minimum: 14
        - Monster: Drow, Dark Elves
        - Boss: Shadow of the Dragon Queen

## Dungeon Completion
- Completion of the 5th level of the dungeon triggers:
    - Player defined Extra real-life reward 

    - Along with the 2X experience boost for the day to prepare for level 6
        - Later add: “Farmer decides he has a taste for this and wonders to himself “I wonder what is down these stairs, because at the end of the day, she really wasn't a very good milk cow (dead) anyway!!” 