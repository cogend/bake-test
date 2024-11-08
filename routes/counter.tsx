"use client";

import { useState } from "react";

// TODO: test action not working yet
// import { testAction } from "./action";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button
        onClick={async () => {
          const result = await testAction();
          console.log(result);
        }}
      >
        Test Action
      </button> */}
    </div>
  );
}
