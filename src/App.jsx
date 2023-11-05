import { useState } from "react";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";

const App = () => {
  const [isSingle, setIsSingle] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [data, setData] = useState([
    {
      title: "title one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?"
    },
    {
      title: "title two",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?"
    },
    {
      title: "title three",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?"
    }
  ]);

  const handleStatus = () => {
    setIsSingle(!isSingle);
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      <h1>Hello</h1>
      {isSingle ? <p>saya single</p> : <p>saya sudah menikah</p>}
      <button onClick={handleStatus}>change status</button>

      <button onClick={handleSidebar}>{showSidebar ? "x" : "|||"}</button>

      <Header />
      {showSidebar ? <Sidebar /> : null}
    </div>
  );
};

export default App;