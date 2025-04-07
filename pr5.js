// // 1
// function createStudent(name, specialty, averageGrade, missedClasses) {
//     return {
//         name: name,
//         specialty: specialty,
//         averageGrade: averageGrade,
//         missedClasses: missedClasses,
        
//         // 2
//         displayInfo: function() {
//             console.log(`Студент: ${this.name}`);
//             console.log(`Спеціальність: ${this.specialty}`);
//             console.log(`Середний бал: ${this.averageGrade}`);
//             console.log(`Пропущено занять: ${this.missedClasses}`);
//             console.log('-----------------------');
//         }
//     };
// }

// // 3
// const student1 = createStudent('Мехедова Анастасія', '174', 11.3, 1);
// const student2 = createStudent('Гречаниченко Анастасія', '174', 10.9, 2);
// const student3 = createStudent('Дорошенко Діана', '174', 8.5, 5);

// student1.displayInfo();
// student2.displayInfo();
// student3.displayInfo();

// // 4
// const anotherStudent = {
//     name: 'Іванов Валентин',
//     specialty: '174',
//     averageGrade: 4.2,
//     missedClasses: 2
// };

// student1.displayInfo.call(anotherStudent);
// student1.displayInfo.apply(anotherStudent);
// student1.displayInfo.bind(anotherStudent)();


// const htmlBtn = document.getElementById('htmlBtn');
// const cssBtn = document.getElementById('cssBtn');

// function showHtml() {
//     alert('HTML (англ. HyperText Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.');
// }

// function showCss() {
//     alert('CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.');
// }

// htmlBtn.addEventListener('click', showHtml);
// cssBtn.addEventListener('click', showCss);
