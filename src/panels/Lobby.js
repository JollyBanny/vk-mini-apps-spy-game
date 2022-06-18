import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import { setLobbyPlayers, setLobbyPlace } from "../redux/actions/lobby"

import { Panel, PanelHeader, PanelHeaderBack, FormItem, Input, Div, Button } from '@vkontakte/vkui';

const Lobby = props => {
	const dispatch = useDispatch();
	const { places } = useSelector(({ places }) => places);
	const { count } = useSelector(({ lobby }) => lobby);

	const [players, setPlayers] = useState([])

	const handleChange = (index, e) => {
		let players_ = [...players];
		players_.map((player) => player.id == index ? player.name = e.target.value : '')
		setPlayers(players_)
	}

	const onClickSubmit = (e) => {
		const players_ = [...players]
		const randPlace = Math.floor(Math.random() * places.length);
		const spyCount = Math.ceil(players.length / 8);

		for(let i = 0; i < spyCount; ++i) {
			let randSpy = Math.floor(Math.random() * players.length);
			while(players_[randSpy].role === "spy") {
				randSpy = Math.floor(Math.random() * players.length);
			}
			players_[randSpy].role = "spy";
		}

		dispatch(setLobbyPlayers(players));
		dispatch(setLobbyPlace(places[randPlace]));
		props.go(e)
	}

	useEffect(() => {
		let players_ = Array(count).fill({id: 1, name: "Игрок", role: "homie"})
		for(let i = 0; i < players_.length; ++i) {
			players_[i] = {
				id: i + 1,
				name: `Игрок ${i + 1}`,
				role: "homie"
			}
		}
		setPlayers(players_)
	}, [])

	return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Введите имена
		</PanelHeader>
		{
			players.map((player) => (
				<FormItem key={player.id} top={`Игрок ${player.id}`}>
					<Input type="text" value={player.name} onChange={e => handleChange(player.id, e)} />
				</FormItem>
			))
		}
	  	<Div style={{marginTop: "auto"}}>
			<Button stretched size="l" mode="commerce" onClick={e => onClickSubmit(e)} data-to="game">
				Запустить лобби
			</Button>
	  	</Div>
	</Panel>
)};

Lobby.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Lobby;
