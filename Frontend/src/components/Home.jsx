import { useState, useEffect } from "react";
import axios from 'axios';
import Update from './Update';
import Create from "./Create";

const backend_url = import.meta.env.VITE_BACKEND_URL;


const Home = () => {

    const [activitydb, setActivitydb] = useState({});
    const [updateActivity, setUpdateActivity] = useState({});
    const [showUpdate, setShowUpdate] = useState(false);
    const [showCreate, setShowCreate] = useState(false);


    // For the input
    const [newActivity, setNewActivity] = useState({
        id: activitydb.id,
        activity: ""
    });

    useEffect(() => {
        if (activitydb) {
            setUpdateActivity({
                id: activitydb.id,
                activity: activitydb.activity
            });
        }
    }, [activitydb]);

    
    const handleClick = async () => {
        try{ 
            const response = await axios.get(backend_url);
            
            if(!response.ok) {
                console.log("Unable to fetch acitivity");
            }
            const obj = response.data;
            const random = Math.floor(Math.random() * obj.length);
            const randomObj = obj[random];
            setActivitydb(randomObj);
        }
        catch (err){
            console.log(`Error: ${err}`)
        }
    };

    const handleInput = (e) => {
        setNewActivity({
            // e.target.name => name of the input
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateInput = (e) => {
        setUpdateActivity(prevState => ({ 
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        const response = await axios.post(`${backend_url}/new`, newActivity)
        setNewActivity(response.data);
    };

    const handleDelete = () => {
        axios.delete(`/${activitydb.id}`)
    };

    const handleUpdate = async () => {
        const response = await axios.patch(`${backend_url}/${updateActivity.id}`, updateActivity)
        setActivitydb(response.data);
    };

    const toggleUpdate = () => {
        setShowUpdate((showUpdate) => !showUpdate);
    };

    const toggleCreate = () => {
        setShowCreate((showCreate) => !showCreate);
    };

    return(
        <div className="page-container">
            <div className="content-wrapper">
            <h1>Christmas Activity Generator!</h1>
            <p>Full of Turkey and all the trimmings? Wondering what to do next? Try the Christmas activity generator below:</p>
            <button onClick={toggleCreate}>Create New Activity?</button>
                {/* If showCreate is true then render Create component, othewise keep it hidden */}
                {showCreate && <Create handleInput={handleInput} handleSubmit={handleSubmit} newActivity={newActivity} />}
                <button onClick={handleClick}>Get Activity</button>
                <button onClick={handleDelete}>Delete Activity</button>
                {activitydb.activity}
                <button onClick={toggleUpdate}>Update Current Activity</button>
                {showUpdate && <Update updateActivity={updateActivity} handleUpdateInput={handleUpdateInput} handleUpdate={handleUpdate}/>}
            </div>
            </div>
    )
}

export default Home;
