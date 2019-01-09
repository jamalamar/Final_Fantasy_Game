
//Weapons
let sword = {one: 50, two: 250, three: 500, ultimate: 2000}
let axe = {one: 75, two: 300, three: 600, ultimate: 2500}
let staff = {one: 35, two: 200, three: 350, ultimate: 1200}

//Array with weapons to choose
let weapon = [sword, axe, staff]


//Character's Class
class character {
	constructor (hp, def, healing, weapon,) {
		this.hp = hp
		this.def = def
		this.healing = healing
		this.weapon = weapon
	}

//Attack Functions
	attackOne(target) {
		target.hp -= this.weapon.one

	}

	attackTwo(target) {
		target.hp -= this.weapon.two
	}

	attackThree(target) {
		target.hp -= this.weapon.three
	}

	ultimate(target) {
		target.hp -= this.weapon.ultimate
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

	attack(target) {
		target.hp -= this.dmg
	}

	heal() {
		if(this.hp<9000 && Math.random()<=0.5){
		this.hp += this.healing
		}
	}
};



//Characters
let mage = new character(3000, 35, 1000, weapon[2])
let paladin = new character(4000, 50, 600, weapon[0])
let warlord = new character(5000, 75, 400, weapon[1])



//Enemies
let boss = new enemy (10000, 40, 1000, 500)
let bossTwo = new enemy (15000, 40, 2000, 650)
let bossThree = new enemy (20000, 40, 3000, 800)



// //ENEMY COMBAT
//----------------------------------------------------
 setInterval(function(){boss.heal()}, 4000);
 setInterval(function(){
 	boss.attack(paladin)
 	$('#enemy-damage').html("-" + boss.dmg)
 }, 4000);
//----------------------------------------------------


//HP Updates
//----------------------------------------------------
setInterval(function() {
$('#character-hp').html(paladin.hp)
}, 100)
setInterval(function() {
$('#enemy-hp').html(boss.hp)
}, 100)

//Damage Updates
//----------------------------------------------------
setInterval(function() {
$('#paladin-damage').html("-")
}, 100)



//Game Over
//----------------------------------------------------
setInterval(function() {
	if(paladin.hp<=0){
		$('#gameover').css('color', 'red')
	}
}, 100);

//You Won
//----------------------------------------------------
setInterval(function() {
	if(boss.hp<=0){
		$('#you-won').css('color', 'green')
	}
}, 100);





											//Functions for combat buttons
//--------------------------------------------------------------------------------------------------------
							//Used an annonymus function to call another function because..
						//..the attack functions are bound to the Button and return and object.


//Function to disable Button
							
let x = function(timeDisabled){						
    	let button = $(this)
    	button.attr('disabled', 'disabled')			//this part disables the button.

    	setTimeout(function() {             		//This part enables the button after set amout of time.
         button.removeAttr('disabled');
  		}, timeDisabled.data) 						//timeDisabled = millisecons to enable button again.
    };


//Quick Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#attack-one').click(function() {paladin.attackOne(boss)});	//Click function to attack.
	$('#attack-one').click(1000, x); 								//Click function to disable button.


// {whatever : 5600}
//Light Attack Functions
//----------------------------------------------------------------------------------------------------------	
	
	$('#attack-two').click(function() {paladin.attackTwo(boss)});	//Click function to attack.
	$('#attack-two').click(2000, x);								//Click function to disable button.
	

//Heavy Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#attack-three').click(function() {paladin.attackThree(boss)});//Click function to attack.
	$('#attack-three').click(3000, x);									 //Click function to disable button.
	

//Ultimate Attack Functions
//----------------------------------------------------------------------------------------------------------
	
	$('#ultimate').click(function() {paladin.ultimate(boss)});		//Click function to attack.
	$('#ultimate').click(10000, x);									//Click function to disable button.

	//Function to activate Ultimate animation
	$('#ultimate').click(function() {								
		$('#character').toggleClass("character-attack")				//Toggles animation on.

		setTimeout(function() {
		$('#character').toggleClass("character-attack")
		}, 1400) 													//Toggles animation off after 1.4sec																			
	});																					
	

//Heal Button Functions
//----------------------------------------------------------------------------------------------------------

	$('#heal').click(function() {paladin.heal()});					//Click function to heal.
	$('#heal').click(8000, x);										//Click function to disable button.

	//Heal button Demo for Boss Ultimate
	$('#heal').click(function() {
		$('#enemy').toggleClass("enemy-attack")						//Toggles animation on.

		setTimeout(function() {
		$('#enemy').toggleClass("enemy-attack")
		}, 6000) 													//Toggles animation off after 6sec.
	});
	





//Thumbnails to choose Battleground
//----------------------------------------------------------------------------------------------------------
$('#thumbnail-waterfall').click(function () {
	$('.screen').toggleClass("screen-background-waterfall")
	$('.screen').toggleClass("screen-background-tree")
});
	
$('#thumbnail-tree').click(function () {
	$('.screen').toggleClass("screen-background-tree")
	$('.screen').toggleClass("screen-background-waterfall")
});





