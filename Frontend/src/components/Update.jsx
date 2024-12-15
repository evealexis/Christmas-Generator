// Pass update activity data from Home.jsx to Update component 
const Update = ({ updateActivity, handleUpdateInput, handleUpdate}) => {

    return(
        <div>
            {/* Grab current activity to update */}
            <label>Update {updateActivity.activity}:</label>
            <input type="text" name="activity" value={updateActivity.activity} onChange={handleUpdateInput}/>
            <button onClick={handleUpdate}>Update Activity</button>
        </div>
    );
};

export default Update;