import Person from './person';
import Callable from './callable';

class Mother extends Person implements Callable {
	public name: string;
	public height: string;
	public married: boolean;	

	call(msg: string) {
		return msg;
	}
	
}

let mom = new Mother();
mom.name = "Elsa";
let message = mom.call("Hi mom");

console.log(mom.getName());
console.log(message);
