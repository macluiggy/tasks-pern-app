import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./tasklist.scss";
import { proxy } from "../../config/";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    try {
      const response = await fetch(`${proxy}/api/tasks`);
      const data = await response.json();
      // console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${proxy}/api/tasks/${id}`, {
        method: "DELETE",
      });
      loadTasks();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h1 className="hello">Task list </h1>
      {tasks.map(({ description, id, status, title }) => (
        <Card
          key={id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#fff",
              }}
            >
              <Typography>{title}</Typography>
              <Typography>{description}</Typography>
            </div>

            <div>
              {" "}
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${id}/edit`)}
                style={{
                  marginRight: ".5rem",
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default TaskList;
