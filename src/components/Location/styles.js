import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: #fff;
  margin: 10px 20px;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
`;

export const File = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 120px;
  height: 120px;
  align-content: stretch;
`;

export const Body = styled.View`
  padding: 12px 14px;
  max-width: 180px;
  width: 180px;

  display: flex;
  justify-content: space-between;
`;

export const Top = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Div = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Info = styled.Text`
  flex-direction: row;
  align-items: center;
  font-size: ${props => (props.size ? props.size : 12)};
  color: #999999;
`;
