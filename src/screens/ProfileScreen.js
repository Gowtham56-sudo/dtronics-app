
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, ListItem, Button, useTheme } from '@rneui/themed';
import { auth } from '../api/firebase';
import { signOut } from 'firebase/auth';

const ProfileScreen = () => {
  const { theme } = useTheme();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.profileContainer}>
        <Avatar
          size={64}
          rounded
          source={{ uri: user?.photoURL || 'https://example.com/user.png' }}
        />
        <Text style={[styles.name, { color: theme.colors.text }]}>{user?.displayName || 'User Name'}</Text>
        <Text style={[styles.email, { color: theme.colors.text }]}>{user?.email}</Text>
      </View>

      <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: theme.colors.text }}>About</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: theme.colors.text }}>Help & FAQ</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: theme.colors.text }}>Feedback</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: theme.colors.text }}>App Version</ListItem.Title>
        </ListItem.Content>
        <Text style={{ color: theme.colors.text }}>1.0.0</Text>
      </ListItem>

      <Button
        title="Logout"
        onPress={handleLogout}
        containerStyle={styles.logoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  logoutButton: {
    margin: 20,
  },
});

export default ProfileScreen;
