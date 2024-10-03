# ReactJam Dungeon Crawler

A minimalist dungeon crawler game developed for ReactJam (9/27/24 - 10/06/24).

## Development Schedule

- Start: 9/27/24
- End: 10/06/24

## Theme: Less is More, Minimalism

Combine your Life Task with the fun of dungeon crawling to accomplish more in Life! The game centers around a TO-DO List input by the player, combining real-life task completion with dungeon exploration.
- 3 daily tasks, set by the Player, open access to the Dungeon for that day.
- Completion of 15 tasks within the Week triggers a Player defined reward and 2X Experience reward in Dungeon play.
- Happy Life and Happy Crawling!

## Core Mechanics

# TO-DO List
- Player inputs 3 daily real-life tasks
- Player inputs reward for completion of 15+ real-life tasks
- Completing real-life tasks unlocks Daily dungeon access

### Dungeon Structure
- 5 levels to start
- Dungeon completion requires clearing all of current level
- Door to next level opens upon quest completion

### Luck System
- Completion of 3 Real-Life Tasks opens access to the dungeon for the Day
       ---(Need to define length of open time)
- Base 10% luck to the Open Process to complete dungeon
- Luck increases: 40%, 30%, 20% (High, Medium, Low)


### Character Progression
- Basic attributes increase as player levels up
- Level cap: 10
- Attributes: Attack, Defense, Movement Speed, Health

### Combat
- Player has the advantage and always goes first
- Turn-based encounters
- Dice roll system for attacks and defense

### Rewards
- Player sets tasks per day to Open the dungeon
- Player sets desired reward for completing 15 tasks over 3 days

## Game Elements

### Items
- Weapons and armor (minimalist, whole pieces)
- Health potions
- Poisons

### Monsters
- Attributes scale with dungeon levels
- Boss monster on each level
- Types: Spiders, Skeletons, Zombies, Ogres, Dark Elves

## Formulas
- atk = attack + weapon + (abs(Base attack * (speed/10)))
- def = defense + armor + (abs(Base Defense * (speed/10)))
- speed = base speed, make icons move slightly faster
- hit points = based on matrix by level
- experience & leveling = ((monster level value * number per encounter) + (level quest score + mini-quest) + (dungeon level completion gain) * multiplier for dungeon 5th level finished)

## Level Progression Chart
-- Example

| Level | Experience | Attack | Defense | Speed | Hit Points |
|-------|------------|--------|---------|-------|------------|
| Base  | 0          | 10     | 10      | 5     | 100        |
| 1     | 1000       | 10     | 10      | 5     | 100        |
| 2     | 2000       | 12     | 12      | 6     | 125        |
| 3     | 4000       | 14     | 14      | 7     | 150        |
| 4     | 8000       | 16     | 16      | 8     | 175        |
| 5     | 12000      | 18     | 18      | 9     | 200        |
| 6     | 16000      | 20     | 20      | 10    | 250        |
| 7     | 20000      | 22     | 22      | 11    | 300        |
| 8     | 25000      | 24     | 24      | 12    | 350        |
| 9     | 30000      | 26     | 26      | 13    | 400        |
| 10    | 40000      | 28     | 28      | 14    | 500        |


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
        - Monster: Spiders
        - Boss: Giant Arachnid

    2. **Level 2**
        - Quest: Armor quest
            - find chest plate and amulet for chest plate to avoid being turned into a zombie
        - Weapon: Short War Spear
        - Armor: Chest Plate of Non-turning
        - Level Minimum: 2
        - Monster: Zombie
        - Boss: George(Necromancer) -- Turned to evil, villager rival from town

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