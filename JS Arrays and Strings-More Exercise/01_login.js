function logIn(str) {
    let username = str[0];
    let correctPassword = username.split('').reverse().join('');
    let attempts = 0;
   
    for (let n = 1; n < str.length; n++) {
        attempts++;
        if (correctPassword === str[n]) {
            console.log(`User ${username} logged in.`);
            return;
        } else if (attempts === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log("Incorrect password. Try again.")
        }
    }    
}
logIn(['Acer','login','go','let me in','recA']);


logIn(['sunny','rainy','cloudy','sunny','not sunny']);