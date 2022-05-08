var someName = 'Rugen';
var someAge = 19;
var someRank = 'Count';

let result = `Hello ${someRank} ${someName} cant wait to celabrate your ${someAge + 1} birthday next year.`


if (someName === "Rugen" && someRank === "Count") {
    result = 'My name is Inigo Montoya, you killed my father, prepare to die.';
}
else if (someAge < 18) {
    result = 'you are to young to recruit!';
}
else if (someRank === "Captain") {
    result = `Aye Aye Captian ${someName}`;
}
else if (someAge >= 40 && someRank === "Private") {
    result = `What have you been doing with your life ${someName}`;
}

console.log(result);

