import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function onSubmit() {
    if (!name || !email || !password || !confirm) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Validation', "Passwords don't match");
      return;
    }
    // Frontend-only: simulate success
    Alert.alert('Success', `Account created for ${name}`);
    router.push('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      <Button title="Sign Up" onPress={onSubmit} />

      <TouchableOpacity style={styles.switchRow} onPress={() => router.push('/login')}>
        <Text style={styles.switchText}>Already have an account? Log in</Text>
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
