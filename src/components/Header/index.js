import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, Container, Text } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text> Roda Acessível</Text>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
}
