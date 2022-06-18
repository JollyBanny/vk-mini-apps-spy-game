import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setLobbyPlayersCount } from "../redux/actions/lobby"
import { setPlaces } from "../redux/actions/places"

import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, FormItem, Input, Div, Button, Card, Group, Header } from '@vkontakte/vkui';

const LobbySetting = props => {
	const [countPlayers, setCountPlayers] = useState(3)
	const [customPlaces, setCustomPlaces] = useState([])
	const [warning, setWarning] = useState(null)

    const dispatch = useDispatch()
	const { places } = useSelector(({ places }) => places);

	const handleChangeCountPlayers = (e) => {
		setCountPlayers(e.target.value)
	}

    const handleChangePlaceLabel = (placeID, e) => {
        let places_ = [...customPlaces];
		places_.map((place) => place.id == placeID ? place.label = e.target.value : '')
		setCustomPlaces(places_)
    }

    const onClickRemovePlace = (placeID) => {
        const places_ = [...customPlaces].filter((place) => place.id !== placeID)
        setCustomPlaces(places_)
    }

    const onClickAddPlace = () => {
        let places_ = [...customPlaces]
		const newPlace = {
			id: customPlaces.length + 1,
			label: `Место ${customPlaces.length + 1}`,
		}
		places_.push(newPlace);
		setCustomPlaces(places_)
    }

    const onClickSubmit = (e) => {
		if(countPlayers < 3) {
			setWarning("В игре должно быть не менее 3 человек")
			return
		}
        if(customPlaces.length < 2) {
			setWarning("Укажите хотя бы 2 места, а то скучно как-то")
			return
		}
        dispatch(setLobbyPlayersCount(countPlayers))
        dispatch(setPlaces(customPlaces))
		props.go(e)
	}

    useEffect(() => {
        setCustomPlaces(places)
    }, [])

    const cardStyle = {
		display: "flex",
		height: 48, alignItems: "center",
		justifyContent: "center",
		background: "#ff52527a",
    	border: "2px solid #ff6161cf"
	}

    return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Настройка лобби
		</PanelHeader>
        {warning &&
			<Div>
				<Card style={cardStyle}>
					<span>{warning}</span>
				</Card>
			</Div>

		}
        <FormItem top="Количество игроков">
            <Input type="text" value={countPlayers} onChange={handleChangeCountPlayers} />
        </FormItem>
        <Group header={
            <Div style={{display: "flex", paddingLeft: 0, paddingTop: 0, paddingBottom: 0, justifyContent: "space-between"}}>
                <Header>Места</Header>
                <Button size='s' mode='primary' onClick={onClickAddPlace}>+</Button>
            </Div>
        }>
            {
            customPlaces.map((place) => (
                <FormItem key={place.id} removable onRemove={() => onClickRemovePlace(place.id)}>
                    <Input type="text" value={place.label} onChange={e => handleChangePlaceLabel(place.id, e)} />
                </FormItem>
            ))
            }
        </Group>
	  	<Div style={{marginTop: "auto"}}>
			<Button stretched size="l" mode="secondary" onClick={onClickSubmit} data-to="lobby">
				Далее
			</Button>
	  	</Div>
	</Panel>
)};

LobbySetting.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default LobbySetting;
