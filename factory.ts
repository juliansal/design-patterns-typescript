
abstract class EnemyShip {
	public name: string;
	public amtDamage: number;

	public setName(name: string): void {
		this.name = name;
	}
	
	public getName(): string {
		return this.name;
	}

	public setDamage(amtDamage: number): void {
		this.amtDamage = amtDamage;
	}
	
	public getDamage(): number {
		return this.amtDamage;
	}

	public followHeroShip(): void {
		console.log(this.getName() + " is following the hero ship!");
	}

	public displayEnemyShip(): void {
		console.log(this.getName() + " is on the screen!");
	}

	public enemyShipShoots(): void {
		console.log(this.getName() + " attacks and does " + this.getDamage());
	}

}

class UFOEnemyShip extends EnemyShip {

	constructor() {
		super();
		this.setName("UFO Enemy Ship");
		this.setDamage(20);
	}
}

class BigUFOEnemyShip extends UFOEnemyShip {

	constructor() {
		super();
		this.setName("Big UFO Enemy Ship");
		this.setDamage(40);
	}
}

class RocketEnemyShip extends EnemyShip {
	
	constructor() {
		super();
		this.setName("Rocket Enemy Ship");
		this.setDamage(10);
	}
}

class EnemyShipFactory {
	makeEnemyShip(shipType: string): EnemyShip {

		if(shipType == "U") {
			return new UFOEnemyShip();
		} else if(shipType == "R") {
			return new RocketEnemyShip();
		} else if(shipType == "B") {
			return new BigUFOEnemyShip();
		} else return null;
	}
	
}

class EnemyShipTesting {
	stdin = process.openStdin();
	shipFactory = new EnemyShipFactory();
	theEnemy: EnemyShip;

	constructor() {
		this.run();
	}

	run() {	
		console.log("What type of ship? (U / R / B)");
		this.stdin.addListener("data", (d) => {
			let msg = d.toString().trim();
			this.theEnemy = this.shipFactory.makeEnemyShip(msg);
			this.doStuffEnemy(this.theEnemy);
		});
		
	}

	public doStuffEnemy(enemyShip: EnemyShip) {
		enemyShip.displayEnemyShip();
		enemyShip.followHeroShip();
		enemyShip.enemyShipShoots();
	}
}

let enemyShipTesting = new EnemyShipTesting();