function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.getName = function(){
		console.log(this.name);
	};
}

var person1 = new Person("Matt", 40, "Developer"),
	person2 = new Person("Petra", 26, "Real Estate Agent"),
	person3 = new Person("Cyrus", 18, "Tiger Mascot"),
	person4 = new Person("Ryan", 15, "Student"),
	person5 = new Person("Boba", 1, "Master of the house");

var persons = function(){
	for(var i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);



