import React, { useState, useEffect } from "react";
import axios from "axios";

// import { GROUPS_API } from '../utils/api';

const teamlist_url = [
	"http://site.api.espn.com/apis",
	"http://site.api.espn.com/apis",
	"http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams",
	"http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
	"http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams",
	"http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams",
	"http://site.api.espn.com/apis",
];

const TeamStep = ({ selectedGroup, onSelectTeam, onHandleNext }) => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		if (selectedGroup) {
			axios
				.get(teamlist_url[selectedGroup.id - 1])
				.then((res) => {
					setTeams(res.data.sports[0].leagues[0].teams);
					console.log(res.data.sports[0].leagues[0].teams);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [selectedGroup]);

	const handleSelectTeam = (team) => {
		onHandleNext();
		onSelectTeam(team);
	};

	return (
		<div>
			<h1>{selectedGroup.name}</h1>
			{teams.map((team) => (
				<img
					style={{
						width: "100px",
						height: "100px",
						padding: "10px",
						borderRadius: "50%",
						// border: '1px solid #000',
						marginRight: "10px",
						cursor: "pointer",
						// backgroundColor: 'black',
					}}
					key={team.id}
					src={team.team.logos[0].href}
					onClick={() => handleSelectTeam(team)}
					alt={team.displayName}
				/>
			))}
		</div>
	);
};

export default TeamStep;
