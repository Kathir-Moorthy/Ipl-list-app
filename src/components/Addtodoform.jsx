import { useState } from "react";

function Addtodoform({ playerArr, setPlayerArr }) {
    const [newPlayer, setNewPlayer] = useState("");

    const handleChange = (e) => {
        setNewPlayer(e.target.value);
    };

    const addPlayer = () => {
        if (newPlayer.trim()) {
            setPlayerArr([...playerArr, { id: playerArr.length + 1, player: newPlayer }]);
            setNewPlayer("");
        }
    };

    return (
        <div className="flex-grow p-5 bg-gray-100 border rounded-md">
            <h1 className="text-2xl text-black font-medium">Add Players</h1>
            <div className="flex gap-2 mt-3">
                <input
                    value={newPlayer}
                    onChange={handleChange}
                    type="text"
                    className="border border-black rounded-md p-2 flex-grow text-black"
                    placeholder="Enter player name"
                />
                <button
                    onClick={addPlayer}
                    className="bg-black text-white px-4 py-2 rounded-md"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default Addtodoform;