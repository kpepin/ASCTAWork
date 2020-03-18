// Your code here!
class Pokemon{
	// constructor where the parameters go
	constructor(name,attack,defense,health,type){
		this.name = name
		this.attack = attack
		this.defense = defense
		this.health = health
		this.type = type
		this.num = health
	}

	takeDamage(damage){
		//subtracts damage from health
		this.health = this.health - damage
		if(this.health<0){
			this.health = 0
		}
	}

	attackOpponent(enemy){
		enemy.takeDamage(this.attack - enemy.defense)
	}

	display(){
		return String(this.name.toUpperCase()+ " ("+this.type.toUpperCase()+") " + this.health.toString() + "/" + this.num.toString())
	}
}

p = new Pokemon("p",15,20,30,"Lightning")
console.log(p.display())


// Don't edit this line!
module.exports = Pokemon;
