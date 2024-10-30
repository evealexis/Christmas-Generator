import { activitydb } from "./activitydb";

const Activities = () => {

    if (activitydb.length === 0) {
        return <div>
            <h3>No activities found. Please create one</h3>
            <button>Add Activity</button>
        </div>
    }

    return (
        <ul>
            {activitydb.map(item =>
                <li key={item.id}>{item.description}</li>
            )}
        </ul>
    )
};

export default Activities;