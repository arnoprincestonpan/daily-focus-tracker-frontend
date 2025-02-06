import './App.css'
import { useState } from 'react';

function App() {

  // Array of Goals Objects using useState to update and track
  const [goals, setGoals] = useState([
    { id: 1, date: 1696886400000, text: "Goal 1", completed: false},
    { id: 2, date: 1696800000000, text: "Goal 2", completed: false},
    { id: 3, date: 1696713600000, text: "Goal 3", completed: false},
    { id: 4, date: 1696627200000, text: "Goal 4", completed: false},
    { id: 5, date: 1696886400000, text: "Goal 5", completed: false}
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
                  Top #{goal.id} - Date: {Date(goal.date)} "{goal.text}" <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
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
              goals.slice(3).map((goals) => (
                <li key={goals.id}>
                  Goal {goals.id}: {goals.text} <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>

    </div>
  )
}

export default App