let money, time;

function start(){
    money = +prompt("Введите Ваш бюджет", ""),
    time = prompt("Введите дату гггг-мм-дд", "");

    while ( isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите Ваш бюджет", "");
    }
};

start();


let appData = {
    budget: money,
    timeDate: time,
    expense: {},
    optionalExpense: {},
    income: [],
    savings: true
};

function chooseExpenses (){
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("Done!")
            appData.expense[a] = b;
    } 
    else {
        i = i - 1;
    }
}
};
chooseExpenses();


function detectDayBudget() {

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ваш бюджет на 1 день" + " " + appData.moneyPerDay + " " + "Рублей" );

};

detectDayBudget();

function detectLevel() {
if (appData.moneyPerDay < 100) {
    console.log("Минимальный дневной бюджет");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средный дневной бюджет");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий дневной бюджет");
} else {
    console.log("Ошибка ввода, повторить");
}
};

detectLevel();

function checkSavings() {
    if ( appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
};

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++ ) {
        a = prompt("Введите необязательную статью расходов: ");
        appData.optionalExpense[i] = a;        
    }
    console.log(appData.optionalExpense);
}
chooseOptExpenses();