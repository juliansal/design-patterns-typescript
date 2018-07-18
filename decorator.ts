// abstract component
abstract class Car {
	public description: string;

	public getDescription(): string {
		return this.description;
	}

	public abstract cost(): number;
}

// abstract decorator
abstract class CarOptions extends Car {
	decoratedCar: Car;
	public abstract getDescription(): string;
	public abstract cost(): number;

}

// concrete component
class ModelS extends Car {
	public description = "Model S";

	public cost(): number {
		return 73000;
	}
}

// concrete component
class ModelX extends Car {
	public description = "Model X";

	public cost(): number {
		return 77000;
	}

	public yay(): string {
		return "yay";
	}
}

// concrete decorator
class EnhancedAutoPilot extends CarOptions {
	decoratedCar: Car;

	constructor(car: Car) {
		super();
		this.decoratedCar = car;
	}
	
	public getDescription(): string {
		return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
	}	
	
	public cost(): number {
		return this.decoratedCar.cost() + 5000;
	}

}

// concrete decorator
class RearFacingSeats extends CarOptions {
	decoratedCar: Car;

	constructor(car: Car) {
		super();
		this.decoratedCar = car;
	}
	
	public getDescription(): string {
		return this.decoratedCar.getDescription() + ', Rear facing seats';
	}	
	
	public cost(): number {
		return this.decoratedCar.cost() + 4000;
	}

}

let myTesla = new ModelS();
console.log(myTesla.cost() + "on " + myTesla.getDescription());

myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.cost() + "on " + myTesla.getDescription());

myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.cost() + "on " + myTesla.getDescription());
