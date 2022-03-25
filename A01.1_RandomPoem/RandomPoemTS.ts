namespace randomizedPoem {

    let subjects: string [] = ["Elon Musk", "Die Queen", "Ein Polizist", "Dobby", "Frau Holle", "Kim Kardashian"];
    let predicates: string [] = ["  ", " studiert ", " mag ", " hasst ", " lacht über ", " finanziert "];
    let objects: string [] = ["Geld", "einen Bären", "Waffen", "die Welt", "Shoppen", "Affen"];

    //console.log(subjects, predicates, objects);

    for (let i: number = 6; i > 0; i--) {
        //console.log(i);
        console.log(getVerse(subjects, predicates, objects));
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let verse: string = "";

        let randomNumber1: number = Math.floor(Math.random() * subjects.length);
        //console.log(randomNumber);
        let subject: string[] = _subject.splice(randomNumber1, 1);
        verse += subject;

        let randomNumber2: number = Math.floor(Math.random() * subjects.length);
        let predicate: string[] = _predicate.splice(randomNumber2, 1);
        verse += predicate;

        let randomNumber3: number = Math.floor(Math.random() * subjects.length);
        let object: string[] = _object.splice(randomNumber3, 1);
        verse += object;
        return verse;
    }
}