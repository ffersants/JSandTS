function main(birthYear, callback){
	age = 2020 - birthYear;
	callback(age);
	console.log('Fim')
}

main(2000, (result)=>{
	console.log(`You're ${result} years old!`)
});