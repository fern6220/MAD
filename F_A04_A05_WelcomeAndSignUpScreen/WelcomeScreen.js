import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>
            We're glad you're here. Sign in or create an account to get started.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedButtonText}>Get started →</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.alreadyHaveAccountButton}>
            <Text style={styles.alreadyHacountText}>I already have an account</Text>
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
    borderRadius: 24,
    width: '100%',
    maxWidth: 340,
    paddingVertical: 45,
    paddingHorizontal: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1E222B',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  getStartedButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#232731',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  alreadyHaveAccountButton: {
    width: '100%',
    height: 52,
    borderWidth: 1.5,
    borderColor: '#1E222B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  alreadyHaveAccountText: {
    color: '#1E222B',
    fontSize: 15,
    fontWeight: '600',
  },
});