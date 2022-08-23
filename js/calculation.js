
// <---------create a function to select best 5 players---------->
const playerArray = [];
function addSelectedPlayers(btnClick) {
    const playerName = btnClick.parentNode.parentNode.children[0].innerText;

    const len = playerArray.length;
    if (len == 5) {
        alert("You can't select more than 5 players")
        return;
    }

    playerArray.push(playerName);
    btnClick.style.backgroundColor = "#a4f4f9";
    btnClick.disabled = true;

    // <--------to show the player list in my website ------------->
    const addField = document.getElementById('tableBody');
    addField.innerText = '';
    for (let i = 0; i < playerArray.length; i++) {
        const addPlayers = document.createElement("tr");
        addPlayers.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${playerArray[i]}</td>
        `
        addField.appendChild(addPlayers);
    }


}


// <-------------create a function to got the input value------------>
function gotInputValue(inputFielId) {
    const inputValueString = document.getElementById(inputFielId).value;
    const inputValue = parseFloat(inputValueString);
    if (inputValue < 0 || isNaN(inputValue) == true) {
        alert("please Enter positive integer number")
        document.getElementById(inputFielId).value = '';
        return 'error';
    }
    return inputValue;
}

// <--------------create a function to set innerText -------------->
function setInnerText(fieldId, newValue) {
    document.getElementById(fieldId).innerText = newValue;
}

//<---------- click calculate btn to got the total player Expenses value----------->
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerExpenses = gotInputValue('perPlayer-expenses');

    //<-------------- to show the validation alert to wrong input of player expenses------>
    if (perPlayerExpenses == 'error') {
        setInnerText('player-expenses', '00');
        setInnerText('total-expenses', '00');
        return;
    }

    //<-------------- to show the validation alert for player expenses without select------>
    const totalPlayer = playerArray.length;
    if (totalPlayer == 0) {
        alert("First you have to select the players")
        return;
    }

    const totalPlayerExpenses = perPlayerExpenses * totalPlayer;
    setInnerText('player-expenses', totalPlayerExpenses);
})

//<------- click calculate total btn to got the total Expenses value --------->
document.getElementById('total-btn').addEventListener('click', function () {
    const perPlayerExpenses = gotInputValue('perPlayer-expenses');
    const totalPlayer = playerArray.length;
    const totalPerPlayerExpenses = perPlayerExpenses * totalPlayer;
    const managerSalary = gotInputValue('manager-field');
    const coachSalary = gotInputValue('coach-Field');

    //<-------------- to show the validation alert to wrong input of player expenses,manger,coah field------>
    if (perPlayerExpenses == 'error' || managerSalary == 'error' || coachSalary == 'error') {
        setInnerText('total-expenses', '00');
        return;
    }
    const totalExpenses = totalPerPlayerExpenses + managerSalary + coachSalary;
    setInnerText('total-expenses', totalExpenses);

})

