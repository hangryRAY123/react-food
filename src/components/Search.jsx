import { useState } from 'react';

export const Search = ({ cb = Function.prototype }) => {
  const [value, stateValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search-field'
          placeholder='search'
          value={value}
          onKeyDown={handleKey}
          onChange={(e) => stateValue(e.target.value)}
          onFocus={() => stateValue('')}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
