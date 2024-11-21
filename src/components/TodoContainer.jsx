import Addtodoform from "./Addtodoform";
import Addtofdolist from "./Addtodolist";
import { useState } from "react";

function TodoContainer({ teamStyles }) {
  const [playerArr, setPlayerArr] = useState([]);

  return (
    <div className="flex flex-col gap-8 flex-wrap mt-8">
      <div
        style={{
          backgroundColor: teamStyles.card,
          color: teamStyles.text,
        }}
        className="p-4 border rounded-md"
      >
        <Addtodoform playerArr={playerArr} setPlayerArr={setPlayerArr} />
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          color: teamStyles.bg,
        }}
        className="p-4 border rounded-md"
      >
        <Addtofdolist playerArr={playerArr} setPlayerArr={setPlayerArr} />
      </div>
    </div>
  );
}

export default TodoContainer;