import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import Colors from '@/constants/Colors'
import { useAuth } from '@/context/AuthContext'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { onLogin, onRegister } = useAuth()

  const onSignInPress = async () => {
    setLoading(true)
    try {
      const result = await onLogin!(email, password)
      console.log('result:', result);
    } catch (error) {
      Alert.alert('Error', "Could not login")
    } finally {
      setLoading(false)
    }
  }

  const onSignUpPress = async () => {
    setLoading(true)
    try {
      const result = await onRegister!(email, password)
      console.log('result:', result);
    } catch (error) {
      Alert.alert('Error', "Could not register")
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Spinner visible={loading} />
      <Text style={styles.header}>Meet Me</Text>
      <Text style={styles.subHeader}>The fastest way to meet</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder='Password'
        style={styles.inputField}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text style={{ color: "#fff" }}>Sign In</Text>
      </TouchableOpacity>
      <Button
        title="Don't have an account? Sign UP"
        onPress={onSignUpPress}
        color={Colors.primary}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: WIDTH > HEIGHT ? '30%' : 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  button: {
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 4,
  }
})

export default Page
