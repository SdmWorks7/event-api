const express = require("express");
const path = require("path");

const app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.send("Welcome to Event API");
});

app.get("/events/:id", (req,res) => {
    res.send(`Event ID: ${req.params.id}`);
});

app.get("/ig/:username", (req,res) => {
   const instaData = require("./data.json");
   const { username } = req.params;
   const data = instaData[username];
   if(data){
     res.render("home.ejs", {data});
   }
   else{
    res.status(400).render("error.ejs");
   }
  
});

app.get("/users/:userId/posts/:postId", (req,res) => {
    res.send(`User: ${req.params.userId}
        Post: ${req.params.postId}`);
});

app.get("/events", (req, res) => {
    const page = req.query.page === undefined
        ? 1
        : Number(req.query.page);

    const limit = req.query.limit === undefined
        ? 10
        : Number(req.query.limit);

    if (
        Number.isFinite(page) &&
        Number.isInteger(page) &&
        page > 0 &&
        Number.isFinite(limit) &&
        Number.isInteger(limit) &&
        limit > 0
    ) {
        res.send(`Page: ${page}
Limit: ${limit}`);
    } else {
        res.status(400).send("Invalid pagination request!");
    }
});

app.get("/about", (req,res) => {
    res.send("Backend Engineering course");
})



app.listen(3000, () => {
    console.log("Server running on port 3000");
});