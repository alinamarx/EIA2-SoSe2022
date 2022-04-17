"use strict";
var randomizedPoem;
(function (randomizedPoem) {
    let subjects = ["Elon Musk", "Die Queen", "Ein Polizist", "Dobby", "Frau Holle", "Kim Kardashian"];
    let predicates = ["  ", " studiert ", " mag ", " hasst ", " lacht über ", " finanziert "];
    let objects = ["Geld", "einen Bären", "Waffen", "die Welt", "Shoppen", "Affen"];
    //console.log(subjects, predicates, objects);
    for (let i = 6; i > 0; i--) {
        //console.log(i);
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber1 = Math.floor(Math.random() * subjects.length);
        //console.log(randomNumber);
        let subject = _subject.splice(randomNumber1, 1);
        verse += subject;
        let randomNumber2 = Math.floor(Math.random() * subjects.length);
        let predicate = _predicate.splice(randomNumber2, 1);
        verse += predicate;
        let randomNumber3 = Math.floor(Math.random() * subjects.length);
        let object = _object.splice(randomNumber3, 1);
        verse += object;
        return verse;
    }
})(randomizedPoem || (randomizedPoem = {}));
//# sourceMappingURL=RandomPoemTS.js.map