
//Weapons
let sword = {one: 150, two: 250, three: 500, ultimate: 2000}
let axe = {one: 200, two: 300, three: 600, ultimate: 2500}
let staff = {one: 100, two: 200, three: 350, ultimate: 1200}

//Array with weapons to choose
let weapon = [sword, axe, staff]


//Character's Class
class character {
	constructor (hp, def, healing, weapon) {
		this.hp = hp
		this.def = def
		this.healing = healing
		this.weapon = weapon
	}

//Attack Functions
	attackOne() {
		enemy.hp -= this.weapon.one
	}

	attackTwo() {
		enemy.hp -= this.weapon.two
	}

	attackThree() {
		enemy.hp -= this.weapon.three
	}

	ultimate() {
		enemy.hp -= this.weapon.ultimate
	}

	heal() {
		this.hp += this.healing
	}
};


//Enemy
class enemy {
	constructor (hp, def, healing, dmg) {
		this.hp = hp
		this.def = def
		this.healing = healing
		this.dmg = dmg
	}

	attack() {
		character.hp -= this.dmg
	}

	heal() {
		this.hp += this.healing
	}
};


//Characters
let mage = new character(3000, 35, 1000, weapon[2])
let paladin = new character(4000, 50, 600, weapon[0])
let warlord = new character(5000, 100, 400, weapon[1])



//Enemies
let bossOne = new enemy (8000, 40, 1000, 500)
let bossTwo = new enemy (12000, 40, 2000, 650)
let bossThree = new enemy (20000, 40, 3000, 800)


//Console log Batlle
paladin.ultimate()
paladin.attackOne()
paladin.heal()

console.log(paladin)
console.log(bossOne)


