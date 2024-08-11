import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: '125', text, status: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='type your todo'
        onChange={handleChange}
        value={text}
      />
      <button>Add</button>
    </form>
  );
}
