import  { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
 
  const handleAddTodo = () => {
    if (!newTodo.trim()) return; 
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  };

 
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 
  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setNewTodo(todo.text);
  };

   
  const handleUpdateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo
      )
    );
    setIsEditing(false);
    setNewTodo('');
    setCurrentTodo({});
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={isEditing ? handleUpdateTodo : handleAddTodo}>
        {isEditing ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
