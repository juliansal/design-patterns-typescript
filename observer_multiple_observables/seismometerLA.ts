import Subject from './subject';
import Observer from './observer';

class SeismometerLA implements Subject {
	Observer;
	private tremor: number;
	private city: string;
	private observers: Observer[] = [];

	setTremor(tremor: number, city: string) {
		console.log('*****');
		this.tremor = tremor;
		this.city = city;
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
			o.update({tremor: this.tremor, city: this.city});
		}
	}
}
export default SeismometerLA;