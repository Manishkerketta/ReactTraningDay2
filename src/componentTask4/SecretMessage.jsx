import { useState } from 'react';

export default function SecretMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <input type="checkbox" onChange={() => setShow(!show)} />
        Show Secret Message
      </p>

      {show && <p>I am learning react</p>}
    </div>
  );
}