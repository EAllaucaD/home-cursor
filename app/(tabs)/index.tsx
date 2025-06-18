import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    // Implement login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Navigate to the home screen after successful login
    router.replace('/(tabs)/homesiiu');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.topBlueCurve} />
      <ImageBackground
        source={require('@/assets/images/logo_uce.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>INICIA SESIÓN</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="mail" size={20} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock" size={20} color="#888" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rememberMeContainer}>
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              color={rememberMe ? '#D32F2F' : '#888'}
            />
            <Text style={styles.rememberMeText}>Recordar Contraseña</Text>
          </View>

          <View style={styles.biometricContainer}>
            <MaterialCommunityIcons name="fingerprint" size={50} color="#888" style={styles.biometricIcon} />
            <MaterialIcons name="face" size={50} color="#888" style={styles.biometricIcon} />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBlueCurve: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: width * 1.2, // Ajusta el ancho para que la curva sea grande
    height: 250, // Ajusta la altura de la curva
    backgroundColor: '#1F4287', // Un tono de azul oscuro
    borderRadius: 999, // Un valor grande para hacerla circular/ovalada
    overflow: 'hidden',
    zIndex: 0, // Asegura que esté detrás de otros elementos si es necesario
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.2)', // Opacidad aún más reducida
  },
  contentContainer: {
    width: '90%',
    padding: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 60, // Altura ajustada para los campos de texto
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    padding: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 5,
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#555',
  },
  biometricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 30,
  },
  biometricIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#D32F2F', // Red color from the image
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#D32F2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
