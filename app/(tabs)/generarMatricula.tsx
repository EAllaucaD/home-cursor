import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GenerarMatriculaScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Header azul con curva roja, logo y título */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>SISTEMA ACADÉMICO</Text>
        <Image
          source={require('@/assets/images/uce.png')}
          style={styles.logoUce}
          resizeMode="contain"
        />
        <View style={styles.headerRedCurve} />
        {/* Botón de regreso */}
        <TouchableOpacity onPress={() => router.replace('/(tabs)/matriculas')} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={28} color="#fff" />
        </TouchableOpacity>
        {/* Título de sección y logo circular */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>MATRÍCULAS</Text>
          <Image
            source={require('@/assets/images/logo_uce.png')}
            style={styles.logoCircle}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Registro de matrícula generada */}
        <View style={styles.registroContainer}>
          <Text style={styles.registroTitle}>REGISTRO DE MATRÍCULA GENERADA</Text>
          <View style={styles.pdfContainer}>
            {/* Encabezado PDF */}
            <View style={styles.pdfHeaderRow}>
              <Image
                source={require('@/assets/images/logo_uce.png')}
                style={styles.pdfLogo}
                resizeMode="contain"
              />
              <View style={styles.pdfHeaderTextBox}>
                <Text style={styles.pdfHeaderTitle}>UNIVERSIDAD{`\n`}CENTRAL{`\n`}DEL ECUADOR</Text>
                <Text style={styles.pdfHeaderSubtitle}>REGISTRO DE MATRÍCULA</Text>
              </View>
            </View>
            {/* Datos estudiante */}
            <View style={styles.pdfInfoRow}>
              <View style={styles.pdfInfoColLeft}>
                <Text style={styles.pdfInfoLabel}>ESTUDIANTE:</Text>
                <Text style={styles.pdfInfoLabel}>IDENTIFICACIÓN:</Text>
                <Text style={styles.pdfInfoLabel}>FACULTAD:</Text>
                <Text style={styles.pdfInfoLabel}>CARRERA:</Text>
                <Text style={styles.pdfInfoLabel}>NIVEL:</Text>
                <Text style={styles.pdfInfoLabel}>GRATUIDAD:</Text>
              </View>
              <View style={styles.pdfInfoColRight}>
                <Text style={styles.pdfInfoValue}>PERÍODO ACADÉMICO 2025-2025</Text>
                <Text style={styles.pdfInfoValue}></Text>
                <Text style={styles.pdfInfoValue}></Text>
                <Text style={styles.pdfInfoValue}></Text>
                <Text style={styles.pdfInfoValue}></Text>
                <Text style={styles.pdfInfoValue}></Text>
              </View>
            </View>
            {/* Tabla asignaturas */}
            <View style={styles.pdfTableContainer}>
              <View style={styles.pdfTableHeaderRow}>
                <Text style={styles.pdfTableHeaderCell}>#</Text>
                <Text style={styles.pdfTableHeaderCell}>Código</Text>
                <Text style={styles.pdfTableHeaderCell}>Asignatura</Text>
                <Text style={styles.pdfTableHeaderCell}>Matrícula</Text>
                <Text style={styles.pdfTableHeaderCell}>Paralelo</Text>
                <Text style={styles.pdfTableHeaderCell}>Horas</Text>
                <Text style={styles.pdfTableHeaderCell}>Valor</Text>
              </View>
              {/* Aquí irían las filas de asignaturas, pero está vacío */}
              <View style={styles.pdfTableEmptyRows} />
            </View>
          </View>
        </View>
        {/* Botón descargar PDF */}
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Descargar PDF</Text>
        </TouchableOpacity>
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
    paddingBottom: 30,
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 2,
  },
  logoUce: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 2,
  },
  headerRedCurve: {
    position: 'absolute',
    bottom: -30,
    left: -width * 0.1,
    width: width * 1.2,
    height: 60,
    backgroundColor: 'white',
    borderRadius: width * 0.6,
    borderTopWidth: 8,
    borderColor: '#D32F2F',
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15,
    zIndex: 3,
    backgroundColor: 'transparent',
    padding: 4,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    zIndex: 2,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  logoCircle: {
    width: 60,
    height: 60,
    marginLeft: 12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 40,
    paddingHorizontal: 18,
    paddingTop: 10,
    alignItems: 'center',
  },
  registroContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  registroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222',
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    elevation: 2,
  },
  pdfContainer: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 0,
    overflow: 'hidden',
    elevation: 2,
    alignSelf: 'center',
  },
  pdfHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3eafc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  pdfLogo: {
    width: 50,
    height: 36,
    marginRight: 10,
  },
  pdfHeaderTextBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfHeaderTitle: {
    color: '#1F4287',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
  },
  pdfHeaderSubtitle: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  pdfInfoRow: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfInfoColLeft: {
    flex: 1,
    alignItems: 'flex-end',
    gap: 2,
    paddingRight: 6,
  },
  pdfInfoColRight: {
    flex: 1.5,
    alignItems: 'flex-start',
    gap: 2,
    paddingLeft: 6,
  },
  pdfInfoLabel: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 12,
    marginBottom: 2,
    textAlign: 'right',
  },
  pdfInfoValue: {
    color: '#222',
    fontSize: 12,
    marginBottom: 2,
    textAlign: 'left',
  },
  pdfTableContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    width: '100%',
    alignSelf: 'center',
  },
  pdfTableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#e3eafc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    paddingVertical: 6,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfTableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#222',
    fontSize: 11,
    textAlign: 'center',
    minWidth: 40,
  },
  pdfTableEmptyRows: {
    height: 120,
    backgroundColor: '#fafbfc',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    alignSelf: 'center',
  },
  downloadButton: {
    backgroundColor: '#1F4287',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    width: width * 0.85,
    alignSelf: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 1,
  },
});
