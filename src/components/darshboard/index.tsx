import style from "./dashboard.module.scss";
import { BiSearch } from "react-icons/bi";
import { RiNotificationOffLine } from "react-icons/ri";
import userImage from "../../assets/user-profile.jpg";
import operatorImage from "../../assets/r6-operator-sledge.png";
import logoUbi from "../../assets/ubisoft-logo.png";
import Bd from "../../assets/Black-Dragon.png";
import Fc from "../../assets/Faze-Clan.png";
import { useState } from "react";
import Select from "react-dropdown-select";

export const options = [
	{
		id: 1,
		label: "Popular",
		value: "popular",
	},
	{
		id: 2,
		label: "New",
		value: "new",
	},
	{
		id: 3,
		label: "Most-views",
		value: "mostViews",
	},
];

export const eSportsOptions = [
	{
		id: 1,
		label: "Match League of Legends",
		value: "league_of_legends",
	},
	{
		id: 2,
		label: "Match Rainbow Six",
		value: "rainbow_six",
	},
	{
		id: 3,
		label: "Match CS:GO",
		value: "cs_go",
	},
];

export const matchOptions = [
	{
		id: 1,
		label: "Today",
		value: "today",
	},
	{
		id: 2,
		label: "Week",
		value: "week",
	},
	{
		id: 3,
		label: "Month",
		value: "month",
	},
];

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

export const matchList = [
	{
		id: 1,
		hour: "10:30",
		time1: "Rogue",
		time2: "Black Dragon",
	},
	{
		id: 2,
		hour: "15:10",
		time1: "Oxygen",
		time2: "Vitality",
	},
	{
		id: 3,
		hour: "20:00",
		time1: "Team One",
		time2: "FaZe",
	},
];

export function Darshboard() {
	const [option, setOptions] = useState();
	const [matchOption, setMatchOptions] = useState();
	const [eSportOption, setESportOptions] = useState();

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
				<div className={style.dashboardCards}>
					<ul>
						<li>
							<div className={style.gameCard}>
								<div className={style.gameCardInfo}>
									<img
										className={style.operatorImage}
										src={operatorImage}
										alt="SledgeOperator"
									/>
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
							<div className={style.dropdownWrapper}>
								<span className={style.text}>News</span>
								<Select
									className={style.dropdown}
									options={options}
									onChange={() => setOptions(option)}
								/>
							</div>
						</li>
						<li>
							<div className={style.listCards}>
								<ul>
									{cardsItens.map((item, index) => {
										return (
											<li key={index}>
												<img src={item.imgUrl} alt={item.title} />
												<p>
													<span className={style.title}>{item.title}</span>
												</p>
												<p>
													<span className={style.subtitle}>
														{item.subtitle}
													</span>
												</p>
											</li>
										);
									})}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className={style.matchBox}>
					<Select
						className={style.dropdownTop}
						options={eSportsOptions}
						onChange={() => setESportOptions(eSportOption)}
					/>
					<div className={style.matchScoreboard}>
						<ul>
							<li>
								<span className={style.title}>Rainbow Six</span>
								<br />
								<span className={style.subtitle}>
									Group stage - Matchday 1 of 5
								</span>
								<span className={style.liveBtn}>Live</span>
							</li>
							<li className={style.score}>
								<span>
									<p>
										<img src={Bd} />
									</p>
									Black Dragons
								</span>
								<span className={style.scoreboard}>
									<p>2</p> : <p>0</p>
								</span>
								<span>
									<p>
										<img src={Fc} />
									</p>
									<br />
									FazeClan
								</span>
							</li>
							<li>
								<button className={style.watchBtn}>Watch</button>
								<button className={style.betBtn}>Bet</button>
							</li>
						</ul>
					</div>
					<div className={style.matchList}>
						<span className={style.top}>
							Next match
							<Select
								className={style.dropdown}
								options={matchOptions}
								onChange={() => setMatchOptions(matchOption)}
							/>
						</span>
						<span className={style.list}>
							{matchList.map((item, index) => {
								return (
									<ul>
										<li key={index}>
											<span className={style.hour}>{item.hour}</span>
											<span className={style.circle} />
											<span className={style.time1}>
												{item.time1} vs {item.time2}
											</span>
										</li>
									</ul>
								);
							})}
						</span>
					</div>
				</div>
			</div>
			<div className={style.dashboardBottom}></div>
		</div>
	);
}
