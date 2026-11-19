import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import initialTasks from './data/initialTasks'
import BoardPage from './pages/BoardPage'
import TaskDetailPage from './pages/TaskDetailPage'
import ArchivePage from './pages/ArchivePage'

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)

  function updateTask(id, updatedFields) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage tasks={tasks} />} />

        <Route
          path="/task/:id"
          element={
            <TaskDetailPage
              tasks={tasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          }
        />

        <Route
          path="/archive"
          element={<ArchivePage tasks={tasks} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
