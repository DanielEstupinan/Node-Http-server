import './App.css'
import Header from './Header'
import TaskList from './TaskList'
import Task from './Task'



function App() {
  const setTasks = [
    { name: 'Tarea 1', completed: false },
    { name: 'Tarea 2', completed: true },
    { name: 'Tarea 3', completed: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
      <Camilo/>
      <TaskList tasks={tasks} />
      <Santiago />
      <TaskList tasks={tasks} />
  );
}
export default App;
