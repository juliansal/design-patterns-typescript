interface Subject {
	registerObserver(o: Observer);
	removeObserver(o: Observer);
	notifyObservers();
}

interface Observer {
	update(msg: number);
}

class WeatherStation implements Subject {
	private temperature: number;
	private observers: Observer[] = [];

	setTemperature(temp: number) {
		console.log('*****');
		this.temperature = temp;
		this.notifyObservers();
	}

	registerObserver(o: Observer) {
		this.observers.push(o);
	}

	removeObserver(o: Observer) {
		let index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}

	notifyObservers() {
		for(let o of this.observers) {
			o.update(this.temperature);
		}
	}
}

class TemperatureDisplay implements Observer {
	private subject: Subject;

	// with constructor
	constructor(weatherStation: Subject) {
		this.subject = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	public update(temperature: number) {
		console.log('Display: temperature is ' + temperature);
	}

}

class Fan implements Observer {
	// without constructor
	
	public update(temperature: number) {
		console.log(`Fan: temperature is ${temperature}`);
		
	}
}

let weatherStation = new WeatherStation();

// observer registered in constructor
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan();
// explicitly register an observer
weatherStation.registerObserver(fan);

weatherStation.setTemperature(19);
weatherStation.setTemperature(29);
weatherStation.setTemperature(1);
weatherStation.setTemperature(20);
