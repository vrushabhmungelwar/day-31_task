import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { v4 as uuid } from "uuid";

export function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="to-do">
      <div className="todo-cont">
        <div className="add-color-form">
          <TextField
            value={task}
            onChange={(event) => setTask(event.target.value)}
            id="standard-basic"
            label="Enter todays task "
            variant="standard"
            required
          />
          <Button
            onClick={() => {
              setTasks([...tasks, { task: task, id: uuid() }]);
              setTask("");
            }}
            variant="outlined"
          >
            Add
          </Button>
        </div>
        {tasks.map((tsk, index) => (
          <Todolist key={index} task={tsk} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
}
function Todolist({ task, tasks, setTasks }) {
  const removeitem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  return (
    <div className="task">
      <p className="task-name">{task.task}</p>
      <IconButton
        variant="text"
        color="inherit"
        style={{ marginLeft: "auto" }}
        onClick={() => removeitem(task.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
