import { useNavigate } from "@reach/router";
import { navigate, A } from "hookrouter";
import { FormEvent, useState } from "react";
import { AuthProvider } from "../../contexts/auth";
import { api } from "../../service/api";
import style from "../register/register.module.scss";

export function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const show_pass = false;
    const [emailAlert, setEmailAlert] = useState(false);
    const [passAlert, setPassALert] = useState(false);

    const [usernameAlert, setUsernameAlert] = useState(false);

    async function register(event: FormEvent) {
        event.preventDefault();

        if (!email.trim()) {
            setEmailAlert(true);
            console.log(emailAlert);
        } else if (!password) {
            setPassALert(true);
            console.log(passAlert);
        } else {
            const user = await api.post("login", {
                email: email,
                password: password,
            });

            if (!user.data) {
                alert("Usuario não cadastrado");
            } else {
                navigate("/dashboard", true);
                localStorage.setItem("@user:token", user.data.token);
                localStorage.setItem("@user:id", user.data.id);
            }

            setEmail("");
            setPassword("");
        }
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
                            <p>
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
                                <span
                                    className={
                                        emailAlert ? style.errEmail : style.errNoActive
                                    }
                                >
                                    Email inválido ou inexistente
                                </span>
                            </p>
                        </span>
                    </li>
                    <li>
                        <span>
                            <p>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                                    alt="user"
                                />
                                <input
                                    name="username"
                                    id="username"
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                    placeholder="Username"
                                />
                                <span
                                    className={
                                        usernameAlert ? style.errEmail : style.errNoActive
                                    }
                                >
                                    Username inválido ou inexistente
                                </span>
                            </p>
                        </span>
                    </li>
                    <li>
                        <p>
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
                                    type={!show_pass ? "password" : "text"}
                                    placeholder="Senha"
                                />
                            </span>
                            <span
                                className={
                                    passAlert ? style.errPass : style.errNoActive
                                }
                            >
                                Senha inválida
                            </span>
                        </p>
                    </li>
                    <li>
                        <A href="/login">Login</A> {/* <a href="#">Forgot Password?</a> */}{" "}
                        <button type="submit" onClick={register}>
                            Sign In
                        </button>
                    </li>
                </ul>
            </form>
            <div className={style.loginBackgroundRigth}>
                {/* <div className={style.loginText}>
                    Start your
                    <span>Journey</span>
                </div> */}
            </div>
            {/* <div className={style.loginEnd}>
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
			</div> */}
        </div>
    );
}
