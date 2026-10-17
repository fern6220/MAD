import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function LoginScreen(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Welcome back! Sign in to continue</Text>
        <Text style={styles.subtitle}>where you left off</Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons 
          name="logo-facebook" 
          size={20} 
          color="#1877F2" style={styles.buttonIcon} />
          <Text>Facebook</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons 
          name="logo-google" 
          size={20} color="#EA4335" 
          style={styles.buttonIcon} />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerCotainer}>
      <View style={styles.horizontalLine}></View>
      <Text stye={styles.dividerText}>or</Text>
      <View style={styles.horizontalLine}></View>
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
          style={styles.input}
          placeholder='Email/Phone Number'
          />
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder='Password'
          />
        </View>
      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

       <TouchableOpacity  style={styles.logInButton}>
        <Text style={styles.logInButtonText}>Log In</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#254EDB',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#656E85',
    textAlign: 'center',
    lineHeight: 22,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  socialButton: {
    backgroundColor: '#F5F7FB',
    width: '48%',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  dividerCotainer:{
    alignItems: 'center',
    marginBottom: 10,
  },
   dividerText: {
    fontSize: 14,
    color: '#8F9BB3',
    paddingHorizontal: 16,
    },
  horizontalLine:{
    flex: 1,
    height: 1, 
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F5F7FB',
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2430',
    padding: 5,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  logInButton: {
    backgroundColor: '#3062FF',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  forgotPassword:{
    alignItems: 'flex-end',
    marginBottom: 16,
  },
})