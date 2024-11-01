import { useState } from "react"
import { activitydb } from "./activitydb";
import Random from "./Random";

const API = () => {

    // initially the random activity is hidden
    const [showRandom, setShowRandom] = useState(false);

    const [randAct, setRandAct] = useState({description: ""})
    const [message, setMessage] = useState("");


    const getRandomAct = () => {
        const randomIndex = Math.floor(Math.random() * activitydb.length);
        const randomActivity = activitydb[randomIndex]
        setRandAct(randomActivity) ;
        // Show random activity
        setShowRandom(true);
        // Empty while random is showing
        setMessage("");
    };

    const handleShowRandom = () => {
        if (activitydb.length === 0) {
        // If there are no entries, setMessage state
            setMessage("No activities found. Create one?");
            setShowRandom(false);
        } else {
            getRandomAct();
        } 
    };

    
    // New activites will be a string, and then pushed into an array

    // activities that have been added states - added dummy activities for testing purposes
    const [activities, setActivities] = useState(["Open presents", "Play monopoly", "Play in the snow"]);

    // for adding new activity states
    const [newActivity, setNewActivity] = useState("");

    
    // Text that is typed in the input
    function handleInputChange(event){
        // The text will show in the input box with every keystroke - it's state is updated
       setNewActivity(event.target.value);
    }


      function addActivity(){
        if (newActivity.trim() !== "") {
        // updater function(gets text from input) - previous state of activities => current elements of activities, add a new activity
        setActivities(a => [...a, newActivity]);
        // clears the input element after a new task has been added
        setNewActivity("");
        setShowRandom(false);
        }

      }


      function deleteActivity(index){
        // if the i (index) is not equal to the index in the activities array, then push those items into the updatedActivites array and delete the item that matiches the index
        const updatedActivites = activities.filter((_, i) => i !== index);
        setActivities(updatedActivites);
      }


    return (
        <div>
        <form>
        <input onChange={handleInputChange} value={newActivity} />

        {/* So when the button is clicked, the activites pushed into the acitvity state will show up */}
        <button onClick={addActivity} type="button" >
        Add Activity
        </button>



        <button onClick={handleShowRandom} type="button" >
        Get Random Activity
        </button>

        </form>
        {/* if it is true that there are no entries, render message */}
        {message && <h3>{message}</h3>}

        {/* if showRandom state is false, then render random component */}
        {showRandom && <Random randAct={randAct} />}

        {/* if showRandom is state is true, then render the activities */}

    {!showRandom && (
        /* Each list element will have a delete button, it will be deleted based on its ID(index) */
        /* Each id is its index in the initial state array */
        <ul>
    
            {activities.map((item, index) => (
                <li key={index}>{item}
                <button onClick={() => deleteActivity(index)}>Delete Activity?</button>
                </li>
            ))}
            
        </ul>)}
        </div>
    );
};

export default API;