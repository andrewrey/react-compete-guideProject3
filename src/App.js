import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

let idNum = 3;
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  let id = `g${idNum}`;
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      console.log(prevGoals);
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: id });
      console.log(updatedGoals);
      idNum += 1;
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      console.log(prevGoals);
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
