
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, PermissionsAndroid, Platform } from 'react-native';
import { ListItem, Text, useTheme } from '@rneui/themed';
import WifiManager from 'react-native-wifi-reborn';

const ScanDevicesScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [wifiList, setWifiList] = useState([]);

  useEffect(() => {
    const loadWifiList = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location permission is required for WiFi connections',
            message:
              'This app needs location permission as this is required  ' +
              'to scan for wifi networks.',
            buttonNegative: 'DENY',
            buttonPositive: 'ALLOW',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          WifiManager.loadWifiList().then(list => setWifiList(list));
        } else {
          console.log('Permission denied');
        }
      }
    };
    loadWifiList();
  }, []);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('AddDeviceManually', { ssid: item.SSID })}>
      <ListItem.Content>
        <ListItem.Title style={{ color: theme.colors.text }}>{item.SSID}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text h4 style={[styles.title, { color: theme.colors.text }]}>Available Wi-Fi Networks</Text>
      <FlatList
        data={wifiList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
});

export default ScanDevicesScreen;
