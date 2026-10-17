import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function SignUpScreen(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create an account to get started.
</Text>
        <Text style={styles.subtitle}>It only takes a minute.</Text>
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
          placeholder='Name'
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
          style={styles.input}
          placeholder='Email/Phone Number'
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
          style={styles.input}
          placeholder='Password'
          />
          <TouchableOpacity>
            <Ionicons name="eye-off-outline" size={22} color="#8F9BB3" />
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={styles.termsContainer}>
        <Text>I agree to the</Text>
        <TouchableOpacity>
          <Text style={styles.bottomTextColor}> Terms of Service</Text>
        </TouchableOpacity>

        <Text>and</Text>

        <TouchableOpacity>
          <Text style={styles.bottomTextColor}> Privacy Policy</Text>
        </TouchableOpacity>
      </View>

       <TouchableOpacity  style={styles.logInButton}>
        <Text style={styles.logInButtonText}>Create Account</Text>
       </TouchableOpacity>

       <View style={styles.footerContainer}>
        <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.bottomTextColor}> Sign In</Text>
          </TouchableOpacity>
       </View>
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
    marginTop: 20,
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
    marginBottom: 20,
    flexDirection: 'row',
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
  passwordContainer: {
    flexDirection: 'row'
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
  termsContainer:{
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  footerContainer:{
    marginTop: 15,
    flexDirection: 'row',
  },
  bottomTextColor:{
  color: '#3062FF'
  }
})