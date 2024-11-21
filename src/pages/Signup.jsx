import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup({ users, setUsers }) {
    const [eUsername, setEUsername] = useState("");
    const [ePassword, setEPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function addUsers() {
        if (!eUsername || !ePassword || !confirmPassword) {
            alert("All fields are required!");
            return;
        }
        if (ePassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (users.some((user) => user.username === eUsername)) {
            alert("Username already exists!");
            return;
        }

        setUsers([...users, { username: eUsername, password: ePassword }]);
        alert("Signup successful! Redirecting to Login...");
        navigate("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-white">
            <div
                className="bg-[#19398A] p-10 border rounded-md w-96 shadow-lg transition-all duration-300"
                style={{
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <h1 className="text-3xl font-medium">Sign Up</h1>
                <p className="mt-2">Create your account to manage your team.</p>
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
                    <div className="relative">
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            className="w-full border p-2 rounded-md pr-10 text-black"
                            placeholder="Confirm Password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 text-gray-600"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    <button
                        onClick={addUsers}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md"
                    >
                        Sign Up
                    </button>
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/" className="underline text-blue-300">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;