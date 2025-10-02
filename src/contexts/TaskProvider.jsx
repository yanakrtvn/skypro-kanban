import React, { useState, useCallback } from 'react';
import { TaskContext } from './TaskContext';
import { kanbanAPI } from '../services/api';

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadTasks = useCallback(async (force = false) => {
        if (force) {
            setTasks([]);
        }
        
        try {
            setIsLoading(true);
            setError(null);
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Токен авторизации не найден');
            }

            const tasksData = await kanbanAPI.fetchTasks({ token });
            setTasks(tasksData || []);
            
        } catch (error) {
            setError(error.message);
            console.error('Ошибка загрузки задач:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addTask = async (taskData) => {
        try {
            setError(null);
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Токен авторизации не найден');
            }

            const newTask = await kanbanAPI.postTask({
                token,
                task: taskData
            });
            
            setTasks(prev => [...prev, newTask]);
            return newTask;
            
        } catch (error) {
            setError(error.message);
            console.error('Ошибка создания задачи:', error);
            throw error;
        }
    };

    const updateTask = async (taskId, updatedData) => {
        try {
            setError(null);
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Токен авторизации не найден');
            }

            const currentTask = tasks.find(task => task._id === taskId);
            if (!currentTask) {
                throw new Error('Задача не найдена');
            }

            const updatePayload = {
                title: updatedData.title || currentTask.title,
                topic: updatedData.topic || currentTask.topic,
                status: updatedData.status || currentTask.status,
                description: updatedData.description || currentTask.description || "Описание задачи",
                date: updatedData.date || currentTask.date
            };

            await kanbanAPI.editTask({
                id: taskId,
                token,
                task: updatePayload
            });
            
            setTasks(prev => prev.map(task => 
                task._id === taskId ? { ...task, ...updatedData } : task
            ));
            
        } catch (error) {
            setError(error.message);
            console.error('Ошибка обновления задачи:', error);
            throw error;
        }
    };

    const deleteTask = async (taskId) => {
        try {
            setError(null);
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Токен авторизации не найден');
            }

            await kanbanAPI.deleteTask({
                id: taskId,
                token
            });
            
            setTasks(prev => prev.filter(task => task._id !== taskId));
            
        } catch (error) {
            setError(error.message);
            console.error('Ошибка удаления задачи:', error);
            throw error;
        }
    };

    const getTaskById = useCallback((taskId) => {
        return tasks.find(task => task._id === taskId);
    }, [tasks]);

    const value = {
        tasks,
        isLoading,
        error,
        loadTasks,
        addTask,
        updateTask,
        deleteTask,
        getTaskById
    };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
};