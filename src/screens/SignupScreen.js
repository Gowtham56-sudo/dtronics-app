import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, useTheme } from '@rneui/themed';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';

const SignupScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text h3 style={[styles.title, { color: theme.colors.text }]}>Create Account</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Input
        placeholder='Name'
        onChangeText={setName}
        value={name}
      />
      <Input
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Signup" containerStyle={styles.button} onPress={handleSignup} />
      <Button title="Go to Login" type="clear" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default SignupScreen;