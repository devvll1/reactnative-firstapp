import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    if (!email || !password) {
      Alert.alert('Validation', 'Please enter both email and password');
      return;
    }
    // Frontend-only: simulate success
    Alert.alert('Success', `Logged in as ${email}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Log In" onPress={onSubmit} />

      <TouchableOpacity style={styles.switchRow} onPress={() => router.push('/signup')}>
        <Text style={styles.switchText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  switchRow: {
    marginTop: 16,
    alignItems: 'center',
  },
  switchText: {
    color: '#0066cc',
  },
});
