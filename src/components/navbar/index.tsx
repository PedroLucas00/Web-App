import style from "./navbar.module.scss";
import { VscTelescope, VscHome, VscWatch } from "react-icons/vsc";
import { Link } from "@reach/router";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <VscHome />,
		cName: "nav-text",
	},
	{
		title: "Trending",
		path: "/trending",
		icon: <VscTelescope />,
		cName: "nav-text",
	},
	{
		title: "Match",
		path: "/match",
		icon: <VscWatch />,
		cName: "nav-text",
	},
];

export function NavBar() {
	return (
		<div className={style.navbarWrapper}>
			<div className={style.navLogo}>
				<span className={style.logo}> G </span>
				<span className={style.logoText}> GamerLife</span>
			</div>
			<div className={style.itensNavBar}>
				<nav>
					{SidebarData.map((item, index) => {
						return (
							<ul>
								<li key={index} className={item.cName}>
									<Link to={item.path} >{item.title}</Link>
								</li>
							</ul>
						);
					})}
				</nav>
			</div>
			<div className={style.userInfo}></div>
		</div>
	);
}
