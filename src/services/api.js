import axios from "axios";

// Базовые URL
const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban/";
const USER_API_URL = "https://wedev-api.sky.pro/api/user";

// Глобальная настройка Axios для предотвращения добавления Content-Type
axios.defaults.headers.put["Content-Type"] = "";
axios.defaults.headers.post["Content-Type"] = "";

// Интерцептор для обработки ошибок авторизации
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API для задач (Kanban)
export const kanbanAPI = {
   async fetchTasks({ token }) {
    try {
      const response = await axios.get(KANBAN_API_URL, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      
      // Обрабатываем разные возможные форматы ответа
      if (Array.isArray(response.data)) {
        return response.data; // если ответ - массив
      } else if (response.data && Array.isArray(response.data.tasks)) {
        return response.data.tasks; // если ответ - объект с tasks
      } else {
        console.warn("Неожиданный формат ответа:", response.data);
        return []; // возвращаем пустой массив по умолчанию
      }
    } catch (error) {
      console.error("Ошибка в fetchTasks:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || error.message);
    }
  },

  // Получение задачи по ID
  async getTask({ id, token }) {
    try {
      const response = await axios.get(`${KANBAN_API_URL}${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data.task;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Добавление новой задачи
  async postTask({ token, task }) {
  try {
    const response = await axios.post(KANBAN_API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    
    // Возвращаем созданную задачу или весь ответ
    return response.data.task || response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
},

  // Редактирование задачи
  async editTask({ id, token, task }) {
    try {
      const payload = {
        title: task.title,
      topic: task.topic,
      status: task.status,
      date: task.date,
      description: task.description || "",
    };
      

      const response = await axios.put(`${KANBAN_API_URL}${id}`, payload, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data.tasks;
    } catch (error) {
      throw new Error(error.response?.data?.error || error.message);
    }
  },

  // Удаление задачи
  async deleteTask({ id, token }) {
    try {
      console.log("Отправляемые данные в deleteTask:", { id, token });
      const response = await axios.delete(`${KANBAN_API_URL}${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data.tasks;
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error.response?.data || error.message);
      if (error.response?.status === 401) {
        throw new Error("Ошибка авторизации. Пожалуйста, войдите снова.");
      }
      throw new Error(error.response?.data?.error || error.message);
    }
  },

  // Синоним для совместимости
  async fetchTaskById({ id, token }) {
    return this.getTask({ id, token });
  }
};

// API для аутентификации
export const authAPI = {
  // Вход
  async login({ login, password }) {
    try {
      const response = await axios.post(
        `${USER_API_URL}/login`,
        { login, password },
        {
          headers: {
            "Content-Type": "",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || error.message);
    }
  },

  // Регистрация
  async register({ name, login, password }) {
    try {
      const response = await axios.post(
        USER_API_URL,
        { name, login, password },
        {
          headers: {
            "Content-Type": "",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || error.message);
    }
  }
};

// Экспорт по умолчанию для обратной совместимости
export default {
  kanbanAPI,
  authAPI
};