
const alertFucntion = (msg , type = 'danger')=>{
    
  return `<p class= "alert alert-${type} d-flex justify-content-between">${msg}<button class= "btn btn-close" data-bs-dismiss= 'alert'></button></p>`

}


const ReadLsData = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return false;
    }
}


const CreateLsData = (key,value) => {
   
    let data = [];
    if (localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key))
    }

    data.push(value)

    localStorage.setItem(key, JSON.stringify(data))


}



// Update LsData
const updateLsData = (key,array) => {
    localStorage.setItem(key, JSON.stringify(array))
}





// const emailcheck = (email) => {
// let pattern = /^[a-z0-9_.]{1,}@[a-z0-9]{2,}\.[a-z]{1,4}$/

// return pattern.test(email)
// }

// const phonecheck = (phone) => {
// let pattern = /^(01|\+8801)[0-9]{9}$/

// return pattern.test(phone)
// }

// const agecheck = (num) => {
// let pattern = /^[0-9]{1,3}$/

// return pattern.test(num)
// }



// const amountCheck = (amount)=>{
// let pattern = /^[0-9]{1,}$/
// return pattern.test(amount)
// }


// const marriageFunction = (name,age,gender)=>{

// if (gender=='male') {
//     let marriageage= 21;

//     if ( age >= marriageage ) {
//         return alertFucntion(`Hi ${name}, CONGRATS! You can get married.`, 'success')
//     } else {
//         return alertFucntion( `Hi ${name}, SORRY! You've to wait ${marriageage - age} years more get married.`)
//     }

// }else{
//     let marriageage= 18;

//     if (age >= marriageage) {
//         return alertFucntion(`Hi ${name}, CONGRATS! You can get married.`, 'success')
//     } else {
//         return alertFucntion(`Hi ${name}, SORRY! You've to wait ${marriageage - age} years more to get married.`)
//     }
// }
    

// }



// // Areacalculator


// const areaCal = (type, val1, val2 = null) => {
// if (type == 'rectangle') {
//     return alertFucntion(`The area of this ${type} is ${val1 * val2} meter.`, 'success')

// } else if(type == 'triangle') {
//     return alertFucntion(`The area of this ${type} is ${ .5 *(val1 * val2)} meter.`, 'success')

// } else if(type == 'square') {
//     return alertFucntion(`The area of this ${type} is ${val1 * val1} meter.`, 'success')

// } else if(type == 'circle') {
//     let c_area = (3.1416*(val1*val1))
//     return alertFucntion(`The area of this ${type} is ${ c_area.toFixed(2)} meter.`, 'success')
// }
// }