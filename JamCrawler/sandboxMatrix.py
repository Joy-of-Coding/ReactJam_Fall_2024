# Jon adams
# 09/30/24
# Sandbox to run Matrix for Combat
# Player
# Monster
# Weapon
# Armor 

base = [10, 10, 5, 100] # Attack, Defense, Speed, Hit Points
playerAttack = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
playerDefense = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
playerHitPoints = [100, 125, 150, 175, 200, 250, 300, 350, 400, 500] # Levels
monsterAttack = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
monsterDefense = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
monsterHitPoints = [100, 125, 150, 175, 200, 250, 300, 350, 400, 500] # Levels
speed = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] # Levels
expGain = [100, 125, 150, 175, 200, 250, 300, 350, 400, 500] # Levels
weapon = [1, 3, 7, 15, 25] # Dungeon Levels
armor = [1, 3, 7, 15, 25] # Dungeon Levels
level = 1 # Increment as Experience is gained
totalExperience = 0

playerCombatRound = 0
monsterCombatRound = 0

def attack (attack, weapon, baseStats, speed):
    roundNum = attack + weapon + (round(baseStats * (speed/10)))
    return roundNum

def defense( defense, armor, base, speed):
    roundNum = defense + armor + (round(base * (speed/10)))
    return roundNum

def hitPointCounter(hitPoint, attack, defense):
    roundNum = hitPoint + (attack - defense)
    return roundNum

def combatRound(pLvl, mLvl, mNumber, pWpn, pArm):
    playerAtk = attack(playerAttack[pLvl], pWpn, base[0], speed[pLvl])
    playerDef = defense(playerDefense[pLvl], pArm, base[1], speed[pLvl])

    monsterAtk = (attack(monsterAttack[pLvl], pWpn, base[0], speed[pLvl])) * mNumber
    monsterDef = defense(monsterDefense[pLvl], pArm, base[1], speed[pLvl])

    playerCombat = hitPointCounter(playerHitPoints, playerAtk, monsterDef)


    return winner, hitPointCounter

def experience(monsterExp, monsterNum, quest, dungeoncompletion):
    exp = (monsterExp*monsterExp) + quest + dungeoncompletion
    return exp

def speed (level):
    speedMultiplier = speed[level]
    return speedMultiplier

def main():
    pLvl=1
    mLvl=1
    mNumber=1
    pWpn=weapon[0]
    pArm=armor[0]

    # user input for next combat round
    winner, hitPointCounter = combatRound(pLvl, mLvl, mNumber, pWpn, pArm)
    totalExperience = experience(monsterExp, monsterNum, quest, dungeoncompletion) 

# Don't run main on import
if __name__ == "__main__":
    main()



'''
combat is the player swings
    player atk, monster defense, monster hit pooints
    monster atk, player defense, player hit pooints
    check if either is zero
    no, next round




'''