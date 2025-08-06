
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, Button, useTheme } from '@rneui/themed';
import { database } from '../api/firebase';
import { ref, onValue, set } from 'firebase/database';

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const homesRef = ref(database, 'homes');
    onValue(homesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const homesList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          rooms: data[key].rooms ? Object.keys(data[key].rooms).map(roomKey => ({
            id: roomKey,
            ...data[key].rooms[roomKey]
          })) : []
        }));
        setHomes(homesList);
      }
    });
  }, []);

  const handleAddRoom = (homeId) => {
    const newRoomRef = ref(database, `homes/${homeId}/rooms`);
    const newRoom = {
      name: 'New Room',
      devices: []
    };
    set(newRoomRef, newRoom);
  };

  const renderRoom = ({ item }) => (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Title style={{ color: theme.colors.text }}>{item.name}</ListItem.Title>
        </ListItem.Content>
      }
      isExpanded={true}
      containerStyle={{ backgroundColor: theme.colors.background }}
    >
      {item.rooms.map((room) => (
        <ListItem key={room.id} bottomDivider onPress={() => navigation.navigate('Room', { room, homeId: item.id })} containerStyle={{ backgroundColor: theme.colors.background }}>
          <ListItem.Content>
            <ListItem.Title style={{ color: theme.colors.text }}>{room.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ListItem.Accordion>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={homes}
        renderItem={renderRoom}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add Room"
        icon={{ name: 'add', color: 'white' }}
        containerStyle={styles.addButton}
        onPress={() => handleAddRoom(homes[0].id)} // Assuming there is at least one home
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default HomeScreen;
