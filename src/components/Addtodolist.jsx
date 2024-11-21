import Todoitem from "./Todoitem";
import { jsPDF } from "jspdf";

function Addtofdolist({ playerArr, setPlayerArr }) {
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Full Squad List", 10, 10);

        playerArr.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.player}`, 10, 20 + index * 10);
        });

        doc.save("SquadList.pdf");
    };

    return (
        <div className="flex-grow p-5 bg-gray-100 border rounded-md">
            <h1 className="text-2xl font-medium">Squad List</h1>
            {playerArr.length === 0 ? (
                <p>No players added yet.</p>
            ) : (
                playerArr.map((item, index) => (
                    <Todoitem
                        key={item.id}
                        id={item.id}
                        player={item.player}
                        index={index}
                        playerArr={playerArr}
                        setPlayerArr={setPlayerArr}
                    />
                ))
            )}
            {playerArr.length > 0 && (
                <button
                    onClick={downloadPDF}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Download Squad List
                </button>
            )}
        </div>
    );
}

export default Addtofdolist;