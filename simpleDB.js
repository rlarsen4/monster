var characterList = [
//index 0 = weapon type
weaponType = [
    "potion", "sword", "bow & arrow"
],

//index 1 = player
players = [
    playerA = {
            image: "amazon.png",
            name: "Amazon",
            bio: "I'm a hero",
            weapon: weaponType[1],
            health: 100,
            score: 0
    },

    playerB = {
            image: "archer-160389_150.png",
            name: "Elf",
            bio: "I'm an Elf",
            weapon: weaponType[2],
            health: 100,
            score: 0
    },

    playerC = {
        image: "barbarian-152853_150.png",
        name: "Nerd",
        bio: "I like pocket protectors",
        weapon: weaponType[1],
        health: 100,
        score: 0
    }

],

//index 2 = monster
monster = [
        monsterA = {
            name: "Vampire",
            bio: "I'm a vampire, I hate garlic.",
            level: 6,
            weapon: weaponType[0] 
        },

        monsterB = {
            name: "Ogre",
            bio: "Ogres are like onions",
            level: 7,
            weapon: weaponType[1]
        }
    ]
]
