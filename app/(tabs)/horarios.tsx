import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const weekDates = [24, 25, 26, 27, 28, 29, 30];
const todayIndex = 4; // Viernes

export default function HorariosScreen() {
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
          <Text style={styles.sectionTitle}>MI HORARIO</Text>
          <MaterialIcons name="calendar-today" size={36} color="#fff" style={{ marginLeft: 10 }} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Fecha grande y botón Hoy */}
        <View style={styles.dateRow}>
          <View>
            <Text style={styles.bigDate}>27</Text>
            <Text style={styles.dateSub}>Viernes</Text>
            <Text style={styles.dateSubSmall}>Octubre 2023</Text>
          </View>
          <TouchableOpacity style={styles.todayButton}>
            <Text style={styles.todayButtonText}>Hoy</Text>
          </TouchableOpacity>
        </View>
        {/* Barra de días */}
        <View style={styles.weekBar}>
          {weekDays.map((d, i) => (
            <View key={i} style={i === todayIndex ? styles.weekDayActive : styles.weekDay}>
              <Text style={i === todayIndex ? styles.weekDayTextActive : styles.weekDayText}>{d}</Text>
              <Text style={i === todayIndex ? styles.weekDateTextActive : styles.weekDateText}>{weekDates[i]}</Text>
            </View>
          ))}
        </View>
        {/* Lista de horarios */}
        <View style={styles.scheduleList}>
          {/* Horario 1 */}
          <View style={styles.scheduleItem}>
            <View style={styles.hourCol}>
              <Text style={styles.hourText}>07:00</Text>
              <Text style={styles.hourTextDim}>09:00</Text>
            </View>
            <View style={styles.subjectCol}>
              <Text style={styles.subjectTitle}>Información Empresarial</Text>
              <Text style={styles.subjectRoom}>Laboratorio 3{"\n"}Edificio Cisco</Text>
              <View style={styles.subjectTeacherRow}>
                <Image source={require('@/assets/images/user_placeholder.png')} style={styles.teacherAvatar} />
                <Text style={styles.subjectTeacher}>Ing. Mauro Rosas</Text>
              </View>
            </View>
          </View>
          {/* Horario 2 */}
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <View style={styles.hourCol}>
              <Text style={styles.hourText}>18:00</Text>
              <Text style={styles.hourTextDim}>20:00</Text>
            </View>
            <View style={styles.subjectCol}>
              <Text style={[styles.subjectTitle, { color: '#fff' }]}>Dispositivos Móviles</Text>
              <Text style={[styles.subjectRoom, { color: '#e0eaff' }]}>Salón 2{"\n"}Posgrado</Text>
              <View style={styles.subjectTeacherRow}>
                <Image source={require('@/assets/images/user_placeholder.png')} style={styles.teacherAvatar} />
                <Text style={[styles.subjectTeacher, { color: '#fff' }]}>Ing. Diego Noguera</Text>
              </View>
            </View>
          </View>
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
    paddingTop: 20,
    paddingHorizontal: 0,
    paddingBottom: 40,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: -30,
    marginBottom: 10,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  bigDate: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 0,
  },
  dateSub: {
    fontSize: 16,
    color: '#888',
    marginBottom: 0,
  },
  dateSubSmall: {
    fontSize: 13,
    color: '#bbb',
  },
  todayButton: {
    backgroundColor: '#e6eefc',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  todayButtonText: {
    color: '#1F4287',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weekBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 18,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  weekDay: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 2,
    borderRadius: 8,
  },
  weekDayActive: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#1F4287',
    borderRadius: 8,
    paddingVertical: 2,
  },
  weekDayText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 15,
  },
  weekDayTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  weekDateText: {
    color: '#888',
    fontSize: 15,
  },
  weekDateTextActive: {
    color: '#fff',
    fontSize: 15,
  },
  scheduleList: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  scheduleItemBlue: {
    backgroundColor: '#1F4287',
  },
  hourCol: {
    width: 60,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  hourText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F4287',
  },
  hourTextDim: {
    fontSize: 15,
    color: '#bbb',
    fontWeight: 'bold',
  },
  subjectCol: {
    flex: 1,
  },
  subjectTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  subjectRoom: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    lineHeight: 18,
  },
  subjectTeacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  teacherAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: '#eee',
  },
  subjectTeacher: {
    fontSize: 15,
    color: '#1F4287',
    fontWeight: 'bold',
  },
});
