import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ users }) {
    const [eUsername, setEUsername] = useState("");
    const [ePassword, setEPassword] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("");
    const [rUser, setRUser] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const teamStyles = {
        CSK: "bg-gradient-to-r from-yellow-500 to-blue-800 text-white",
        MI: "bg-gradient-to-r from-blue-500 to-yellow-700 text-white",
        RCB: "bg-gradient-to-r from-red-500 to-black text-white",
        KKR: "bg-gradient-to-r from-purple-600 to-yellow-300 text-white",
        SRH: "bg-gradient-to-r from-orange-500 to-black text-white",
        RR: "bg-gradient-to-r from-pink-500 to-blue-500 text-white",
        DC: "bg-gradient-to-r from-blue-600 to-red-500 text-white",
        PBKS: "bg-gradient-to-r from-red-500 to-yellow-500 text-white",
        LSG: "bg-gradient-to-r from-blue-400 to-blue-600 text-white", 
        GT: "bg-gradient-to-r from-blue-700 to-gray-700 text-white", 
    };

    function checkUser() {
        if (!selectedTeam) {
            alert("Please select a team before proceeding.");
            return;
        }

        const userFound = users.find(
            (user) => user.username === eUsername && user.password === ePassword
        );

        if (userFound) {
            setRUser(true);
            alert("Login successful! Redirecting...");
            navigate("/landing", {
                state: { user: eUsername, team: selectedTeam || userFound.team },
            });
        } else {
            setRUser(false);
        }
    }

    return (
        <div
            className={`min-h-screen flex items-center justify-center ${teamStyles[selectedTeam] || "bg-gray-100 text-white"
                }`}
        >
            <div
                className="bg-[#19398A] p-10 border rounded-md w-96 shadow-lg transition-all duration-300"
                style={{
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <h1 className="text-3xl font-medium">Login</h1>
                {rUser ? (
                    <p className="mt-2">To manage your team, log in below:</p>
                ) : (
                    <p className="text-red-600 mt-2">Invalid credentials or user not found!</p>
                )}
                <div className="flex flex-col gap-3 mt-4">
                    <input
                        value={eUsername}
                        onChange={(e) => setEUsername(e.target.value)}
                        type="text"
                        className="w-full border p-2 rounded-md text-black"
                        placeholder="Username"
                    />
                    <div className="relative">
                        <input
                            value={ePassword}
                            onChange={(e) => setEPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            className="w-full border p-2 rounded-md pr-10 text-black"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 text-gray-600"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    <select
                        className="w-full border p-2 rounded-md bg-[#19ab40fe] text-white"
                        onChange={(e) => setSelectedTeam(e.target.value)}
                    >
                        <option value="">Select Team</option>
                        {Object.keys(teamStyles).map((team) => (
                            <option key={team} value={team}>
                                {team}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={checkUser}
                        className={`w-full p-2 rounded-md ${selectedTeam
                                ? teamStyles[selectedTeam]
                                : "bg-gradient-to-r from-gray-400 to-gray-700 text-white"
                            }`}
                    >
                        Login
                    </button>
                    <p className="text-center">
                        New user?{" "}
                        <Link to="/signup" className="underline text-blue-600">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;