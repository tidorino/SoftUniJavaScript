function vacation(groupNum, typeOfGroup, day) {
    const price = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46,
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16,
        },
        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50,
        }
    };
    let totalPrice = 0;
    const cost = price[typeOfGroup][day];
    totalPrice = groupNum * cost;

    if (typeOfGroup === "Students" && groupNum >= 30) {
        totalPrice -= totalPrice * 0.15;
    } else if (typeOfGroup === "Business" && groupNum >= 100) {
        totalPrice -= cost * 10;
    } else if (typeOfGroup === "Regular" && groupNum >= 10 && groupNum <= 20) {
        totalPrice -= totalPrice * 0.05;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday");