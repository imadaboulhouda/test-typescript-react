import React from "react";

import "./App.css";

import { useState } from "react";
interface Idata {
  t1: string;
  t2: string;
  t3: string;
  a1: string;
}
function App() {
  const [data, setData] = useState<Idata>({
    t1: "",
    t2: "",
    t3: "",
    a1: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <form>
        <input
          type={"text"}
          value={data.t1}
          placeholder="name"
          name="t1"
          onChange={handleChange}
        />
        <input
          type={"text"}
          value={data.t2}
          placeholder="name2"
          name="t2"
          onChange={handleChange}
        />
        <input
          type={"text"}
          value={data.t3}
          placeholder="name3"
          name="t3"
          onChange={handleChange}
        />
        <textarea name="a1" onChange={handleChange}>
          {data.a1}
        </textarea>
      </form>

      {JSON.stringify(data, null, 3)}
    </div>
  );
}

export default App;
