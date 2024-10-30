import { useState } from "react"
import { activitydb } from "./activitydb";
import Activities from "./Activities";


const API = () => {

    const [randAct, setRandAct] = useState({description: ""});
    const [actIsVisible, setActIsVisible] = useState(false);

    function getRandomAct() {
        const randomIndex = Math.floor(Math.random() * activitydb.length);
        const randomActivity = activitydb[randomIndex]
        setRandAct(randomActivity);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    //if user clicks add activity then display activities component:
    const handleActivityButton = () => {
        setActIsVisible(prevState => !prevState);
    };



    return (
        <div>
        <form onSubmit={handleFormSubmit}>
        <input 
        id="activity"
        element="input" 
        type="text" 
        label="Activity" 
        />

        <button onClick={handleActivityButton} type="submit">
        Add Activity
        </button>

        <button onClick={getRandomAct} type="submit" >
        Get Random Activity
        </button>

        </form>
        {actIsVisible && <Activities />}
        <p>{randAct.description}</p>
        </div>
    );
};

export default API;