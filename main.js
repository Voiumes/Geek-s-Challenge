const calcBmi = (mass, height)=>{
    return mass/(height*height)
}
let johnBmi = {
mass: 81, //kg
height: 1.8288, //meters
bmi: calcBmi(this.mass, this.height),
name:'John'
};
let markBmi = {
mass: 88,
height: 1.7566,
bmi: calcBmi(this.mass, this.height),
name:'Mark'
}
const higherBmi = (person1, person2) => {
    (person1.bmi > person2.bmi) ?  console.log(person1.name + "'s' BMI is greater than " + person2.name+"'s BMI" ) : console.log(person2.name + "'s' BMI is greater than " + person1.name+"'s BMI")
};
higherBmi(johnBmi, markBmi)