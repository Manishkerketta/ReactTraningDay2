import { useEffect, useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Inside useEffect:", inputRef.current);
    inputRef.current.focus();
  }, []);

  return (  
    <div>
      <input ref={inputRef} />
      <input/>
    </div>
  );
}