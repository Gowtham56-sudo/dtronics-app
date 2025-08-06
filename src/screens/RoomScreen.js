import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Switch } from 'react-native';
import { ListItem, useTheme } from '@rneui/themed';
import { database } from '../api/firebase';
import { ref, onValue, set } from 'firebase/database';

const RoomScreen = ({ route }) => {
  const { theme } = useTheme();
  const { room, homeId } = route.params;
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const devicesRef = ref(database, `homes/${homeId}/rooms/${room.id}/devices`);
    onValue(devicesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const devicesList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDevices(devicesList);
      }
    });
  }, []);

  const toggleSwitch = (deviceId, currentState) => {
    const deviceRef = ref(database, `homes/${homeId}/rooms/${room.id}/devices/${deviceId}/state`);
    set(deviceRef, currentState === 'on' ? 'off' : 'on');
  };

  const renderDevice = ({ item }) => (
    <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
      <ListItem.Content>
        <ListItem.Title style={{ color: theme.colors.text }}>{item.name}</ListItem.Title>
      </ListItem.Content>
      <Switch
        value={item.state === 'on'}
        onValueChange={() => toggleSwitch(item.id, item.state)}
      />
    </ListItem>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={devices}
        renderItem={renderDevice}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RoomScreen;