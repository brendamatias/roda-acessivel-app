import styled from 'styled-components/native';

import Button from '~/components/Button';

export const DetailsContent = styled.ScrollView.attrs({})``;

export const Container = styled.SafeAreaView.attrs({})`
  background: rgba(255, 255, 255, 0.2);
  margin: 0 20px;
  margin-bottom: 20px;
`;

export const File = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 240px;
  align-content: stretch;
`;

export const Section = styled.View`
  position: relative;
  top: -60px;
  display: flex;
  flex-direction: row;

  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 20px;
  background: #fff;
`;

export const Content = styled.View`
  padding: 12px 14px;
  width: 80%;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Info = styled.Text`
  font-size: ${props => (props.size ? props.size : 12)};
  color: ${props => (props.color ? props.color : '#999999')};
  padding-bottom: ${props => (props.padding ? props.padding : 0)};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
`;

export const Address = styled.Text`
  font-size: 12;
  color: #999999;
  padding: 20px 0;
`;

export const Div = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Accessibility = styled.View`
  display: flex;

  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 20px 20px 30px 20px;
  background: #fff;
`;

export const InfoAccessibility = styled.View.attrs({
  borderBottomColor: '#707070',
  borderBottomWidth: 0.4,
})`
  padding: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #f64c75;
  margin: -40px 0 20px;
  width: 100%;
`;
