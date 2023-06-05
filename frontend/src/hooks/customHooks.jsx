import { useQuery, useMutation, useQueryClient } from 'react-query';
const baseURL = 'http://localhost:3000/api/todos'
const headers = {
    'Content-Type': 'application/json',
  }

export const useGetTodos = () => {
  return useQuery('todos', async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  });
};


export const useCreateTodo = () => {
  const queryClient = useQueryClient();
 

  return useMutation((newTodoItem) => fetch(baseURL, {
    method: 'POST',
    headers,
    body: JSON.stringify(newTodoItem),
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};


export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((updatedTodo) => fetch(`${baseURL}/${updatedTodo._id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(updatedTodo),
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};


export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((id) => fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};



