import { activitydb } from "./activitydb";

const Activities = () => {

    return (
        <ul>
            {activitydb.map(item =>
                <li key={item.id}>{item.description}</li>
            )}
        </ul>
    )
};

export default Activities;