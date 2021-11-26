import style from "../login/login.module.scss";

export function Login() {
	return (
		<div className={style.loginWrapper}>
			<form className={style.loginForm}>
				<ul>
					<li>
						<input name="login" placeholder="Login" />
					</li>
					<li>
						<input name="senha" placeholder="Senha" />
					</li>
					<li>
						<a href="#">Register</a> <a href="#">Forgot Password?</a> <button type="submit">Sign In</button>
					</li>
				</ul>
			</form>
			<div className={style.loginBackgroundRigth}>
				<div className={style.loginText}>
					Start your 
					<h1>Journey</h1>
				</div>
			</div>
		</div>
	);
}
