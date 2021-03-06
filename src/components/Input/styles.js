import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  border: 0.6px solid rgba(0, 0, 0, 0.2);

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.4)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
