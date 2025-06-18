import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeSiiu() {
  const { width } = Dimensions.get('window');
  const router = useRouter();

  return (
    <View style={styles.container}> {/* This outer container holds everything including the fixed bottom bar */}
      {/* Header azul con curva roja, logo y título */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>SISTEMA ACADÉMICO</Text>
        <Image
          source={require('@/assets/images/dog.png')}
          style={styles.dog}
          resizeMode="contain"
        />
        <Image
          source={require('@/assets/images/logo_uce.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRedCurve} />
        {/* Accesos rápidos debajo del logo */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)/carnet')}>
            <MaterialCommunityIcons name="account-details" size={36} color="#1F4287" />
            <Text style={styles.cardText}>Carnet estudiantil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)/asignaturas')}>
            <MaterialCommunityIcons name="book-open-variant" size={36} color="#1F4287" />
            <Text style={styles.cardText}>Mis asignaturas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)/horarios')}>
            <MaterialCommunityIcons name="clock-time-four" size={36} color="#1F4287" />
            <Text style={styles.cardText}>Horarios</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}> {/* Scrollable content area */}
        {/* Important Notifications Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Notificaciones importantes</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#555" />
        </View>
        <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.notificationItem} onPress={() => console.log('Evaluaciones pendientes')}>
            <MaterialCommunityIcons name="bell" size={24} color="#FBC02D" />
            <Text style={styles.notificationText}>Evaluaciones pendientes</Text>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#888" style={styles.notificationArrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationItem} onPress={() => router.push('/(tabs)/matriculas')}>
            <MaterialCommunityIcons name="bell" size={24} color="#FBC02D" />
            <Text style={styles.notificationText}>Inicio de matriculas</Text>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#888" style={styles.notificationArrow} />
          </TouchableOpacity>
        </View>

        {/* News Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Novedades</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#555" />
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.newsItemLeft}>
            <Text style={styles.newsItemLeftText}>Semana 3</Text>
          </View>
          <Image
            source={require('@/assets/images/fondo_uce.jpg')} // Using fondo_uce.jpg as a placeholder
            style={styles.newsImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar (fixed at the bottom) */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navBarItem} onPress={() => router.push('/(tabs)/homesiiu')}>
          <MaterialCommunityIcons name="home" size={24} color="#1F4287" />
          <Text style={styles.navBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem} onPress={() => router.push('/(tabs)/homesiiu')}>
          <MaterialCommunityIcons name="calendar" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem} onPress={() => router.push('/(tabs)/homesiiu')}>
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarItem} onPress={() => router.push('/(tabs)/opciones')}>
          <MaterialCommunityIcons name="cog" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  headerContainer: {
    backgroundColor: '#1F4287',
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 2,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
    marginTop: 5,
    zIndex: 2,
    alignSelf: 'center',
  },
  dog: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 18,
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
  scrollViewContent: {
    paddingBottom: 70,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 0,
    zIndex: 2,
    gap: 8,
  },
  card: {
    flex: 1,
    minWidth: 90,
    maxWidth: 140,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 2,
  },
  cardText: {
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
    color: '#1F4287',
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  notificationArrow: {
    marginLeft: 10,
  },
  newsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  newsItemLeft: {
    backgroundColor: '#A1CEDC', // Light blue background
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  newsItemLeftText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsImage: {
    width: '70%',
    height: 100,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  navBarItem: {
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
}); 