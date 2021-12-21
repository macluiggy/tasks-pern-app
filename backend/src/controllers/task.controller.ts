import pool from "../database";
import dotenv from "dotenv";
dotenv.config();
export const test = async (req, res, next) => {
  // res.send("Hello World");
  try {
    const response = await pool.query("SELECT * FROM users");
    console.log(process.env.USER);
    res.json(response.rows);
  } catch (error) {
    // console.log(error);
    // res.json({ message: error.message });
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Server error (500)... Please try again later" });
  }
};

export const getAllTasks = async (req, res, next) => {
  // res.send("Hello from tasks");
  try {
    const result = await pool.query("SELECT * FROM tasks");
    console.log(result);
    res.json(result.rows);
  } catch (error) {
    // console.log(error);
    // res.json({ message: error.message });
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Server error (500)... Please try again later" });
  }
};

export const getTask = async (req, res, next) => {
  // res.send("Hello from tasks");
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    console.log(result);
    if (!result.rows.length) return res.status(404).json("Task not found");
    return res.status(200).json(result.rows);
  } catch (error) {
    // console.log(error);
    // const errMessage =
    //   process.env.NODE_ENV === "production"
    //     ? "Server error (500)... Please try again later"
    //     : error.message;
    // return res.json({ Error: errMessage });
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Server error (500)... Please try again later" });
  }
};

export const createTask = async (req, res, next) => {
  // res.send("Hello from tasks");
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *;",
      [title, description]
    );
    console.log(result);
    res.json({
      message: "Task created successfully",
      body: { title, description },
    });
  } catch (error) {
    // console.log(error);
    // const errMessage =
    //   process.env.NODE_ENV === "production"
    //     ? "Server error (500)... Please try again later"
    //     : error.message;
    // res.json({ Error: errMessage });
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Title task already exists in other task" });
  }
};

export const udpateTask = async (req, res, next) => {
  // res.send("Hello from tasks");
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    console.log(result);
    if (!result.rowCount) return res.status(404).json("Task not found");
    return res
      .status(200)
      .json({ message: "Task updated successfully", body: result.rows[0] });
  } catch (error) {
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Title task already exists in other task" });
  }
};

export const deeleteTask = async (req, res, next) => {
  // res.send("Hello from tasks");
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );
    console.log(result);
    if (!result.rowCount) return res.status(404).json("Task not found");
    // return res.status(200).json({ "user deleted": result.rows[0] });
    return res.sendStatus(204); // 204 = no content, no data to return to client (no content), but the request was successful (no error) (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
  } catch (error) {
    // console.log(error);
    // const errMessage =
    //   process.env.NODE_ENV === "production"
    //     ? "Server error (500)... Please try again later"
    //     : error.message;
    // res.json({ Error: errMessage });
    console.log(error);
    if (process.env.NODE_ENV !== "production") return next(error);
    return res.json({ Error: "Server error (500), please try againd" });
  }
};
