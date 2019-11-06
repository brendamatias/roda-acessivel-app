import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, File, Body, Top, Title, Div, Info } from './styles';

export default function Location({ data }) {
  const [color, setColor] = useState([]);

  function returnAccessibility(location) {
    let accessibility =
      parseInt(location.entry_note, 10) +
      parseInt(location.parking_note, 10) +
      parseInt(location.circulation_note, 10) +
      parseInt(location.bathroom_note, 10);

    accessibility /= 4;

    if (accessibility >= 4) {
      return '#2D9900';
    }
    if (accessibility > 2) {
      return '#EAD300';
    }
    if (accessibility >= 1) {
      return '#9E0000';
    }

    return '#C1C1C1';
  }

  useEffect(() => {
    setColor(returnAccessibility(data));
  }, [data]);

  return (
    <Container>
      <File
        source={{
          uri: data.image.url,
        }}
      />
      <Body>
        <Top>
          <Title>{data.name}</Title>
          <Info>{data.category.name}</Info>
        </Top>
        <Info>Acessível</Info>
      </Body>
      <Div>
        <Icon name="accessible" size={60} color={color} />
      </Div>
    </Container>
  );
}
