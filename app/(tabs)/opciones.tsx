import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OpcionesScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Header azul con curva roja, logo, título y flecha de regreso */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/homesiiu')} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>UNIVERSIDAD CENTRAL DEL ECUADOR</Text>
        <Text style={styles.headerSubtitle}>SISTEMA ACADÉMICO</Text>
        <Image
          source={require('@/assets/images/logo_uce.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRedCurve} />
        <Text style={styles.sectionTitle}>PERFIL</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Foto de usuario */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="person" size={60} color="#444" />
            <TouchableOpacity style={styles.editAvatar}>
              <MaterialIcons name="edit" size={20} color="#222" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Nombre y email */}
        <View style={styles.userInfoRow}>
          <Text style={styles.userName}>Luis López</Text>
          <TouchableOpacity style={styles.editName}>
            <MaterialIcons name="edit" size={20} color="#222" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userEmail}>llopezc@hotmail.com</Text>
        {/* Botones de opciones */}
        <View style={styles.optionButton}>
          <MaterialIcons name="verified-user" size={24} color="#1F4287" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Información Adicional</Text>
          <MaterialIcons name="chevron-right" size={24} color="#888" style={{ marginLeft: 'auto' }} />
        </View>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/(tabs)/asistente')}>
          <MaterialIcons name="smart-toy" size={24} color="#1F4287" style={{ marginRight: 10 }} />
          <Text style={styles.optionText}>Asistente virtual</Text>
          <MaterialIcons name="chevron-right" size={24} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
        {/* Botón cerrar sesión */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#1F4287',
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 10,
    zIndex: 3,
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    zIndex: 2,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
    zIndex: 2,
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 2,
  },
  headerRedCurve: {
    position: 'absolute',
    bottom: -40,
    left: -width * 0.1,
    width: width * 1.2,
    height: 80,
    backgroundColor: 'white',
    borderRadius: width * 0.6,
    borderTopWidth: 8,
    borderColor: '#D32F2F',
    zIndex: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    zIndex: 2,
    letterSpacing: 1,
  },
  scrollViewContent: {
    paddingTop: 0,
    paddingHorizontal: 15,
    paddingBottom: 40,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    zIndex: 5,
  },
  avatarCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#ddd',
    zIndex: 5,
  },
  editAvatar: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    marginTop: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  editName: {
    marginLeft: 8,
    padding: 2,
  },
  userEmail: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafd',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#D32F2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
