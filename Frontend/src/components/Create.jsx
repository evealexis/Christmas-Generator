// Pass update activity data from Home.jsx to Update component 
const Create = ({ newActivity, handleInput, handleSubmit}) => {

    return(
        <div>
            <label>Create new activity:</label>
            <input type="text" name="activity" value={newActivity.activity} onChange={handleInput}/>
            <button onClick={handleSubmit}>Create Activity</button>
        </div>
    );
};

export default Create;