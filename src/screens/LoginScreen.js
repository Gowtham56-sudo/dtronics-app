
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, useTheme } from '@rneui/themed';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from '../api/firebase';

const LoginScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredential);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text h3 style={[styles.title, { color: theme.colors.text }]}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
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
      <Button title="Login" containerStyle={styles.button} onPress={handleLogin} />
      <Button title="Go to Signup" type="clear" onPress={() => navigation.navigate('Signup')} />
      <Button title="Sign in with Google" icon={{ name: 'google', type: 'font-awesome' }} onPress={handleGoogleSignIn} />
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

export default LoginScreen;
