var randomizedPoem;
(function (randomizedPoem) {
    var subjects = ["Elon Musk", "Die Queen", "Ein Polizist", "Dobby", "Frau Holle", "Kim Kardashian"];
    var predicates = ["  ", " studiert ", " mag ", " hasst ", " lacht über ", " finanziert "];
    var objects = ["Geld", "einen Bären", "Waffen", "die Welt", "Shoppen", "Affen"];
    //console.log(subjects, predicates, objects);
    for (var i = 6; i > 0; i--) {
        //console.log(i);
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subject, _predicate, _object) {
        var verse = "";
        var randomNumber1 = Math.floor(Math.random() * subjects.length);
        //console.log(randomNumber);
        var subject = _subject.splice(randomNumber1, 1);
        verse += subject;
        var randomNumber2 = Math.floor(Math.random() * subjects.length);
        var predicate = _predicate.splice(randomNumber2, 1);
        verse += predicate;
        var randomNumber3 = Math.floor(Math.random() * subjects.length);
        var object = _object.splice(randomNumber3, 1);
        verse += object;
        return verse;
    }
})(randomizedPoem || (randomizedPoem = {}));
//# sourceMappingURL=RandomPoemTS.js.map