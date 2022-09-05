import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);
  const [originalName, setName] =useState('Mohan')
  var {name, age} = props;
//
  return (
    <div>
      {/* Learning State */}
      <h1>This is State example</h1>
      <button onClick={() => setCount(count + 1)}>Click me to add 1</button>
      <button onClick={() => setCount(count - 1)}>Click me to reduce 1</button>
      <h1>{count}</h1>
      {/* Learning Props */}
      <h1>This is Props example</h1>
      <button onClick={() => setName(name)}>Click me to change name</button>
      <p>I am {originalName} of {age}</p>
    </div>
  );
};
export default FunctionalComponent;
