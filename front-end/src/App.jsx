import './App.css'
import { useState } from 'react';

function App() {

  // Array of Goals Objects using useState to update and track
  const [goals, setGoals] = useState([
    { id: 1, date: 1696886400000, text: "Take a shower.", completed: false},
    { id: 2, date: 1696886400000, text: "Read a book.", completed: false},
    { id: 3, date: 1696713600000, text: "Eat some food.", completed: false},
    { id: 4, date: 1696627200000, text: "Clean the apartment.", completed: false},
    { id: 5, date: 1696886400000, text: "Talk to friends and family.", completed: false}
  ]);

  // Keep track of new Goal to be added (using input in Input Section)
  const [newGoal, setNewGoal] = useState("");

    // Handle Adding Goals
    const addGoal = () => {
      if(newGoal === "") {
        alert("Goal has not been entered.")
        console.log(`Goal: \"${newGoal}\" is empty.`);
        return;
      }

      console.log(`Goal: \"${newGoal}\" has been entered in input.`);

      setGoals(
        [...goals, {
          id: ++goals.length,
          date: Date.now(),
          text: newGoal,
          completed: false
        }]
      );

    }

    // Handle Deleting Goal
    const deleteGoal = (goalID) => {
      const newGoal = goals.filter((goal) => goal.id !== goalID);
      if(newGoal === null) {
        console.log(`Goal #${goalID} doesn't exist.`);
        alert(`Goal #${goalID} does not exist.`);
        return;
      }
      console.log(`Goal #${goalID} exists, therefore can be removed.`);
      setGoals(newGoal);
    };

    // Handle Complete Toggle Goal


    // Handle Date.now dates of goals
    const formatDateToMonthDayYear = (dateInteger) => {
      // console.log(typeof(dateInteger));

      const date = new Date(dateInteger);
      // console.log(typeof(date));

      const year = date.getFullYear();
      // const month = date.getMonth();
      const month = date.toLocaleDateString("en-CA", {month: 'long'});
      const day = date.getDay();

      return(`${month} ${day}, ${year}`);
    }

  return (
    <div className="app-container">
        <h1>Daily Focus Tracker</h1>

        {/* Input Section */}
        <div className="input-section">
          <input type="text" placeholder="Enter your focus goal." value={newGoal} onChange={(e) => setNewGoal(e.target.value)}/>
          <button onClick={addGoal}>Add Goal</button>
        </div>

        {/* Goal List */}
        <div className="goals-list"> 
          <h2>Today's Goals</h2>
          <ul>
            {
              goals.slice(0,3).map((goal) => (
                <li key={goal.id}>
                  Top #{goal.id} - Date: {formatDateToMonthDayYear(goal.date)} <br/>"{goal.text}" <button>{goal.completed === true ? "Completed" : "InComplete"}</button> - <button>Edit</button> - <button onClick={() => deleteGoal(goal.id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Additional Goals */}
        <div className="additional-goals">
          <h2>Other Goals</h2>
          <ul>
            {
              goals.slice(3).map((goal) => (
                <li key={goal.id}>
                  Goal #{goal.id} - Date: {formatDateToMonthDayYear(goal.date)} <br/>"{goal.text}" <button>{goal.completed === true ? "Completed" : "InComplete"}</button> - <button>Edit</button> - <button onClick={() => deleteGoal(goal.id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>

    </div>
  )
}

export default App