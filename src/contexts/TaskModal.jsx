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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px'
      }}>
        <h2>Модальное окно</h2>
        <p><strong>Задача:</strong> {task.title}</p>
        <p><strong>ID:</strong> {taskId}</p>
        <button onClick={onClose}>Закрыть</button>
        <button onClick={() => onDelete(taskId)} style={{marginLeft: '10px', background: 'red', color: 'white'}}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default TaskModal;