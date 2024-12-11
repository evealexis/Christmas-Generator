import { useState, useEffect } from "react";
import axios from 'axios';

const backend_url = import.meta.env.VITE_BACKEND_URL;

console.log(backend_url);

const Home = () => {

    const [activitydb, setActivitydb] = useState({});

    // For the input
    const [newActivity, setNewActivity] = useState({
        id: activitydb.id,
        activity: ""
    });

    const [updateActivity, setUpdateActivity] = useState({});

    useEffect(() => {
        if (activitydb) {
            setUpdateActivity({
                id: activitydb.id,
                activity: activitydb.activity
            });
        }
    }, [activitydb]);

    
    const handleClick = async () => {
        const response = await axios.get(backend_url)
            const obj = response.data;
            const random = Math.floor(Math.random() * obj.length)
            const randomObj = obj[random]
            setActivitydb(randomObj);
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

    return(
        <div className="page-container">
            <div className="content-wrapper">
            <h1>Christmas Activity Generator!</h1>
            <p>Full of Turkey and all the trimmings? Wondering what to do next? Try the Christmas activity generator below:</p>
                <label>Create new activity:</label>
                <input type="text" name="activity" value={newActivity.activity} onChange={handleInput}/>
                <button onClick={handleSubmit}>Create Activity</button>
                <button onClick={handleClick}>Get Activity</button>
                <button onClick={handleDelete}>Delete Activity</button>
                {activitydb.activity}
                {/* Update activity */}
                <p>Update</p>
                <label>Update {activitydb.activity}:</label>
                <input type="text" name="activity" value={updateActivity.activity} onChange={handleUpdateInput}/>
                <button onClick={handleUpdate}>Update Activity</button>
            </div>
            </div>
    )
}

export default Home;
