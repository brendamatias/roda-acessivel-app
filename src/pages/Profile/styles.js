import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View.attrs({})`
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  align-self: center;
  margin-top: 50px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 30px 0 20px;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 40 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #2ab7d8;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
  background: #f64c75;
`;
