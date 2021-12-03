import style from "./dashboard.module.scss";
import { BiSearch } from "react-icons/bi";
import { RiNotificationOffLine } from "react-icons/ri";
import userImage from "../../assets/user-profile.jpg";
import operatorImage from "../../assets/r6-operator-sledge.png";
import logoUbi from "../../assets/ubisoft-logo.png";

export const cardsItens = [
	{
		title: "Pubg",
		subtitle: "Augustinho plays",
		imgUrl:
			"https://www.pixel4k.com/wp-content/uploads/2018/12/pubg-4k-game-art_1545589457.jpg",
	},
	{
		title: "LOL TFT",
		subtitle: "JackCabuloso",
		imgUrl:
			"https://i.pinimg.com/originals/bf/f2/49/bff2497c130e8149d59fc7aed62f175d.png",
	},
	{
		title: "COD Warzone",
		subtitle: "Augustinho plays",
		imgUrl: "https://mymmanews.com/wp-content/uploads/2021/03/warzone-game.jpg",
	},
];

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
					<RiNotificationOffLine size="20px" />
					<img src={userImage} alt="userImage" />
				</div>
			</div>
			<div className={style.dashboardMain}>
				<ul>
					<li>
						<div className={style.gameCard}>
							<div className={style.gameCardInfo}>
								<img src={operatorImage} alt="SledgeOperator" />
								<div className={style.infos}>
									<ul>
										<li>
											<img src={logoUbi} />
										</li>

										<li>
											<span className={style.title}>
												Black Dragons VS FazeClan - Invictional
											</span>
										</li>

										<li>
											<span className={style.subtitle}>
												RainBow Six <span className={style.circle} />
												<img
													src="https://cdn-icons-png.flaticon.com/512/3022/3022546.png"
													alt="brazilFlag"
												/>
												Brazil
											</span>
										</li>

										<li>
											<button>Watch</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>

					<li>
						<div className={style.listCards}>
							{cardsItens.map((item, index) => {
								return (
									<ul key={index}>
										<li>
											<img src={item.imgUrl} alt={item.title} />
										</li>
										<li className={style.title}>{item.title}</li>

										<li className={style.subtitle}>{item.subtitle}</li>
									</ul>
								);
							})}
						</div>
					</li>
				</ul>
			</div>
			<div className={style.dashboardBottom}></div>
		</div>
	);
}
