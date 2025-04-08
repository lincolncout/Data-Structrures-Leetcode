class Player{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player{
	constructor(name, type){
		super(name,type)
		this.magic = 'fdfd'
	}
	play(){
		console.log(`WEEEEEE I'm a ${this.magic}`)
	}
}

const wizard1 = new Wizard("Magic", "Healer");
wizard1.introduce();
wizard1.play();