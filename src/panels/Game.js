import bridge from '@vkontakte/vk-bridge';

import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import PropTypes from 'prop-types';

import { Panel, PanelHeader, Title, Div, Button } from '@vkontakte/vkui';
import { Icon24ClockOutline } from '@vkontakte/icons';

const Game = props => {
	const { players, history, place } = useSelector(({ lobby }) => lobby);

	let flashlightInterval;
	const [remaningTime, setRemaningTime] = useState(60);
	const [isCounting, setIsCounting] = useState(false);

	const [gameMode, setGameMode] = useState(false);
	const [showToggle, setShowToggle] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState({pos: 0, player: players[0]});

	const onClickChangePlayer = () => {
		const nextPlayer = {
			pos: currentPlayer.pos + 1,
			player: players[currentPlayer.pos + 1]
		}
		setShowToggle(false);
		setCurrentPlayer(nextPlayer)
	}

	const startGame = () => {
		startTimer();
		setGameMode(true)
	}

	const startVote = (e) => {
		bridge.send('VKWebAppFlashSetLevel', {level: 0});
		clearInterval(flashlightInterval)
		props.go(e);
	}

	const startTimer = () => {
		setIsCounting(true)
	}

	useEffect(() => {
		if(players.length !== history.length) {
			startGame()
		}
	}, [])

	useEffect(() => {
		let interval = setInterval(() => {
			isCounting &&
				setRemaningTime(remaningTime - 1)
			},1000)

		if(remaningTime === 0) {
			clearInterval(interval)
			flashlightInterval = setInterval(async () => {
					let flashInfo = await bridge.send("VKWebAppFlashGetInfo").then((data) => data);
					bridge.send('VKWebAppFlashSetLevel', {level: flashInfo?.level ? 0 : 1});
			}, 1000)
		}
        return () => {clearInterval(interval)};
    },[isCounting, remaningTime]);

	return (
	<Panel id={props.id}>
		<PanelHeader> {gameMode ? "Обсуждение" : "Раздача ролей"} </PanelHeader>
		{
			gameMode ?
			(
			<React.Fragment>
				<Div>
					<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "40px"}}>
						<Icon24ClockOutline width={64} height={64} />
						<span style={{fontSize: "96px"}}>{ remaningTime }</span>
					</div>
				</Div>
				{
				remaningTime == 0 &&
				<Div style={{marginTop: "auto"}}>
					<Button stretched size="l" mode="primary" onClick={startVote} data-to="vote">
						Перейти к голосованию
					</Button>
				</Div>
				}
			</React.Fragment>
			) :
			(
			<React.Fragment>
				<Div style={{ marginTop: "20px" }} onClick={() => setShowToggle(true)}>
					<div
					style={{
						backgroundImage:
						"linear-gradient(135deg, #FD8229 0%, #A73ED9 100%)",
						height: "70vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						paddingBottom: "6px",
						borderRadius: 12,
						gap: 10
					}}
					>
						{showToggle ? (
						<React.Fragment>
							<Title level='1'>{currentPlayer.player.role == "spy" ? "Шпион" : "Свой"}</Title>
							<Title level='2'>{currentPlayer.player.role !== "spy" && place.label}</Title>
						</React.Fragment>
						):
						<Title level='2'>Нажми на меня и узнай роль</Title>
						}
					</div>
				</Div>
				<Div style={{marginTop: "auto"}}>
					{
						currentPlayer.pos == players.length - 1 ?
						(
							<Button stretched size="l" mode="commerce" onClick={() => startGame()}>
								Начать игру!
							</Button>
						) :
						(
						<Button stretched size="l" mode="primary" onClick={() => onClickChangePlayer()}>
							Следующий игрок
						</Button>
						)
					}
				</Div>
			</React.Fragment>
			)
		}
	</Panel>
)};

Game.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Game;
