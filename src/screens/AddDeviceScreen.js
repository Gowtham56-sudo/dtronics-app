import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, useTheme } from '@rneui/themed';

const AddDeviceScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Button
        title="Scan for Devices"
        containerStyle={styles.button}
      />
      <Button
        title="Add Manually"
        containerStyle={styles.button}
        onPress={() => navigation.navigate('AddDeviceManually')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default AddDeviceScreen;