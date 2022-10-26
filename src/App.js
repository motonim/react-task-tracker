import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import { useState } from 'react'
import girlImage from './components/Creativity-amico-green.svg'

function App() {
	const [showAddTask, setShowAddTask] = useState(false)

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Get Lush bath bombs',
			day: ' Mar 15th at 5:00pm',
			reminder: false,
		},
		{
			id: 2,
			text: 'Change the air purifier filter',
			day: 'Mar 1st at 10:00am',
			reminder: true,
		},
		{
			id: 3,
			text: 'Finish the book',
			day: 'Feb 28th at 11:59pm',
			reminder: true,
		},
	])

	// Add Task

	function addTask(task) {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	// Delete Task
	function deleteTask(id) {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// Toggle Reminder
	function toggleReminder(id) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}

	return (
		<div class='d-flex-column'>
			<div className='container' style={{ userSelect: 'none' }}>
				<Header
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>
				{showAddTask ? <AddTask onAdd={addTask} /> : null}
				{tasks.length > 0 ? (
					<Tasks
						tasks={tasks}
						onToggle={toggleReminder}
						onDelete={deleteTask}
					/>
				) : (
					'No tasks to show'
				)}
				<Footer />
			</div>
			<img
				src={girlImage}
				className='amico'
				alt='a girl holding a pencil to make a plan'
			/>
		</div>
	)
}

export default App
