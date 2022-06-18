import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import { Panel, PanelHeader, Header, Button, Group, Card, Div, CardGrid, Input, Title  } from '@vkontakte/vkui';

const Final = ({ id, go }) => {
	const { history, players } = useSelector(({ lobby }) => lobby);

	const [spyWin, setSpyWin] = useState(false)

	useEffect(() => {
		const result = players.find((player) => player.role == "spy")
		if(result) {
			setSpyWin(true)
		}
		let a =	players.map(player => player.id)
		a.in
	},[])

	const winStyle = {
		display: "flex",
		height: 48, alignItems: "center",
		justifyContent: "center",
		background: `${spyWin ? "#ff52527a" : "#89e2778e"}`,
    	border: `2px solid ${spyWin ? "#ff6161cf" : "#1a7a078e"}`
	}
	return (
	<Panel id={id}>
		<PanelHeader>Spy Game</PanelHeader>

		<Div>
			<Card style={winStyle}>
				<span>Шпион {spyWin ? "выиграл" : "проиграл"}</span>
			</Card>
		</Div>
		<Group header={<Header mode="secondary">Игроки</Header>}>
			{
				history.map((player) => (
					<Div key={player.id} style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
						<Title level='3'>{`${player.name} (${player.role == "spy" ? "Шпион" : "Свой"})`}</Title>
						<Title level='3'>{`${players.map(player_ => player_.id).includes(player.id) ? "Остался" : "Выбыл"}`}</Title>
					</Div>
				))
			}
		</Group>

		<Div style={{marginTop: "auto"}}>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
				Вернуться в меню
			</Button>
		</Div>
	</Panel>
)};

Final.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Final;

