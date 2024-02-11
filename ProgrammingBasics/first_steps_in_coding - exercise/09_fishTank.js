function fishTank(input) {
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percentSand = Number(input[3])
    let volumeOfTank = length * width * height
    let volumeInLiter = volumeOfTank / 1000
    let capacityOfTankWater = volumeInLiter - (volumeInLiter * (percentSand / 100))
    console.log(capacityOfTankWater)

}
fishTank([
    "85 ",
    "75 ",
    "47 ",
    "17 "
])