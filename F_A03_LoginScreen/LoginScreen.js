import { StyleSheet, Text,View, TextInput,TouchableOpacity, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={18} color="#4285F4" style={styles.icon} />
          <Text style={[styles.socialButtonText, { color: '#4285F4' }]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={20} color="#000000" style={styles.icon} />
          <Text style={[styles.socialButtonText, { color: '#000000' }]}>
            Sign in with Apple
          </Text>
        </TouchableOpacity>


        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>or</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>
            No account?{' '}
            <TouchableOpacity>
              <Text style={styles.clickableText}>Create one</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2D323E',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 36,
    alignItems: 'center', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 35,
  },
  socialButton: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    height: 44,
    borderWidth: 1.5,
    borderColor: '#3B5998',
    borderRadius: 6,
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  dividerContainer: {
    marginVertical: 12,
  },
  dividerText: {
    fontSize: 13,
    color: '#666666',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#2D323E',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 14,
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#2D323E',
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 6,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  linkContainer: {
    paddingVertical: 4,
  },
  linkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },
  clickableText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2D323E',
  },
});