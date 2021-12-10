import { useNavigate } from "@reach/router";
import { FormEvent, useState } from "react";
import { AuthProvider } from "../../contexts/auth";
import { api } from "../../service/api";
import style from "../login/login.module.scss";

export function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function login(event: FormEvent) {
		event.preventDefault();

		if (!email.trim()) {
			alert("Preencha o email");
		} else if (!password) {
			alert("Preencha sua senha");
		}

		const user = await api.post("login", {
			email: email,
      password: password
		});

		if (!user.data) {
			alert("Usuario não cadastrado");
		} else {
			navigate('/dashboard');
			localStorage.setItem("@user:id", user.data.id);
		}

		setEmail("");
		setPassword("");
	}

	return (
		<div className={style.loginWrapper}>
			<img
				className={style.logoIcon}
				src="https://cdn-icons-png.flaticon.com/512/686/686589.png"
				alt="gamerLogo"
			/>
			<form action="dashboard" className={style.loginForm}>
				<ul>
					<li>
						<span>
							<img
								src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
								alt="user"
							/>
							<input
								name="email"
								id="email"
								onChange={(event) => setEmail(event.target.value)}
								value={email}
								placeholder="Email"
							/>
						</span>
					</li>
					<li>
						<span>
							<img
								src="https://cdn-icons.flaticon.com/png/512/2901/premium/2901185.png?token=exp=1638293312~hmac=0880a8aab8797eedaa02ea523a2c2f0c"
								alt="password"
							/>
							<input
								name="senha"
								id="senha"
								onChange={(event) => setPassword(event.target.value)}
								value={password}
								placeholder="Senha"
							/>
						</span>
					</li>
					<li>
						<a href="#">Register</a> <a href="#">Forgot Password?</a>{" "}
						<button type="submit" onClick={login}>
							Sign In
						</button>
					</li>
				</ul>
			</form>
			<div className={style.loginBackgroundRigth}>
				<div className={style.loginText}>
					Start your
					<span>Journey</span>
				</div>
			</div>
			<div className={style.loginEnd}>
				<ul>
					<li>
						Login with
						<span>
							<a href="#">facebook</a>
							<a href="#">twitter</a>
							<a href="#">google</a>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
