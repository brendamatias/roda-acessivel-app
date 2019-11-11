import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import {
  Container,
  Title,
  Body,
  Text,
  Div,
  Note,
  Label,
  SubmitButton,
} from './styles';

import api from '~/services/api';

import Header from '~/components/Header';
import Loading from '~/components/Loading';

export default function Evaluation({ navigation }) {
  const [loading, setLoading] = useState(true);
  const { id } = navigation.getParam('location');

  const [entry, setEntry] = useState();
  const [parking, setParking] = useState();
  const [circulation, setCirculation] = useState();
  const [bathroom, setBathroom] = useState();

  async function handleSubmit() {
    if (!entry || !parking || !circulation || !bathroom) {
      showMessage({
        type: 'danger',
        message: 'Necessário preenchimento de todas as avaliações',
      });
    } else {
      setLoading(true);

      const response = await api.post('evaluations', {
        entry_note: entry,
        parking_note: parking,
        circulation_note: circulation,
        bathroom_note: bathroom,
        location_id: id,
      });

      setLoading(false);

      const { success } = response.data;

      showMessage({
        type: 'success',
        message: success || 'Avaliação registrada com sucesso!',
      });

      setTimeout(() => {
        navigation.navigate('Dashboard');
      }, 1000);
    }
  }

  return (
    <>
      <Header navigation={navigation} />
      <Container>
        <FlashMessage position="top" />
        <Title>Avaliação</Title>
        <Body>
          <Note>
            <Text>Acessibilidade de entrada</Text>

            <Div>
              <RadioButton
                value="1"
                status={entry === '1' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEntry('1');
                }}
              />
              <Label>1</Label>

              <RadioButton
                value="2"
                status={entry === '2' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEntry('2');
                }}
              />
              <Label>2</Label>

              <RadioButton
                value="3"
                status={entry === '3' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEntry('3');
                }}
              />
              <Label>3</Label>

              <RadioButton
                value="4"
                status={entry === '4' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEntry('4');
                }}
              />
              <Label>4</Label>

              <RadioButton
                value="5"
                status={entry === '5' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEntry('5');
                }}
              />
              <Label>5</Label>
            </Div>
          </Note>

          <Note>
            <Text>Acessibilidade estacionamento e/ou manobrista</Text>

            <Div>
              <RadioButton
                value="1"
                status={parking === '1' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setParking('1');
                }}
              />
              <Label>1</Label>

              <RadioButton
                value="2"
                status={parking === '2' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setParking('2');
                }}
              />
              <Label>2</Label>

              <RadioButton
                value="3"
                status={parking === '3' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setParking('3');
                }}
              />
              <Label>3</Label>

              <RadioButton
                value="4"
                status={parking === '4' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setParking('4');
                }}
              />
              <Label>4</Label>

              <RadioButton
                value="5"
                status={parking === '5' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setParking('5');
                }}
              />
              <Label>5</Label>
            </Div>
          </Note>

          <Note>
            <Text>Acessibilidade circulação interna</Text>

            <Div>
              <RadioButton
                value="1"
                status={circulation === '1' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCirculation('1');
                }}
              />
              <Label>1</Label>

              <RadioButton
                value="2"
                status={circulation === '2' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCirculation('2');
                }}
              />
              <Label>2</Label>

              <RadioButton
                value="3"
                status={circulation === '3' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCirculation('3');
                }}
              />
              <Label>3</Label>

              <RadioButton
                value="4"
                status={circulation === '4' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCirculation('4');
                }}
              />
              <Label>4</Label>

              <RadioButton
                value="5"
                status={circulation === '5' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCirculation('5');
                }}
              />
              <Label>5</Label>
            </Div>
          </Note>

          <Note>
            <Text>Acessibilidade do banheiro</Text>

            <Div>
              <RadioButton
                value="1"
                status={bathroom === '1' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBathroom('1');
                }}
              />
              <Label>1</Label>

              <RadioButton
                value="2"
                status={bathroom === '2' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBathroom('2');
                }}
              />
              <Label>2</Label>

              <RadioButton
                value="3"
                status={bathroom === '3' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBathroom('3');
                }}
              />
              <Label>3</Label>

              <RadioButton
                value="4"
                status={bathroom === '4' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBathroom('4');
                }}
              />
              <Label>4</Label>

              <RadioButton
                value="5"
                status={bathroom === '5' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBathroom('5');
                }}
              />
              <Label>5</Label>
            </Div>
          </Note>
        </Body>

        {loading ? (
          <SubmitButton onPress={handleSubmit}>Avaliar</SubmitButton>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
}
