import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View>
        <Image
            source={require('../assets/WelcomeIMAGE.png')}
            style={styles.image}
            resizeMode="contain"
          />
      </View>

      <View style={styles.card}>

        <View style={styles.header}>
          <Text style={styles.title}>Sign up</Text>
        </View>

        <View style={styles.content}>

          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.buttonRow}>
              <Text style={styles.googleIcon}>G </Text>
              <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <View style={styles.buttonRow}>
              <Text style={styles.appleIcon}> </Text>
              <Text style={styles.appleButtonText}>Sign up with Apple</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.dividerText}>or</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#A0A0A0"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A0A0A0"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry
            />
            <Text style={styles.eyeIcon}>👁</Text>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry
            />
            <Text style={styles.eyeIcon}>👁</Text>
          </View>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create account</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity style={styles.linkContainer}
          onPress={()=> navigation.navigate('Signin')}>
            <Text 
            style={styles.boldText}>Log in</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E222B',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    width: '100%',
    maxWidth: 350,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 10,

    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E222B',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#4A80F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  googleIcon: {
    color: '#4285F4',
    fontWeight: 'bold',
    fontSize: 15,
  },
  googleButtonText: {
    color: '#4A80F0',
    fontSize: 14,
    fontWeight: '600',
  },
  appleButton: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#1E222B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  appleIcon: {
    color: '#1E222B',
    fontSize: 15,
  },
  appleButtonText: {
    color: '#1E222B',
    fontSize: 14,
    fontWeight: '600',
  },
  dividerText: {
    color: '#1E222B',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#1E222B',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#1E222B',
    marginBottom: 12,
  },
  passwordContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#1E222B',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: '#1E222B',
  },
  eyeIcon: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  createButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#1E222B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  linkContainer: {
    paddingVertical: 4,
  },
  footerText: {
    color: '#1E222B',
    fontSize: 13,
  },
  boldText: {
    fontWeight: '700',
  },
});