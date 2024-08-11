import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'active' });
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
