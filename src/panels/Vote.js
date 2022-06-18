import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { editLobbyPlayers } from "../redux/actions/lobby"

import { Panel, PanelHeader, Header, Button, Group, Card, Div, CardGrid  } from '@vkontakte/vkui';

const Vote = ({ id, go }) => {
	const dispatch = useDispatch()
	const { players } = useSelector(({ lobby }) => lobby);
	const [warning, setWarning] = useState(false)
	const [selectedPlayer, setSelectedPlayer] = useState(null)

	const onClickSelectPlayer = (playerID) => {
		const selPlayer = players.find((player) => player.id == playerID)
		setSelectedPlayer(selPlayer)
	}

	const endVote = (e) => {
		if(selectedPlayer == null) {
			setWarning(true)
			return
		}

		const players_ = players.filter((player) => player.id !== selectedPlayer.id)
		dispatch(editLobbyPlayers(players_))

		if(selectedPlayer.role == "spy" || players.length == 3) {
			e.currentTarget.dataset.to = "final"
			go(e)
			return
		}

		go(e)
	}

	const warningStyle = {
		display: "flex",
		height: 48, alignItems: "center",
		justifyContent: "center",
		background: "#ff52527a",
    	border: "2px solid #ff6161cf"
	}

	return (
	<Panel id={id}>
		<PanelHeader>Голосование</PanelHeader>
		<Group header={<Header mode="primary">Выберите игрока на выбывание</Header>}>
			<CardGrid size="m">
				{players.map((player) =>
				<Card key={player.id} style={{background: selectedPlayer?.id == player.id && "#8adb97"}} onClick={() => onClickSelectPlayer(player.id)} >
					<div style={{height: 96, display: "flex", alignItems: "center", textAlign: "center"}}>
						<span style={{ margin: "0px auto"}}> { player.name } </span>
					</div>
				</Card>
				)}
			</CardGrid>
		</Group>
		{warning &&
		<Div>
			<Card style={warningStyle}>
				<span>Вы должны выбрать игрока на выбывание</span>
			</Card>
		</Div>
		}

		<Div style={{marginTop: "auto"}}>
			<Button stretched size="l" mode="secondary" onClick={endVote} data-to="game">
				Закончить голосование
			</Button>
		</Div>
	</Panel>
)};

Vote.propTypes = {
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

export default Vote;

