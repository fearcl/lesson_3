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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ваш бюджет на 1 день" + " " + appData.moneyPerDay + " " + "Рублей" );
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный дневной бюджет");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средный дневной бюджет");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий дневной бюджет");
        } else {
            console.log("Ошибка ввода, повторить");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма Ваших накоплений? "),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert( "Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for ( let i = 1; i < 4; i++ ) {
            opt = prompt("Введите необязательную статью расходов: ");
            appData.optionalExpense[i] = opt;
        }
        console.log(appData.optionalExpense);
    },
    chooseIncome: function(){
        for ( let i = 0; i < 1; i++ ) {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
            if ((typeof(items)) == "string" && items != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще? '));
                appData.income.sort();
                appData.income.forEach( function (a, b) {
                    console.log('Способы доп. заработка: ' + ++b + ": " + a);
                })
            } else {
                i--;
            }
        }
    }   
};


for ( let key in appData) {
    console.log(key);
}

Object.keys(appData); 

for ( let i = 0; i < 1; i++) {
    m = prompt("введите значение 3");
    if (m == 3) {
        console.log("done");
    } else {
       i--;
       console.log(i);
    }
};