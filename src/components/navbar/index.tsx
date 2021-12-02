import style from "./navbar.module.scss";
import { CgTrending } from "react-icons/cg";
import { BiTv, BiLogOut } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import userImage from "../../assets/user-profile.jpg";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Trending",
		path: "/trending",
		icon: <CgTrending />,
		cName: "nav-text",
	},
	{
		title: "Watch",
		path: "/Watch",
		icon: <BiTv />,
		cName: "nav-text",
	},
	{
		title: "Friends",
		path: "/friends",
		icon: <BsFillPeopleFill />,
		cName: "nav-text",
	},
	{
		title: "Messages",
		path: "/messages",
		icon: <AiFillMessage />,
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
								<li key={index} className={style.navText}>
									<NavLink to={item.path} className={({ isActive }) => isActive ? style.isActive : style.noActive}>
										{item.icon} <span>{item.title}</span>
									</NavLink>
								</li>
							</ul>
						);
					})}
				</nav>
			</div>
			<div className={style.userInfo}>
					<img src={userImage} alt="userImage"/>
					<span className={style.userName}> Peter </span>
					<BiLogOut size="25px"/>
			</div>
		</div>
	);
}
