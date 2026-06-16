import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Akun belum terdaftar");
      return;
    }

    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      alert("Email atau password salah");
      return;
    }

    const tokenData = {
      token: "fake-jwt-token",
      expiredAt: Date.now() + 5 * 60 * 1000,
    };

    localStorage.setItem("auth", JSON.stringify(tokenData));

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>CineScope</h1>
        <p>Movie Dashboard</p>

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
          Login
        </button>
        <span className="auth-link">
          Belum punya akun? <Link to="/register">Register</Link>
        </span>
        <div
          className="developer-info"
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontSize: "0.75rem",
            lineHeight: "1.3",
            opacity: 0.85,
          }}
        >
          <p style={{ margin: "4px 0" }}>Developed by</p>
          <p style={{ margin: "2px 0" }}>
            <strong>Dede Rendi Pauji</strong> (2403040040)
          </p>
          <p style={{ margin: "2px 0" }}>
            <strong>Destra Gustiana Putra</strong> (2403040004)
          </p>
          <p style={{ margin: "6px 0 0 0" }}>
            Pemrograman Web Lanjut - Kelas A2
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;