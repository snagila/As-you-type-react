import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    const str = e.target.value; // const str = e.target.value;
    setName(str);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setList([...list, name]);
  };
  console.log(list);
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
      >
        <div className="display">{name}</div>
        <div className="form" onSubmit={handleOnSubmit}>
          <form action="">
            <input type="text" onChange={handleOnChange} />
            <button>Add User</button>
          </form>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
