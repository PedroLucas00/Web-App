import style from "../login/login.module.scss";

export function Login() {
	function buttonClick() {
		window.location.href="/dashboard";
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
							<input name="login" placeholder="Login" />
						</span>
					</li>
					<li>
						<span>
							<img
								src="https://cdn-icons.flaticon.com/png/512/2901/premium/2901185.png?token=exp=1638293312~hmac=0880a8aab8797eedaa02ea523a2c2f0c"
								alt="password"
							/>
							<input name="senha" placeholder="Senha" />
						</span>
					</li>
					<li>
						<a href="#">Register</a> <a href="#">Forgot Password?</a>{" "}
						<button type="submit" >Sign In</button>
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
