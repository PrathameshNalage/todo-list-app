import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, CheckCircle } from "lucide-react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="w-64"
        />
        <Button onClick={addTask} className="bg-blue-500 hover:bg-blue-600">Add</Button>
      </div>
      <div className="w-full max-w-md space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => toggleTask(index)}>
                <CheckCircle className={task.completed ? "text-green-400" : "text-gray-400"} />
              </Button>
              <Button variant="ghost" onClick={() => deleteTask(index)}>
                <Trash2 className="text-red-400" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
