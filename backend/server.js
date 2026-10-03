const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const courses = [
    {
        id: 1,
        name: "Full Stack Web Development",
        duration: "8 Weeks",
        mode: "Online"
    },
    {
        id: 2,
        name: "Java Programming",
        duration: "6 Weeks",
        mode: "Hybrid"
    },
    {
        id: 3,
        name: "Artificial Intelligence Basics",
        duration: "10 Weeks",
        mode: "Online"
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Course API is running successfully"
    });
});

app.get("/api/courses", (req, res) => {
    res.json(courses);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});