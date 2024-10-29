import Input from "./Form/Input"
import ChooseCategory from "./Form/ChooseCategory"
import Button from "./Form/Button"

const API = () => {
    return (
        <div>
        <Input element="input" type="text" label="Activity" validators={[]} errorText="Please enter a valid activity"/>
        <ChooseCategory type="text" label="Category"/>
        <Button />
        </div>
    );
};

export default API;