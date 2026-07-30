const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Event API");
});

app.get("/events/:id", (req,res) => {
    res.send(`Event ID: ${req.params.id}`);
});

app.get("/users/:userId/posts/:postId", (req,res) => {
    res.send(`User: ${req.params.userId}
        Post: ${req.params.postId}`);
});

app.get("/events", (req, res) => {
    res.send("List of events");
});

app.get("/about", (req,res) => {
    res.send("Backend Engineering course");
})



app.listen(3000, () => {
    console.log("Server running on port 3000");
});