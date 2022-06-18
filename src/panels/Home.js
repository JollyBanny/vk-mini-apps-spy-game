import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import { Panel, PanelHeader, Header, Button, Group, Card, Div, CardGrid  } from '@vkontakte/vkui';

const Home = ({ id, go }) => {
	const { places } = useSelector(({ places }) => places);

	return (
	<Panel id={id}>
		<PanelHeader>Spy Game</PanelHeader>

		<Group header={<Header mode="secondary">Локации</Header>}>
			<CardGrid size="m">
				{places.map((place) =>
				<Card key={place.id}>
					<div style={{height: 96, display: "flex", alignItems: "center", textAlign: "center"}}>
						<span style={{ margin: "0px auto"}}> {place.label} </span>
					</div>
				</Card>
				)}
			</CardGrid>
		</Group>

		<Div style={{marginTop: "auto"}}>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="lobby-setting">
				Настроить лобби
			</Button>
		</Div>
	</Panel>
)};

Home.propTypes = {
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

export default Home;

