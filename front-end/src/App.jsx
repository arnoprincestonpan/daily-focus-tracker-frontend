import './App.css'
import { useState } from 'react';

function App() {

  // Array of Goals Objects using useState to update and track
  const [goals, setGoals] = useState([
    { id: 1, text: "Goal 1", completed: false},
    { id: 2, text: "Goal 2", completed: false},
    { id: 3, text: "Goal 3", completed: false},
    { id: 4, text: "Goal 4", completed: false},
    { id: 5, text: "Goal 5", completed: false}
  ]);

  return (
    <div className="app-container">
        <h1>Daily Focus Tracker</h1>

        {/* Input Section */}
        <div className="input-section">
          <input type="text" placeholder="Enter your focus goal."/>
          <button>Goal Button</button>
        </div>

        {/* Goal List */}
        <div className="goals-list"> 
          <h2>Today's Goals</h2>
          <ul>
            <li>
              Goal 1 <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
            </li>
            <li>
              Goal 2 <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
            </li>
            <li>
              Goal 3 <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
            </li>
          </ul>
        </div>

        {/* Additional Goals */}
        <div className="additional-goals">
          <h2>Other Goals</h2>
          <ul>
            <li>
              Goal 4 <button>Complete</button> - <button>Edit</button> - <button>Delete</button>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default App