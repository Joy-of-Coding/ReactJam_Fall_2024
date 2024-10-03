# Jon adams
# 09/30/24
# Sandbox to run Matrix for Combat
# Player
# Monster
# Weapon
# Armor 

# base = [10, 10, 5, 100] # Attack, Defense, Speed, Hit Points
# playerAttack = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
# playerDefense = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28] # Levels
# playerHitPoints = [100, 125, 150, 175, 200, 250, 300, 350, 400, 500] # Levels
# monsterAttack = [2, 12, 14, 16, 18] # Dungeon Levels
# monsterDefense = [1, 2, 4, 6, 8] # Dungeon Levels
# monsterHitPoints = [5, 100, 150, 175, 200] # Levels
# speed = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] # Levels
# expGain = [100, 125, 150, 175, 200, 250, 300, 350, 400, 500] # Levels
# weapon = [1, 3, 7, 15, 25] # Dungeon Levels
# armor = [1, 3, 7, 15, 25] # Dungeon Levels
# level = 1 # Increment as Experience is gained
# totalExperience = 0

# playerCombatRound = 0
# monsterCombatRound = 0


def attack (attack, weapon, baseStats, speed):
    roundNum = attack + weapon + (round(baseStats * (speed/10)))
    return roundNum

def defense( defense, armor, base, speed):
    roundNum = defense + armor + (round(base * (speed/10)))
    return roundNum

def hitPointCounter(hitPoint, attack, defense):
    roundNum = hitPoint - (attack - defense)
    return roundNum

def combatRound(pLvl, mLvl, mNumber, pWpn, pArm, numberRounds, playerCombatRound, monsterCombatRound):
    winner = ""
    # if numberRounds == 1:
    #     playerCombatRound = playerHitPoints[pLvl]
    #     monsterCombatRound = monsterHitPoints[mLvl]
    print("Round: ", numberRounds)
    # playerAtk = attack(playerAttack[pLvl-1], pWpn, base[0], spd(pLvl))
    # playerDef = defense(playerDefense[pLvl-1], pArm, base[1], spd(pLvl))

    # monsterAtk = (attack(monsterAttack[mLvl-1], 0, base[0], 0)) * mNumber
    # monsterDef = defense(monsterDefense[mLvl-1], 0, base[1], 0)
    playerAtk = attack(playerAttack[pLvl-1], pWpn, base[0], spd(pLvl))
    playerDef = defense(playerDefense[pLvl-1], pArm, base[1], spd(pLvl))

    monsterAtk = (attack(monsterAttack[mLvl-1], 0, 0, 0)) * mNumber
    monsterDef = defense(monsterDefense[mLvl-1], 0, 0, 0)

    print(playerAtk, playerDef, monsterAtk, monsterDef)
    playerCombat = hitPointCounter(playerCombatRound, monsterAtk, playerDef)
    monsterCombat = hitPointCounter(monsterCombatRound , playerAtk, monsterDef)
    
    print("Player: ", playerCombat )
    print("Monster: ", monsterCombat)
    if monsterCombat >= 0 and playerCombat >= 0:
        numberRounds += 1
        playerCombatRound = playerCombat
        monsterCombatRound = monsterCombat
        combatRound(pLvl, mLvl, mNumber, pWpn, pArm, numberRounds, playerCombatRound, monsterCombatRound)
    elif monsterCombat <= 0:
        winner = "Player"
        print(winner)
    else:
        winner = "You are dead, please try again... Sucker!"
    return winner

def experience(monsterExp, monsterNum, quest, dungeoncompletion):
    exp = (monsterExp*monsterExp) + quest + dungeoncompletion
    return exp

def spd(level):
    speedMultiplier = speed[level]
    return speedMultiplier

def main():
    # pLvl=1
    # mLvl=1
    # mNumber=16 # 17 kills the player
    # winner = ""
    # pWpn=weapon[0]
    # pArm=armor[0]
    # num = 1
    pLvl=1
    mLvl=1
    mNumber=16 # 17 kills the player
    winner = ""
    pWpn=2
    pArm=2
    num = 1
    playerCombatRound = 100 # playerHitPoints[pLvl-1]
    monsterCombatRound = 100 # monsterHitPoints[mLvl-1] * mNumber
    # user input for next combat round
    winner = combatRound(pLvl, mLvl, mNumber, pWpn, pArm, num, playerCombatRound, monsterCombatRound)
    print("the winner is: ", winner)
    
    # totalExperience = experience(monsterExp, monsterNum, quest, dungeoncompletion) 

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