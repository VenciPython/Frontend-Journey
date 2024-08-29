function password(input) {

    let index = 0;
    let name = input[index];
    index++;
    let correctPassword = input[index];
    index++;
    let loginPass = input[index];

    while (loginPass !== correctPassword) {
        index++;
        loginPass = input[index];

    }
    console.log(`Welcome ${name}!`);

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
