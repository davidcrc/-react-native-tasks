import {API_URL} from "@env"

const API = API_URL

export const getTasks = async () => {
  const res = await fetch(API)
  return await res.json()
}

export const getTask = async (taskId) => {
  const res = await fetch(`${API}/${taskId}`);
  return await res.json();
};

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(newTask)
  })

  return await res.json();
}

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateTask = async (taskId, updatedTask) => {
  console.log(taskId, updatedTask)
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  return res;
};