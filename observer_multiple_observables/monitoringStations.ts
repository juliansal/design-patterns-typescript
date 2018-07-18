import Observer from './observer';
import SeismometerLA from './seismometerLA';
import SeismometerSD from './seismometerSD';

class monitoringStationAlpha implements Observer {

	public update(data) {
		console.log('Alpha Station: Tremor magnitude ' + data.tremor + ' in ' + data.city);
	}

}

class monitoringStationBravo implements Observer {

	public update(data) {
		console.log('Bravo Station: Tremor magnitude ' + data.tremor + ' in ' + data.city);
	}

}

let LAmeter = new SeismometerLA();
let SDmeter = new SeismometerSD();

let monitorA = new monitoringStationAlpha();
let monitorB = new monitoringStationBravo();

// explicitly register an observer
LAmeter.registerObserver(monitorA);
SDmeter.registerObserver(monitorA);
LAmeter.registerObserver(monitorB);
SDmeter.registerObserver(monitorB);

LAmeter.setTremor(19, "Los Angeles");
SDmeter.setTremor(5, "San Diego");

