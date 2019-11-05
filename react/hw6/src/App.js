import React, { useState } from "react";
import InputNumber from "./InputNumber";

function App() {
  const [value, setValue] = useState("aaa");
  return (
    <div>
      <InputNumber
        value={value}
        onChange={e => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      />

      <InputNumber
        defaultValue={value}
        onChange={e => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;
