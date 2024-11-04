import React, { useState } from "react";
import { Checkbox } from "antd"; // Import Checkbox component from Ant Design

const courses = [ // Corrected spelling: 'courses'
  {
    id: 1,
    name: "Html, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "React JS",
  },
];

function TwoWayBinding() {
  const [checkedCourses, setCheckedCourses] = useState([]);

  const handleCheck = (courseId: never) => {
    const updatedCheckedCourses = [...checkedCourses]; // Create a copy of the state

    const index = updatedCheckedCourses.indexOf(courseId);
    if (index > -1) {
      updatedCheckedCourses.splice(index, 1); // Remove if already checked
    } else {
      updatedCheckedCourses.push(courseId); // Add if not checked
    }

    setCheckedCourses(updatedCheckedCourses);
  };

  const handleSubmit = () => {
    console.log({ selectedCourses: checkedCourses }); // Corrected variable name
  };

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <Checkbox
            checked={checkedCourses.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          >
            {course.name}
          </Checkbox>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default TwoWayBinding;