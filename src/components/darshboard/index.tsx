import style from "./dashboard.module.scss";
import { BiSearch } from "react-icons/bi";
import { RiNotificationOffLine } from "react-icons/ri";
import userImage from "../../assets/user-profile.jpg";
import operatorImage from "../../assets/r6-operator-lion.jpg";
import logoUbi from "../../assets/ubisoft-logo.png";

export function Darshboard() {
	return (
		<div className={style.dashboardWrapper}>
			<div className={style.dashboardTop}>
				<div className={style.searchBox}>
					<span>
						<BiSearch />
						<input name="search" placeholder="Find a match..." />
					</span>
				</div>
				<div className={style.userImage}>
					<RiNotificationOffLine size="25px" />
					<img src={userImage} alt="userImage" />
				</div>
			</div>
			<div className={style.dashboardMain}>
				<div className={style.gameCard}>
					<div className={style.gameCardInfo}>
						<img src={operatorImage} alt="lionOperator" />
						<span className={style.title}>
							<img src={logoUbi} />
              Black Dragons VS FazeClan
						</span>
						<span className={style.subtitle}>
              RainBow Six - 
            </span>
						<button>Watch</button>
					</div>
				</div>
			</div>
			<div className={style.dashboardBottom}></div>
		</div>
	);
}
