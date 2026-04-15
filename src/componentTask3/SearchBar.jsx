import React, { useState } from 'react'

const SearchBar = () => {
    const [text, setText] = useState("");
  return (
    <div>
      <input 
        onChange={(e) => setText(e.target.value)} 
      />
      <p >
        Converted To UpperCase: {text.toUpperCase()}
      </p>
    </div>
  )
}

export default SearchBar