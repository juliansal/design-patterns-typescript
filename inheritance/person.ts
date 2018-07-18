abstract class Person {
	public name: string;
	public height: string;
	public married: boolean;

	public getName(): string {
		return this.name + "!";
	}

	public getHeight(): string {
		return this.height;
	}

	public getMaritalStatus(): boolean {
		return this.married;
	}
}
export default Person;
