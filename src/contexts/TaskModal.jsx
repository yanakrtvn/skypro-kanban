import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";

function TaskModal({ taskId, isOpen, onClose, onDelete }) {
  const { getTaskById } = useTasks();
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskId && isOpen) {
      const taskData = getTaskById(taskId);
      setTask(taskData);
    }
  }, [taskId, isOpen, getTaskById]);

  if (!isOpen) {
    return null;
  }

  if (!task) {
    return null;
  }

  return (
  
      <div >
        <h2>Модальное окно</h2>
        <p><strong>Задача:</strong> {task.title}</p>
        <p><strong>ID:</strong> {taskId}</p>
        <button onClick={onClose}>Закрыть</button>
        <button onClick={() => onDelete(taskId)} style={{marginLeft: '10px', background: 'red', color: 'white'}}>
          Удалить
        </button>
      </div>
  );
}

export default TaskModal;