// Data
let goalList = []

// Elements
let goalTitleInput = document.getElementById('goal-title')
let goalDescriptionInput = document.getElementById('goal-description')
let goalDateInput = document.getElementById('due-date')

let goalDateForm = document.getElementById('goal-form')
let addedGoals = document.getElementById('goals')

// EventListeners

goalDateForm.addEventListener('submit', function(event) {

    event.preventDefault()

    let Data = {}
    Data.goalTitle = goalTitleInput.value 
    Data.goalDescription = goalDescriptionInput.value 
    Data.goalDate = goalDateInput.value

    goalList.push(Data)
    renderGoalList()
})

function renderGoalList() {
    let goalsHtml = ''


    for ( let i=0; i < goalList.length; i++) {
        let dataObj = goalList[i]

        goalsHtml += `
            <li>
                <h3>${dataObj.goalTitle}</h3>
                <p>${dataObj.goalDescription}</p>
                <p>Due Date: ${dataObj.goalDate}</p>
                <button>Edit</button>
                <button data-goal-title ="${dataObj.goalTitle}" onclick="deleteGoal()">Delete</button>
            </li>`
    }

    addedGoals.innerHTML = goalsHtml
}

function deleteGoal() {
    const currentItem = document.querySelector('[data-goal-title]')

    goalList=goalList.filter(item => item.goalTitle !== currentItem.getAttribute('data-goal-title'))
    renderGoalList()
}








































































