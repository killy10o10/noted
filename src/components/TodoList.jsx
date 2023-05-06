/* eslint-disable react/prop-types */
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import uuid from 'react-uuid';

function TodoList(props) {
  const { status, list } = props.list;

  const renderTodo = () => {
    if (status === 'succeeded') {
      const todoListArr = list.list;
      if (todoListArr) {
        return todoListArr.map((listItem) => (
          <li key={uuid()}>
            <span className={listItem.priority}>{listItem.description}</span>{' '}
            <AiTwotoneThunderbolt />
          </li>
        ));
      } else {
        return <p className="text-center">no List item here. Add a todo</p>;
      }
    }
  };
  return (
    <>
      <div className="todo-list-container">
        <ul className="todo-list">{renderTodo()}</ul>
      </div>
    </>
  );
}

export default TodoList;
