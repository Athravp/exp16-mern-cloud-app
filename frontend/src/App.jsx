import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://exp16-mern-cloud-app.onrender.com/api/courses")
            .then((response) => response.json())
            .then((data) => {
                setCourses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load courses:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="app">
            <h1>SkillHub Courses</h1>
            <p>Courses loaded from the Node.js backend</p>

            {loading ? (
                <h3>Loading courses...</h3>
            ) : (
                <div className="course-list">
                    {courses.map((course) => (
                        <div className="course-card" key={course.id}>
                            <h2>{course.name}</h2>
                            <p>
                                <strong>Duration:</strong> {course.duration}
                            </p>
                            <p>
                                <strong>Mode:</strong> {course.mode}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;