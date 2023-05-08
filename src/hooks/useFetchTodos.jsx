import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList } from '../redux/todoActions';

export const useFetchTodos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.status);
  const todoList = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return {
    isLoading,
    todoList,
  };
};
