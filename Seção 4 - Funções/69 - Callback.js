function main(birthYear, callback){
	age = 2020 - birthYear;
	return callback(age);
}

main(2000, (result)=>{
	console.log(`You're ${result} years old!`)
});