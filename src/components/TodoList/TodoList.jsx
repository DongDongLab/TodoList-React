import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: '125', text, status: 'active' }]);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id} status={item.status}>
            {item.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='type your todo'
          onChange={handleChange}
          value={text}
        />
        <button>Add</button>
      </form>
    </section>
  );
}
