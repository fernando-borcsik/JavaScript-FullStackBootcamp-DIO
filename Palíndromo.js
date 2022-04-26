function isPalindrome(string) {
    if (!string) return;

    string = string.split(" ").join("").split(",").join("").split("-").join("").split("!").join("").toLowerCase();
    return string.split("").reverse().join("") === string;
}

console.log(isPalindrome("Taco cat"));