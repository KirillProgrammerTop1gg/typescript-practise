"use strict";
// // типізація простих типів даних
// // const price = 1232;
// // const massage = "hallo";
// // const isPpenModal = false;
// // const basket = null;
// // const data = undefined;
// //якщо ми не типізуємо дані у зміних то у typeScript відбувається НЕявна типізація
// // явна типізація:
// const price: number = 1232
// const massage: string = 'hallo'
// const isPpenModal: boolean = false
// const basket: null = null
// const data: undefined = undefined
// // якщо ми плануємо змінювати змінні то краще її типізувати
// let myAge = 14
// // myAge = "15"; буде помилка оскільки змінна myAge неявно типізована і чекає число
// //  типізація складних типів
// const numbers: number[] = [123, 323, 1, 3]
// // numbers.push("w") буде помилка оскільки ми типізували масив чисел і намагаємось додати в нього рядок
// // типізація обєктів
// // const user = {
// //     login: "awd",
// //     password: 234234
// // } типізуєми цей обєкт
// // const user: {login: string, password: number} = {
// //     login: "awd",
// //     password: 234234
// // } 
// // є інший спосіб типізації
// type User = {
//     login: string,
//     password: number | string
// }
// const user: User = {
//     login: "awd",
//     password: "234234"
// }
// // типізація також слідкує чи всі властивості додані які вказані в типізації
// // user.name = "Stepan" буде помилка томущо типізацчя неочікує тикий ключ 
// type LessonType = "typeScript"; // так тожна зпрезервувати значення
// // const lesson: LessonType = "javaScropt" буде помилка оскільки в змінну ми поставили інше значеня не з LessonType
// //  це може використоуватись у бібліотеках, наприклад у "UI material" де припустимо в кнопці може біти 3 значення:
// type size = "small" | "medium" | "large";
// // ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ВАЙЛУ , АБО ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО
// // ТИП ДАНИХ any використовується у ситуації коли ми у зміну бажаємо отримати будь який тип даних; ДОЗВОЛЯЄ ПЕРЕПИСАТИ ІНШИЙ ТИП
// // зручний для тестування коду наприклад немає часу на типізацію даних;
// // НЕ РЕКОМЕНДОВАНИЙ
// let someData: any = 1345;
// someData = "test";
// someData = false;
// // Тип unknown - невідомий тип, схожий на any - ігнорує перевірку типів, АЛЕ при зміні значення надає помилку на відміну від any;
// let someInfo: unknown = "test";
// someInfo = 12343.68976758;
// // someInfo.toFixed(3);
// // Тип enum може більше конкретизувати значення і дозволяє не хардкодити (робити динамічними) їх 
// // перший спосіб типізації:
// // type Size = "small" | "medium" | "large";
// // const button: Size = "large";
// // другий сопсіб типізації:
// enum Sizes  {
//     small = "small",
//     medium = "medium",
//     large = "large"
// }
// const button: Sizes = Sizes.large;
// // Типізація функцій
// // у функції можемо типізувати параметри та значення функції
// // У функції треба типізувати дані які будуть вертатися в return,
// // це робимо після параметрів - ставимо : і прописуємо тип даних який має вернути функція
// // function makeMessage (num1: number, num2: number): string {
// //     return `Число 1 це - ${num1}, 2 це - ${num2}`;
// // };
// // console.log(makeMessage(1, 2));
// // Що коли функція нічого не повертає? вказуємо void
// function makeMessage (num1: number, num2: number): void {
//     console.log(`Число 1 це - ${num1}, 2 це - ${num2}`);
// };
// makeMessage(1, 2);
// // Якщо функція повертає складний тип даних то можемо під нього зробити окремий type
// type NewUser = {
//     name: string,
//     age: number
// }
// function makeUser(name: string, age: number): NewUser {
//     return {
//         name,
//         age
//     };
// };
// console.log(makeUser("Anny", 15));
// // як типізувати метод об'єкту?
// type Hero = {
//     name: string,
//     ep: number,
//     classHero: string,
//     health: number,
//     run: (a: string, b: number) => string;
// }
// const hero: Hero = {
//     name: "Hero",
//     ep: 15,
//     classHero: "wizard",
//     health: 150,
//     run(a, b) {
//         const ab = a + b;
//         return `Герой ${this.name} здійснив побіг`;
//     }
// }
// console.log(hero.run("Hero", 54));
// type CourseUser = {
//     course: string,
//     duration: number,
//     mark?: number // вказуємо що це поле не обов'язкове та може бути відсутнє
// }
// const student: CourseUser = {
//     course: "typeScript",
//     duration: 12,
//     mark: 10,
// }
// const teacher: CourseUser = {
//     course: "typeScript",
//     duration: 12,
// }
// console.log(student);
// console.log(teacher);
// // індексовані влатсивості (index properties) використовємо коли є різні об'єкти, з різними наченнями, але з однаковою типізацією
// // type Product = {
// //     id: number,
// //     qty: number,
// //     price: number,
// // }
// // можемо зробити універсальний тип з динамічними ключами та значеннями
// type Product = {
//     [key: string]: number;
// }
// const product1:Product = {
//     id: 44,
//     qty: 53,
//     price: 10
// }
// // Динамічна типізація -------
// // Динамічний тип застовуємо коли незнаємо скільки буде ключів та з якими назвами і значеннямми але типи даних у них будуть однакові
// // type FrontEnd = {
// //     markUp: string,
// //     programming: string,
// //     frameworks: string,
// // }
// // type Python = {
// //     frontEnd: string,
// //     backEnd: string,
// // }
// // type Design = {
// //     webDesign: string,
// //     graficDesign: string,
// //     moutionDesign: string,
// // }
// // const frontEnd: FrontEnd = {
// //     markUp: "html, css",
// //     programming: "javascript",
// //     frameworks: "react, express, node.js",
// // }
// // const python: Python = {
// //     frontEnd: "web-programing flask, Django",
// //     backEnd: "data science, machine learning"
// // }
// // const design: Design = {
// //     webDesign: "figma, UX/UI",
// //     graficDesign: "photoshop, illustrato, lightRoom",
// //     moutionDesign: "afterEffects, premier"
// // }
// // ми створили під кожний курс свою типізацію і бачимо, що типи повторюються, тому ми можемо об'єднати всі типи в один і шаблон як динамічну типізацію
// type Course = {
//     [key:string]: string
// }
// const frontEnd: Course = {
//     markUp: "html, css",
//     programming: "javascript",
//     frameworks: "react, express, node.js",
// }
// const python: Course = {
//     frontEnd: "web-programing flask, Django",
//     backEnd: "data science, machine learning"
// }
// const design: Course = {
//     webDesign: "figma, UX/UI",
//     graficDesign: "photoshop, illustrato, lightRoom",
//     moutionDesign: "afterEffects, premier"
// }
// // зробити динамічну типізацію розкладу уроків
// type Lesson = {
//     lessonName: string,
//     lessonTeacher: string,
//     lessonDuration: number
// }
// type Schedule = {
//     [key:string]:string
// }
// const math: Lesson = {
//     lessonName: 'math',
//     lessonTeacher: "la la la",
//     lessonDuration: 45
// }
// const english: Lesson = {
//     lessonName: 'english',
//     lessonTeacher: "la la",
//     lessonDuration: 50
// }
// const mondaySchedule: Schedule = {
//     english: "La la",
//     math: "La la la"
// }
// const tuesdaySchedule: Schedule = {
//     biology: "La la",
//     math: "La la la",
//     info: "la",
// }
// // створити тип для об'єкта де ключ є рядок а значення або рядок, або число, створіть декалкіка таких об'єктів
// type Obj = {
//     [key: string]: string | number
// }
// const Obj1:Obj= {
//     kt: 12,
//     yu: "f",
//     df: "9",
//     fb: 0
// }
// const Obj2:Obj = {
//     us: "-*-",
//     fjksd: 34242,
//     aa: "dgh",
//     oo: "lll",
//     hbd: 53
// }
// // -----------GENERIC-----------
// // Дженеріки забезпучують типізацію функції чи класу, але не прив'язуються до аргументів які прийдуть у функцію/клас
// // Дженерік це змінна, тобто динамічний тип даних. Для дженерік використовуємо <>
// // function showInfo(msg: string): string{
// //     return `Передане повідомлення: ${msg}`
// // }
// // const output: string = showInfo('Hi');
// // console.log(output); // в даній функції ми маємо преедавати завжди рядок
// // нижче ми хочем зробити типізацію динамічною
// function showInfo<M,N>(msg1: M, msg2: N): string{ // динамічно підставляємо тип у дженерік <M>
//     return `Передане повідомлення: ${msg1}, ${msg2}`
// }
// const output1: string = showInfo<string,string>('Hi','g');
// const output2: string = showInfo<number,string>(4892,'k');
// console.log(output1, output2);
// // створимо функцію яка буде приймати масив будь якого типу
// // додає до кожного елемента масива step та вертає оновлений масив
// function arrPlusStep<N extends number[],S extends number>(arr: N,step: S): number[]{
//     return arr.map(item => {
//         return item + step
//     })
// }
// const res1 = arrPlusStep<number[],number>([1, 2, 3], 5);
// // const res2 = arrPlusStep<string[], string>(['a', 'b', 'c'], ' d');
// console.log(res1);
// // extends - це свого роду як первірка замість if, таким чином ми робимо додаткову валідацію аргументів
// // якщо переданий аргумент буде відповідати умові extends то тоді цей аргумент буде вважатися валідним
// const savedPasswords = '12345';
// function checkUser<U extends {
//     login: string,
//     password: number | string,
// }>(user: U, ): string {
//     if (savedPasswords === user.password){
//         return `Ви автирозовані!\nLOGIN: ${user.login}\nPASSWORD: ${user.password}`;
//     }
//     return `Ви не автирозовані!`
// }
// console.log(checkUser({
//     login: "Name",
//     password: "12345"
// }));
// console.log(checkUser({
//     login: "Name",
//     password: 12345
// }));
const aInput = document.querySelector('.a');
const bInput = document.querySelector('.b');
const plusBut = document.querySelector('.plus');
const minusBut = document.querySelector('.minus');
const productBut = document.querySelector('.product');
const devideBut = document.querySelector('.devide');
const res = document.querySelector('.Result');
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const product = (a, b) => a * b;
const devide = (a, b) => a / b;
plusBut.addEventListener('click', (e) => res.innerHTML = `Result: ${plus(Number(aInput.value), Number(bInput.value))}`);
minusBut.addEventListener('click', (e) => res.innerHTML = `Result: ${minus(Number(aInput.value), Number(bInput.value))}`);
productBut.addEventListener('click', (e) => res.innerHTML = `Result: ${product(Number(aInput.value), Number(bInput.value))}`);
devideBut.addEventListener('click', (e) => res.innerHTML = `Result: ${devide(Number(aInput.value), Number(bInput.value))}`);
const loginInput = document.querySelector('.login');
const msg = document.querySelector('.Msg');
const logins = [
    'SkyRider_92',
    'PixelWolfX',
    'NovaBlink',
    'ShadowByte7',
    'LunaCraft',
    'EchoStormer',
    'FrostyNeko',
    'QuantumFox99',
    'IronSparkle',
    'VelvetCore',
];
loginInput.addEventListener('input', (e) => {
    if (logins.includes(loginInput.value)) {
        msg.innerHTML = `Користувач ${loginInput.value} знайдено.`;
    }
    else {
        msg.innerHTML = `Користувач ${loginInput.value} не знайдено.`;
    }
});
const mankind = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Maria", age: 28 },
    { name: "David", age: 35 },
    { name: "Sophia", age: 16 },
    { name: "Michael", age: 40 },
    { name: "Emma", age: 15 },
    { name: "James", age: 14 },
    { name: "Olivia", age: 26 }
];
const findAdults = (mankind) => mankind.filter((human) => human.age >= 18).map((human) => human.name);
console.log(findAdults(mankind));
// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1
const statsEl = document.querySelector('.stats');
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
let stats = {};
tweets.forEach((tweet) => tweet.tags.forEach((tag) => stats[tag] = tag in stats ? stats[tag] + 1 : 1));
Object.keys(stats).forEach((stat) => statsEl.innerHTML += `${stat} - ${stats[stat]}<br>`);
const events = [
    { name: 'Event 1', date: '10/02/2023' },
    { name: 'Event 2', date: '15/03/2023' },
    { name: 'Event 3', date: '01/01/2023' },
    { name: 'Event 4', date: '01/02/2023' }
];
events.sort((prevEvent, nextEvent) => new Date(prevEvent.date).getTime() - new Date(nextEvent.date).getTime());
console.log(events);
