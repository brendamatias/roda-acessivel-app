import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.ScrollView.attrs({ flex: 1 })`
  background: rgba(255, 255, 255, 0.2);
  margin: 0 20px;
  margin-bottom: 20px;
`;

export const Body = styled.View.attrs({})`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 30px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
  margin: 50px 0 40px 0;
`;

export const Text = styled.Text`
  color: #f64c75;
  font-weight: bold;
  padding-top: 10px;
`;

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Note = styled.View``;

export const Label = styled.Text``;

export const SubmitButton = styled(Button)`
  background: #f64c75;
  width: 100%;
`;
