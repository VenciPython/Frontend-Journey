function putString(input) {
    let strInput = input[0];
    let result = "";
    for (let i = 0; i < strInput.length; i++) {
        result += strInput[i] + " "; 
    }
    console.log(result.trim());
    // Извеждаме резултата с интервали, премахвайки излишния интервал в края
}

putString(["venci"]);
