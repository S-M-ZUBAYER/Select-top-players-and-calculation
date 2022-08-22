
// create a function to select best 5 players 
const playerArray = [];
function addSelectedPlayers(btnClick) {
    const playerName = btnClick.parentNode.parentNode.children[0].innerText;
    const len = playerArray.length;
    if (len == 5) {
        alert("You can't select more than 5 players")
        return;
    }
    playerArray.push(playerName);
    const addField = document.getElementById('tableBody');
    addField.innerText = '';
    for (let i = 0; i < playerArray.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${playerArray[i]}</td>
        `
        addField.appendChild(tr);
    }

}


// create a function to got the input value 
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

// create a function to set innerText 
function setInnerText(fieldId, newValue) {
    document.getElementById(fieldId).innerText = newValue;
}

// click calculate btn to got the total player Expenses value 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerExpenses = gotInputValue('perPlayer-expenses');
    if (perPlayerExpenses == 'error') {
        setInnerText('player-expenses', '00');
        return;
    }

    const totalPlayer = playerArray.length;
    const totalPlayerExpenses = perPlayerExpenses * totalPlayer;
    console.log(totalPlayer, totalPlayerExpenses)
    setInnerText('player-expenses', totalPlayerExpenses);
})

// click calculate total btn to got the total Expenses value 
document.getElementById('total-btn').addEventListener('click', function () {
    const perPlayerExpenses = gotInputValue('perPlayer-expenses');
    const totalPlayer = playerArray.length;
    const totalPerPlayerExpenses = perPlayerExpenses * totalPlayer;
    const managerSalary = gotInputValue('manager-field');
    const coachSalary = gotInputValue('coach-Field');
    if (perPlayerExpenses == 'error' || managerSalary == 'error' || coachSalary == 'error') {
        setInnerText('total-expenses', '00');
        return;
    }
    const totalExpenses = totalPerPlayerExpenses + managerSalary + coachSalary;
    setInnerText('total-expenses', totalExpenses);

})

