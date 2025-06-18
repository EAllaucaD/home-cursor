import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AsignaturasScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Header azul con curva roja, logo y título */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>SISTEMA ACADÉMICO</Text>
        <Image
          source={require('@/assets/images/logo_uce.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRedCurve} />
        {/* Botón de regreso */}
        <TouchableOpacity onPress={() => router.replace('/(tabs)/homesiiu')} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={28} color="#fff" />
        </TouchableOpacity>
        {/* Título de sección */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>MIS ASIGNATURAS</Text>
          <MaterialIcons name="menu-book" size={36} color="#fff" style={{ marginLeft: 10 }} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Buscador */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}><Text style={[styles.tabText, styles.tabTextActive]}>SEMESTRAL</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}><Text style={styles.tabText}>IDIOMAS</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}><Text style={styles.tabText}>HISTORIAL ACADÉMICO</Text></TouchableOpacity>
        </View>
        {/* Lista de asignaturas */}
        <View style={styles.subjectList}>
          {['Dispositivos Móviles', 'Información Empresarial', 'Estrategias de Información', 'Formación de Empresas'].map((subject, idx) => (
            <TouchableOpacity key={subject} style={styles.subjectItem}>
              <Text style={styles.subjectText}>{subject}</Text>
              <MaterialIcons name="chevron-right" size={28} color="#222" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  headerContainer: {
    backgroundColor: '#1F4287',
    paddingTop: 50,
    paddingBottom: 90,
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 2,
  },
  logo: {
    width: 70,
    height: 70,
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
  backButton: {
    position: 'absolute',
    top: 45,
    left: 10,
    zIndex: 3,
    padding: 5,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 20,
    zIndex: 2,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scrollViewContent: {
    paddingTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  searchContainer: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  searchInput: {
    backgroundColor: '#f3f6fa',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#222',
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 5,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 3,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabButtonActive: {
    backgroundColor: '#e6eefc',
    borderWidth: 1,
    borderColor: '#1F4287',
  },
  tabText: {
    color: '#222',
    fontWeight: '500',
    fontSize: 15,
  },
  tabTextActive: {
    color: '#1F4287',
    fontWeight: 'bold',
  },
  subjectList: {
    marginTop: 10,
  },
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'space-between',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});
