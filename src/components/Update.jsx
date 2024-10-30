import { useParams } from 'react-router-dom';

import Input from './Form/Input';
import { VALIDATOR_REQUIRE } from '../util/validators';

id = Math.random(Math.floor() * 100).toString()

const DUMMY_ACTIVITIES = [
    {
        id: id,
        description: 'Play Monopoly',
        category: 'Games'
    },
    {
        id: id,
        description: 'Make up a Christmas Story',
        category: 'Games'
    },
    {
        id: id,
        description: 'Make a gingerbread house',
        category: 'Games'
    },
    {
        id: id,
        description: 'Watch "Home Alone"',
        category: 'Movies'
    },
    {
        id: id,
        description: 'Make a fort with your friends',
        category: 'Many People Can Join'
    }
];

const Update = () => {
    const activityId = useParams().activityId;

    const identifiedActivity = DUMMY_ACTIVITIES.find(p => p.id === id);

    if (!identifiedActivity) {
        return <div className='center'><h2>Could not find activity</h2></div>
    }

    return <form>
        <Input id="activity" element="input" type="text" label="Activity" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid activity" onInput={titleInputHandler} value={identifiedActivity.value} valid={true} />
    </form>
}

export default Update;