
//Weapons
let sword = {one: 50, two: 100, three: 35, ultimate: 2000}
let axe = {one: 70, two: 100, three: 35, ultimate: 2000}
let staff = {one: 25, two: 100, three: 35, ultimate: 2000}

//Array with weapons to choose
let weapon = [sword, axe, staff]


//Character's Class
class character {
	constructor (hp, def, heal, weapon) {
		this.hp = hp
		this.def = def
		this.heal = heal
		this.weapon = weapon
	}

//Attack Functions
	attackOne() {
		boss.hp -= this.weapon.one
	}

	attackTwo() {
		boss.hp -= this.weapon.two
	}

	attackThree() {
		boss.hp -= this.weapon.three
	}

	ultimate() {
		boss.hp -= this.weapon.ultimate
	}
};


//Enemy
class enemy {
	constructor (hp, def) {
		this.hp = hp
		this.def = def
	}
};


//New character
let mage = new character(3000, 35, 50, weapon[0])
console.log(mage)

//Enemy
let boss = new enemy (8000, 40)
console.log(boss)


//Console log Batlle
mage.ultimate()
mage.attackTwo()
console.log(boss)



