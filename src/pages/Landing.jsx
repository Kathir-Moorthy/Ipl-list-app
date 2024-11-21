import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

const teamStyles = {
  CSK: { bg: "#FFF200", card: "#004BA0", text: "#1C1C1C" },
  MI: { bg: "#004BA0", card: "#FFD700", text: "#FFFFFF" },
  RCB: { bg: "#DA291C", card: "#000000", text: "#FFFFFF" },
  KKR: { bg: "#3B215D", card: "#FFCC00", text: "#FFFFFF" },
  SRH: { bg: "#FF6F00", card: "#000000", text: "#FFFFFF" },
  RR: { bg: "#2E8BC0", card: "#FFC0CB", text: "#1C1C1C" },
  DC: { bg: "#004BA0", card: "#DA291C", text: "#FFFFFF" },
  PBKS: { bg: "#DA291C", card: "#FFFF00", text: "#DA291C" },
  LSG: {bg: "#1D4ED8",card: "#60A5FA", text: "#FFFFFF"},
  GT: { bg: "#00509E", card: "#808080", text: "#FFFFFF" },
};

function Landing() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const team = state?.team || "Default";
  const styles = teamStyles[team] || { bg: "#EFEFEF", card: "#FFFFFF", text: "#000000" };

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen p-10"
      style={{ backgroundColor: styles.bg, color: styles.text }}
    >
      <div className="p-10 border rounded-md">
        <div className="flex justify-between items-center">
          <Header name={state?.user || "Player"} />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
        <div className="flex justify-between gap-5 my-5 flex-wrap">
          <Card
            bgcolor={styles.card}
            textColor={styles.text}
            title={"32°"}
            subtitle={"Jeddah, Saudi Arabia"}
          />
          <Card
            bgcolor={styles.card}
            textColor={styles.text}
            title={"November 23"}
            subtitle={"15:33:05"}
          />
          <Card
            bgcolor={styles.card}
            textColor={styles.text}
            title={"Made with dedication by"}
            subtitle={"Kathir"}
          />
        </div>
        <TodoContainer teamStyles={styles} />
      </div>
    </div>
  );
}

export default Landing;
