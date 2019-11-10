import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  DetailsContent,
  Container,
  File,
  Section,
  Content,
  Div,
  Title,
  Info,
  Address,
  Accessibility,
  InfoAccessibility,
  SubmitButton,
} from './styles';

import Header from '~/components/Header';

export default function Details({ navigation }) {
  const location = navigation.getParam('item');

  const [color, setColor] = useState([]);
  const [accessibility, setAccessibility] = useState([]);

  const [entry, setEntry] = useState([]);
  const [parking, setParking] = useState([]);
  const [circulation, setCirculation] = useState([]);
  const [bathroom, setBathroom] = useState([]);

  function returnAccessibility(data) {
    let accessibilityValue =
      parseInt(data.entry_note, 10) +
      parseInt(data.parking_note, 10) +
      parseInt(data.circulation_note, 10) +
      parseInt(data.bathroom_note, 10);

    accessibilityValue /= 4;

    setAccessibility(accessibilityValue);
  }

  function returnParameters() {
    /* Acessível */
    if (accessibility >= 4) {
      return 'ACESSÍVEL';
    }

    /* Parcialmente Acessível */
    if (accessibility > 2) {
      return 'PARCIALMENTE ACESSÍVEL';
    }

    /* Não Acessível */
    if (accessibility > 0) {
      return 'NÃO ACESSÍVEL';
    }

    /* Não Avaliado */

    return 'NÃO AVALIADO';
  }

  function returnColor(available) {
    if (available >= 4) {
      return '#2D9900';
    }
    if (available > 2) {
      return '#EAD300';
    }
    if (available >= 1) {
      return '#9E0000';
    }

    return '#C1C1C1';
  }

  useEffect(() => {
    returnAccessibility(location);
    setColor(returnColor(accessibility));

    const entry_note = parseInt(location.entry_note, 10);
    const parking_note = parseInt(location.parking_note, 10);
    const circulation_note = parseInt(location.circulation_note, 10);
    const bathroom_note = parseInt(location.bathroom_note, 10);

    setEntry(returnColor(entry_note));
    setParking(returnColor(parking_note));
    setCirculation(returnColor(circulation_note));
    setBathroom(returnColor(bathroom_note));
  }, [accessibility, location]);

  function handleSubmit() {}

  return (
    <>
      <Header navigation={navigation} />
      <DetailsContent>
        <File
          source={{
            uri: location.image.url,
          }}
        />

        <Container>
          <Section>
            <Content>
              <Title>{location.name}</Title>
              <Info size={10} weight="bold">
                {returnParameters()}
              </Info>

              <Address>
                {location.address.street}, {location.address.number},{' '}
                {location.address.neighborhood}, {location.address.city} -{' '}
                {location.address.state} - {location.address.zip_code}, Brasil
              </Address>

              <Info color="#2D9900" weight="bold">
                ABERTO
              </Info>
              <Info size={10}>3,17 km de distância</Info>
            </Content>

            <Div>
              <Icon name="accessible" size={60} color={color} />
            </Div>
          </Section>

          <SubmitButton onPress={handleSubmit}>Avaliar</SubmitButton>

          <Accessibility>
            <InfoAccessibility>
              <Info padding="2px" weight="bold">
                Entrada{' '}
                <Icon name="fiber-manual-record" size={18} color={entry} />
              </Info>
              <Info padding="5px">
                Entrada facilitada para pessoas com dificuldade de locomoção.
              </Info>
            </InfoAccessibility>
            <InfoAccessibility>
              <Info padding="2px" weight="bold">
                Estacionamento{' '}
                <Icon name="fiber-manual-record" size={18} color={parking} />
              </Info>
              <Info padding="5px">
                Entrada facilitada para pessoas com dificuldade de locomoção.
              </Info>
            </InfoAccessibility>
            <InfoAccessibility>
              <Info padding="2px" weight="bold">
                Circulação{' '}
                <Icon
                  name="fiber-manual-record"
                  size={18}
                  color={circulation}
                />
              </Info>
              <Info padding="5px">
                Entrada facilitada para pessoas com dificuldade de locomoção.
              </Info>
            </InfoAccessibility>
            <InfoAccessibility>
              <Info padding="2px" weight="bold">
                Banheiro{' '}
                <Icon name="fiber-manual-record" size={18} color={bathroom} />
              </Info>
              <Info padding="5px">
                Entrada facilitada para pessoas com dificuldade de locomoção.
              </Info>
            </InfoAccessibility>
          </Accessibility>
        </Container>
      </DetailsContent>
    </>
  );
}
