import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const asignaturasData = [
  { nombre: 'Dispositivos Móviles' },
  { nombre: 'Información Empresarial' },
  { nombre: 'Formación Empresarial' },
  { nombre: 'Estrategias de Información' },
];

export default function Matriculas() {
  const { width } = Dimensions.get('window');
  const router = useRouter();
  const [tab, setTab] = useState<'semestral' | 'idiomas'>('semestral');
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [paralelos, setParalelos] = useState<{ [key: string]: string }>({});
  const [paraleloMenu, setParaleloMenu] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAsignatura, setModalAsignatura] = useState<string | null>(null);

  function handleCheck(nombre: string) {
    setChecked((prev) => ({ ...prev, [nombre]: !prev[nombre] }));
  }

  function handleParalelo(nombre: string, value: string) {
    setParalelos((prev) => ({ ...prev, [nombre]: value }));
  }

  return (
    <View style={styles.container}>
      {/* Header azul con curva roja, logo, dog, título, ícono libro y flecha */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/homesiiu')}>
          <MaterialIcons name="arrow-back-ios" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SISTEMA ACADÉMICO</Text>
        <Image source={require('@/assets/images/dog.png')} style={styles.dog} resizeMode="contain" />
        <Image source={require('@/assets/images/logo_uce.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.headerRedCurve} />
        <View style={styles.headerRow}>
          <Text style={styles.headerScreenTitle}>MATRÍCULAS</Text>
          <MaterialCommunityIcons name="book-open-variant" size={36} color="#fff" style={{ marginLeft: 8 }} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[styles.tabButton, tab === 'semestral' && styles.tabButtonActive]}
            onPress={() => setTab('semestral')}
          >
            <Text style={[styles.tabText, tab === 'semestral' && styles.tabTextActive]}>SEMESTRAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, tab === 'idiomas' && styles.tabButtonActive]}
            onPress={() => setTab('idiomas')}
          >
            <Text style={[styles.tabText, tab === 'idiomas' && styles.tabTextActive]}>IDIOMAS</Text>
          </TouchableOpacity>
        </View>
        {/* Inputs Facultad y Carrera */}
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Facultad</Text>
          <View style={styles.inputBoxRow}>
            <TextInput style={styles.inputBox} placeholder="" placeholderTextColor="#bbb" />
            <MaterialIcons name="search" size={18} color="#888" style={styles.inputIcon} />
          </View>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Carrera</Text>
          <View style={styles.inputBoxRow}>
            <TextInput style={styles.inputBox} placeholder="" placeholderTextColor="#bbb" />
            <MaterialIcons name="search" size={18} color="#888" style={styles.inputIcon} />
          </View>
        </View>
        {/* Encabezados de tabla */}
        <View style={styles.tableHeaderRow}>
          <Text style={styles.tableHeaderText}>Asignatura</Text>
          <Text style={styles.tableHeaderText}>Paralelo</Text>
        </View>
        {/* Lista de asignaturas */}
        {asignaturasData.map((asig) => (
          <View key={asig.nombre} style={styles.asigRow}>
            <TouchableOpacity style={styles.checkbox} onPress={() => handleCheck(asig.nombre)}>
              {checked[asig.nombre] && <View style={styles.checkboxChecked} />}
            </TouchableOpacity>
            <Text style={styles.asigText}>{asig.nombre}</Text>
            <View style={styles.paraleloSelect}>
              <TouchableOpacity
                style={styles.paraleloButton}
                onPress={() => {
                  setModalAsignatura(asig.nombre);
                  setModalVisible(true);
                }}
              >
                <Text style={styles.paraleloButtonText}>{paralelos[asig.nombre] || 'Seleccionar...'}</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color="#888" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {/* Botón generar matrícula */}
        <TouchableOpacity style={styles.generarButton}>
          <Text style={styles.generarButtonText}>GENERAR MATRÍCULA</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Modal de selección de paralelo */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {['Paralelo 1', 'Paralelo 2', 'Paralelo 3'].map((p) => (
              <Pressable
                key={p}
                style={({ pressed }) => [styles.dropdownItem, pressed && styles.dropdownItemPressed]}
                onPress={() => {
                  if (modalAsignatura) handleParalelo(modalAsignatura, p);
                  setModalVisible(false);
                }}
              >
                <Text style={[styles.dropdownItemText, modalAsignatura && paralelos[modalAsignatura] === p && styles.dropdownItemTextSelected]}>{p}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
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
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15,
    zIndex: 3,
    backgroundColor: 'transparent',
    padding: 4,
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
  logo: {
    width: 70,
    height: 70,
    marginBottom: 5,
    marginTop: 5,
    zIndex: 2,
    alignSelf: 'center',
  },
  dog: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 18,
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    zIndex: 2,
  },
  headerScreenTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scrollViewContent: {
    paddingBottom: 40,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    marginTop: 10,
    gap: 16,
  },
  tabButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 28,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  tabButtonActive: {
    backgroundColor: '#e3eafc',
  },
  tabText: {
    color: '#888',
    fontWeight: '600',
    fontSize: 15,
  },
  tabTextActive: {
    color: '#1F4287',
  },
  inputRow: {
    marginBottom: 10,
  },
  inputLabel: {
    fontWeight: '600',
    color: '#444',
    marginBottom: 4,
    marginLeft: 2,
  },
  inputBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3eafc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  inputBox: {
    flex: 1,
    height: 36,
    color: '#222',
    fontSize: 15,
    backgroundColor: 'transparent',
  },
  inputIcon: {
    marginLeft: 4,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 6,
    paddingHorizontal: 2,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#444',
    fontSize: 15,
    width: '48%',
  },
  asigRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#1F4287',
    borderRadius: 6,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#1F4287',
    borderRadius: 3,
  },
  asigText: {
    flex: 1,
    fontSize: 15,
    color: '#222',
    fontWeight: '600',
  },
  paraleloSelect: {
    width: 120,
    alignItems: 'flex-end',
    position: 'relative',
  },
  paraleloButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3eafc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    zIndex: 2,
  },
  paraleloButtonText: {
    color: '#444',
    fontSize: 14,
    marginRight: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 28,
    minWidth: 180,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  dropdownItemPressed: {
    backgroundColor: '#e3eafc',
  },
  dropdownItemText: {
    color: '#444',
    fontSize: 15,
    textAlign: 'center',
  },
  dropdownItemTextSelected: {
    color: '#1F4287',
    fontWeight: 'bold',
  },
  generarButton: {
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
  },
  generarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 1,
  },
});
