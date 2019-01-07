
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
	};

//Attack Function
	attack() {

	};

};


//New character
let mage = new character(150, 200, 50, weapon[0])
console.log(mage)