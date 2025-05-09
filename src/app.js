// типізація простих типів даних
// const price = 1232;
// const massage = "hallo";
// const isPpenModal = false;
// const basket = null;
// const data = undefined;
//якщо ми не типізуємо дані у зміних то у typeScript відбувається НЕявна типізація
// явна типізація:
const price = 1232;
const massage = 'hallo';
const isPpenModal = false;
const basket = null;
const data = undefined;
// якщо ми плануємо змінювати змінні то краще її типізувати
let myAge = 14;
// myAge = "15"; буде помилка оскільки змінна myAge неявно типізована і чекає число
//  типізація складних типів
const numbers = [123, 323, 1, 3];
const user = {
    login: "awd",
    password: "234234"
};
// ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ВАЙЛУ , АБО ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО
// ТИП ДАНИХ any використовується у ситуації коли ми у зміну бажаємо отримати будь який тип даних; ДОЗВОЛЯЄ ПЕРЕПИСАТИ ІНШИЙ ТИП
// зручний для тестування коду наприклад немає часу на типізацію даних;
// НЕ РЕКОМЕНДОВАНИЙ
let someData = 1345;
someData = "test";
someData = false;
// Тип unknown - невідомий тип, схожий на any - ігнорує перевірку типів, АЛЕ при зміні значення надає помилку на відміну від any;
let someInfo = "test";
someInfo = 12343.68976758;
// someInfo.toFixed(3);
// Тип enum може більше конкретизувати значення і дозволяє не хардкодити (робити динамічними) їх 
// перший спосіб типізації:
// type Size = "small" | "medium" | "large";
// const button: Size = "large";
// другий сопсіб типізації:
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const button = Sizes.large;
// Типізація функцій
// у функції можемо типізувати параметри та значення функції
// У функції треба типізувати дані які будуть вертатися в return,
// це робимо після параметрів - ставимо : і прописуємо тип даних який має вернути функція
// function makeMessage (num1: number, num2: number): string {
//     return `Число 1 це - ${num1}, 2 це - ${num2}`;
// };
// console.log(makeMessage(1, 2));
// Що коли функція нічого не повертає? вказуємо void
function makeMessage(num1, num2) {
    console.log(`Число 1 це - ${num1}, 2 це - ${num2}`);
}
;
makeMessage(1, 2);
function makeUser(name, age) {
    return {
        name,
        age
    };
}
;
console.log(makeUser("Anny", 15));
const hero = {
    name: "Hero",
    ep: 15,
    classHero: "wizard",
    health: 150,
    run(a, b) {
        const ab = a + b;
        return `Герой ${this.name} здійснив побіг`;
    }
};
console.log(hero.run("Hero", 54));
const student = {
    course: "typeScript",
    duration: 12,
    mark: 10,
};
const teacher = {
    course: "typeScript",
    duration: 12,
};
console.log(student);
console.log(teacher);
const product1 = {
    id: 44,
    qty: 53,
    price: 10
};
const frontEnd = {
    markUp: "html, css",
    programming: "javascript",
    frameworks: "react, express, node.js",
};
const python = {
    frontEnd: "web-programing flask, Django",
    backEnd: "data science, machine learning"
};
const design = {
    webDesign: "figma, UX/UI",
    graficDesign: "photoshop, illustrato, lightRoom",
    moutionDesign: "afterEffects, premier"
};
const math = {
    lessonName: 'math',
    lessonTeacher: "la la la",
    lessonDuration: 45
};
const english = {
    lessonName: 'english',
    lessonTeacher: "la la",
    lessonDuration: 50
};
const mondaySchedule = {
    english: "La la",
    math: "La la la"
};
const tuesdaySchedule = {
    biology: "La la",
    math: "La la la",
    info: "la",
};
const Obj1 = {
    kt: 12,
    yu: "f",
    df: "9",
    fb: 0
};
const Obj2 = {
    us: "-*-",
    fjksd: 34242,
    aa: "dgh",
    oo: "lll",
    hbd: 53
};
// -----------GENERIC-----------
// Дженеріки забезпучують типізацію функції чи класу, але не прив'язуються до аргументів які прийдуть у функцію/клас
// Дженерік це змінна, тобто динамічний тип даних. Для дженерік використовуємо <>
// function showInfo(msg: string): string{
//     return `Передане повідомлення: ${msg}`
// }
// const output: string = showInfo('Hi');
// console.log(output); // в даній функції ми маємо преедавати завжди рядок
// нижче ми хочем зробити типізацію динамічною
function showInfo(msg1, msg2) {
    return `Передане повідомлення: ${msg1}, ${msg2}`;
}
const output1 = showInfo('Hi', 'g');
const output2 = showInfo(4892, 'k');
console.log(output1, output2);
// створимо функцію яка буде приймати масив будь якого типу
// додає до кожного елемента масива step та вертає оновлений масив
function arrPlusStep(arr, step) {
    return arr.map((item) => {
        return item + step;
    });
}
const res1 = arrPlusStep([1, 2, 3], 5);
// const res2 = arrPlusStep<string[], string>(['a', 'b', 'c'], ' d');
// console.log(res1, res2);
