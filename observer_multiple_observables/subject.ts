import Observer from './observer';

interface Subject {
	Observer: Observer;

	registerObserver(o: Observer);
	removeObserver(o: Observer);
	notifyObservers();
}

export default Subject;