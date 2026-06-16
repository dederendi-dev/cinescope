import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Isi semua field");
      return;
    }

    const userData = {
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Register berhasil!");

    navigate("/");
  };

  return (
    <div className="login-page">

      <form className="login-box" onSubmit={handleRegister}>

        <h1>CineScope</h1>

        <p>Create your account</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

        <span className="auth-link">
          Sudah punya akun? <Link to="/">Login</Link>
        </span>

      </form>

    </div>
  );
}

export default Register;