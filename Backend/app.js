const express = require("express");
const bodyParser = require("body-parser");
const data = require("./activitydb.json")
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json(data)
});

app.post("/new", (req, res) => {
    const newActivity = req.body;

    fs.readFile("./activitydb.json", (err, data) =>{
        let activities = JSON.parse(data);
        const newId = activities[activities.length -1].id + 1
        newActivity.id = newId;

        const orderedActivity = {id: newId, ...newActivity}

        activities.push(orderedActivity)

        fs.writeFile("./activitydb.json", JSON.stringify(activities, 2), "utf8", () => {
            res.json(orderedActivity);
        });
    });
});

app.delete("/:id", (req, res) => {
    const currentId = parseInt(req.params.id);

    fs.readFile("./activitydb.json", (err, data) => {
        let activities = JSON.parse(data);
        const newAct = activities.filter((activity) => {if(activity.id !== currentId){
        return true}})

        fs.writeFile("./activitydb.json", JSON.stringify(newAct),(err) => {
            res.json(newAct)
        });
    });
});

app.patch("/:id", (req, res) => {
    const updateActivity = req.body;
    const updateActivityId = parseInt(req.params.id);
    

    fs.readFile("./activitydb.json", (err, data) => {
        let activities = JSON.parse(data);

        // find the current activity from old array (creates new array)
        const updateAct = activities.find(({id}) => (id === updateActivityId));

        updateAct.activity = updateActivity.activity
        console.log(updateAct)

        // filter the array where all activities are not the current activity
        const filteredActs = activities.filter(({id}) => id !== updateActivityId);

        filteredActs.push(updateAct);

        fs.writeFile(("./activitydb.json"), JSON.stringify(filteredActs), (err) => {
        res.json(updateAct)
        });
    });
  
});


app.listen(3000,() => 
    console.log("Server ready on port 3000"));