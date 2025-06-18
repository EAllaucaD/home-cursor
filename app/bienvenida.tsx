import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function BienvenidaScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/fondo_uce.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Bienvenido (a) a la</Text>
          <Text style={styles.universityText}>UNIVERSIDAD CENTRAL DEL ECUADOR</Text>
          <Image
            source={require('@/assets/images/logo_uce.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Oscurece la imagen de fondo
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '90%',
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
  },
  universityText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 50,
    lineHeight: 40, // Espaciado entre líneas
  },
  logo: {
    width: 200,
    height: 200,
  },
}); 