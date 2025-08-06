
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, useTheme } from '@rneui/themed';

const AddDeviceManuallyScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [deviceName, setDeviceName] = useState('');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const handleAddDevice = () => {
    // TODO: Implement the logic to add the device
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text h4 style={[styles.title, { color: theme.colors.text }]}>Add Device Manually</Text>
      <Input
        placeholder='Device Name'
        onChangeText={setDeviceName}
        value={deviceName}
      />
      <Input
        placeholder='SSID'
        onChangeText={setSsid}
        value={ssid}
      />
      <Input
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Add Device" containerStyle={styles.button} onPress={handleAddDevice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
});

export default AddDeviceManuallyScreen;
