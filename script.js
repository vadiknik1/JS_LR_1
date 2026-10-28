const studentName = prompt("Введіть ваше ім'я та прізвище:") || "Никифорук Вадим";
alert("Ласкаво просимо до виконання лабораторної роботи!");

const greetingOutput = document.getElementById("greeting-output");
greetingOutput.textContent = `Hello, ${studentName}!`;

const isConfirmed = confirm("Бажаєте продовжити виконання роботи?");
const confirmOutput = document.getElementById("confirm-output");

if (isConfirmed) {
    confirmOutput.textContent = "Ви натиснули кнопку ОК.";
} else {
    confirmOutput.textContent = "Ви натиснули кнопку Скасувати (Cancel).";
}

const journalNumber = 12;
const lastDigit = journalNumber % 10;
const multiplicationOutput = document.getElementById("multiplication-output");

let tableHTML = `<p>Таблиця множення для числа <strong>${lastDigit}</strong>:</p><ul>`;
for (let i = 1; i <= 10; i++) {
    tableHTML += `<li>${lastDigit} * ${i} = ${lastDigit * i}</li>`;
}
tableHTML += "</ul>";
multiplicationOutput.innerHTML = tableHTML;

const numberCheckOutput = document.getElementById("number-check-output");
const p = document.createElement("p");

if (journalNumber % 2 === 0) {
    p.textContent = `Номер у журналі (${journalNumber}) є парним.`;
    p.className = "even";
} else {
    p.textContent = `Номер у журналі (${journalNumber}) є непарним.`;
    p.className = "odd";
}

numberCheckOutput.appendChild(p);