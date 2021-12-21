import React, { useState, useEffect } from "react";
import "./taskform.scss";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { proxy } from "./../../config/";

function TaskForm() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(task);
    if (editing) {
      console.log("editing");
      const response = await fetch(`${proxy}/api/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } else {
      try {
        setLoading(true);
        const response = await fetch(`${proxy}/api/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });
        const data = await response.json();
        console.log(data);
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert("Title already exists");
        navigate("/");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTask({ ...task, [name]: value }); //[name] is the same as name: value, but this sintax is used to avoid the error of the name being a string; [name] es lo mismo que name: value, pero se usa esta sintaxis para evitar el error de que el nombre sea un string
  };
  const loadTask = async (id) => {
    try {
      const response = await fetch(`${proxy}/api/tasks/${id}`);
      const data = await response.json();
      console.log(data);
      // console.log(task, "one");

      setTask({ title: data[0].title, description: data[0].description });
      // console.log(task, "two");
      setEditing(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(params);
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            {editing ? "Edit task" : "Create task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your title"
                name="title"
                value={task.title}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label="Write your description"
                name="description"
                value={task.description}
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
