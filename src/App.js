import "./index.css"

import Firstday from "./components/Firstday";
import SecondDay from "./components/SecondDay";
import ThirdDay from "./components/ThirdDay";
import { useState } from "react";


function App() {
  const items = {
    dayO: "day1",
    dayS: "day2",
    dayT: "day3"
  }
  
  const [selectedItem, setSelectedItem] = useState(items.dayO)
  

  return (
    <div className="App">
      <div className="select_container">
        <div className="title">Виберіть день</div>
        <button onClick={() => setSelectedItem(items.dayO)}>Перший</button>
        <button onClick={() => setSelectedItem(items.dayS)}>Другий</button>
        <button onClick={() => setSelectedItem(items.dayT)}>Третій</button> 
      </div>
      <div>
        {selectedItem === items.dayO && <Firstday />}
        {selectedItem === items.dayS && <SecondDay />}
        {selectedItem === items.dayT && <ThirdDay />}
      </div>
    </div>
  );
}

export default App;
