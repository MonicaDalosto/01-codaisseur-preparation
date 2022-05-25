import { useState } from 'react';

const AddPlayerForm = ({ newName, setNewName, addNewPlayer }) => {
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{' '}
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={event => setNewName(event.target.value)}
        />
        <button
          onClick={() => {
            addNewPlayer(newName);
            setNewName('');
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};

export default AddPlayerForm;
