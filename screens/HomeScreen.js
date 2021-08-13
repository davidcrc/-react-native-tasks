// rnfe shortcode
import React, { useEffect, useState } from "react";
import { View, Text,  } from "react-native";
import { getTasks } from "../api";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";


const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
    // console.log("get tasks", data);
  };
  useEffect(() => {
    console.log("loaded");
    loadTask();
  }, []);

  // console.log("tasks size", tasks.length);
  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default HomeScreen;
