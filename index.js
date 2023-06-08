const convertBtn = document.getElementById("convert-btn")
const numberEl = document.getElementById("number")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const resetBtn = document.getElementById("reset-btn")
const containerEl = document.getElementById("constainer-el")
const spanEl = document.getElementById("span")
let check = true

spanEl.textContent = "Enter a number"

convertBtn.addEventListener("click", function () {
  if (check) {
    //lenght
    let valueOfMeters = (numberEl.value * 3.2808).toFixed(3)
    let valueOfFeets = (numberEl.value * 0.3048).toFixed(3)
    const lenght = ` <h4> ${numberEl.value} meters = ${valueOfMeters} feet | ${numberEl.value} feet = ${valueOfFeets} meters</h4> `
    lengthEl.innerHTML += lenght
    //volume
    let valueOfLiters = (numberEl.value * 0.2642).toFixed(3)
    let valueOfGallons = (numberEl.value * 3.7854).toFixed(3)
    const volume = ` <h4> ${numberEl.value} Liters = ${valueOfLiters} Gallons | ${numberEl.value} Gallons = ${valueOfGallons} Liters</h4> `
    volumeEl.innerHTML += volume
    //mass
    let valueOfKilograms = (numberEl.value * 2.2046).toFixed(3)
    let valueOfPounds = (numberEl.value * 0.4536).toFixed(3)
    const mass = ` <h4> ${numberEl.value} Kilograms = ${valueOfKilograms} Pounds | ${numberEl.value} Pounds = ${valueOfPounds} Kilograms</h4> `
    massEl.innerHTML += mass
    check = false
    spanEl.textContent = "Please, Double Click Reset Button"
  }
})

resetBtn.addEventListener("dblclick", function reset() {
  numberEl.value = ""
  lengthEl.innerHTML = ` <h3>Length(Meter/Feet)</h3> `
  volumeEl.innerHTML = ` <h3>Volume(Liters/Gallons)</h3> `
  massEl.innerHTML = ` <h3>Mass(Kilograms/Pounds)</h3> `
  check = true
  spanEl.textContent = ""
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 