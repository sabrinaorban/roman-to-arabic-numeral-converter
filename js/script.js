function getVal(val) {
    var string = document.getElementById('userInput').value.toUpperCase();
    var matches = string.match('^(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)$');
    if (matches != null) {
        convertToArabic(string);
    } else {
        document.getElementById('result').innerHTML = 'Not a roman number';
        return;
    }
};

function convertToArabic(string) {
    var num, prev, current;
    num = strToNumber(string.charAt(0))

    for (var i = 1; i < string.length; i++) {
        current = strToNumber(string.charAt(i));
        prev = strToNumber(string.charAt(i - 1));

        if(prev >= current) {
            num += current;
        } else {
            num = num - (2 * prev) + current;
        }
    }
    document.getElementById('result').innerHTML = num;
};

function strToNumber(char) {
    switch(char) {
        case "I": return 1;
        case "V": return 5;
        case "X": return 10;
        case "L": return 50;
        case "C": return 100;
        case "D": return 500;
        case "M": return 1000;
        default: return -1;
       
    }
};
