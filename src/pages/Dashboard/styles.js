import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})`
  padding-top: 20px;
  background: rgba(255, 255, 255, 0.1);
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Locations = styled.View.attrs({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})`
  padding-top: 20px;
`;

export const Card = styled.View.attrs({
  justifyContent: 'center',
  alignItems: 'center',
})`
  display: flex;
`;
