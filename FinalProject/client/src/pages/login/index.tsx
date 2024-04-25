import { FormEvent, useEffect, useState } from "react";
import logo from "../../images/logo2.png";
import services from "../../services";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/music");
  }, [navigate]);

  const submit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await services.login(username, password);
      navigate("/music");
    } catch (ex) {      
      alert("Invalid login");
    }
  };

  return (
    <div
      className="container-sm mt-5 text-center"
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <img src={logo} alt="Logo" width={100} className="mb-3" />
      <h1 className="mb-3">Please sign in</h1>
      <form onSubmit={submit}>
        <div className="form-group mb-3">
         
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
         
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Sign in
        </button>
      </form>
    </div>
  );
}
