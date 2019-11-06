import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import api from '~/services/api';

import Header from '~/components/Header';
import Location from '~/components/Location';

import { Container, List } from './styles';

export default function Dashboard({ navigation }) {
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [locations, setLocations] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function loadLocations() {
      setLoading(true);

      const response = await api.get('locations', {
        params: { page },
      });

      setLocations(response.data);

      setHasMore(response.data.length >= 10);
      setLoading(false);
      setRefreshing(false);

      setLoading(false);
    }

    loadLocations();
  }, [page, refreshCount]);

  async function handleRefresh() {
    setRefreshing(true);
    setLocations([]);
    setRefreshCount(refreshCount + 1);
  }

  return (
    <>
      <Header navigation={navigation} />
      <Container>
        {loading && <Text>Loading</Text>}

        {locations.length ? (
          <List
            data={locations}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Location data={item} />}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            onEndReached={() => hasMore && setPage(page + 1)}
            onEndReachedThreshold={0.2}
          />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Categorias',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
