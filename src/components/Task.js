import { FaTimes } from "react-icons/fa"

function Task( { task, onDelete, onToggle } ) {
    return (
        <div 
            className={`task ${task.reminder ? "reminder" : ""}`} 
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}{' '} 
                <FaTimes 
                    style={{ color: '#88C1C0', cursor: 'pointer' }} 
                    onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>            
        </div>
    )
}

export default Task
