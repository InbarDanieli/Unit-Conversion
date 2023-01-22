
const inputNum = document.getElementById("inputNum")
const convertButton = document.getElementById("convert-btn")
const meterAndfeet = document.getElementById("meterAndfeet")
const litersANDgallons = document.getElementById("litersANDgallons")
const kilogramsANDpounds = document.getElementById("kilogramsANDpounds")
convertUnits(inputNum.value)


convertButton.addEventListener("click", () => {
    convertUnits(inputNum.value)
})

function convertUnits(convertNum) {
    if (convertNum < 1) {
        return;
    }
    const meterTofeet = (convertNum * 3.28083).toFixed(3)
    const feetTometer = Math.round((convertNum / 3.28083) * 1000) / 1000

    const literTogallon = (convertNum * 0.26417).toFixed(3)
    const gallonTolitter = Math.round((convertNum / 0.26417) * 1000) / 1000

    const kilogramTopound = (convertNum * 2.2046).toFixed(3)
    const poundTokilogram = Math.round((convertNum / 2.2046) * 1000) / 1000

    meterAndfeet.textContent = `${convertNum} meters = ${meterTofeet} feet | ${convertNum} feet = ${feetTometer} meters`

    litersANDgallons.textContent = `${convertNum} liters = ${literTogallon} gallons  | ${convertNum} gallons = ${gallonTolitter} liters`

    kilogramsANDpounds.textContent = `${convertNum} kilos = ${kilogramTopound} pounds  | ${convertNum} pounds = ${poundTokilogram} kilos `
}