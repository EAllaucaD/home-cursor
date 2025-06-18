import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AsistenteScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Header azul con curva, imagen dog, nombre, estado y X */}
      <View style={styles.headerContainer}>
        <Image source={require('@/assets/images/dog.png')} style={styles.dog} resizeMode="contain" />
        <Text style={styles.asisName}>Asis</Text>
        <Text style={styles.asisStatus}>● Online</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.replace('/(tabs)/opciones')}>
          <MaterialIcons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerRedCurve} />
      </View>
      <ScrollView style={styles.chatScroll} contentContainerStyle={styles.chatContent}>
        {/* Mensaje del bot */}
        <View style={styles.botBubbleRow}>
          <View style={styles.botAvatar} />
          <View style={styles.botBubble}>
            <Text style={styles.botText}>Hola, soy tu amigable asistente virtual y estoy aquí para ayudarte con las dudas que tengas.</Text>
            <View style={styles.bubbleActions}>
              <MaterialIcons name="content-copy" size={18} color="#fff" style={styles.bubbleActionIcon} />
              <MaterialIcons name="thumb-up" size={18} color="#fff" style={styles.bubbleActionIcon} />
              <MaterialIcons name="thumb-down" size={18} color="#fff" style={styles.bubbleActionIcon} />
            </View>
          </View>
        </View>
        {/* Mensaje del usuario */}
        <View style={styles.userBubbleRow}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>¿Puedo generar mi orden de cobro?</Text>
            <Text style={styles.userTime}>7:20 ✓✓</Text>
          </View>
          <View style={styles.userAvatar}>
            <MaterialIcons name="person" size={24} color="#222" />
          </View>
        </View>
        {/* Mensaje del bot */}
        <View style={styles.botBubbleRow}>
          <View style={styles.botAvatar} />
          <View style={styles.botBubble}>
            <Text style={styles.botText}>Sí, debes ingresar a la opción de servicios desde la página principal del Sistema Académico.</Text>
            <View style={styles.bubbleActions}>
              <MaterialIcons name="content-copy" size={18} color="#fff" style={styles.bubbleActionIcon} />
              <MaterialIcons name="thumb-up" size={18} color="#fff" style={styles.bubbleActionIcon} />
              <MaterialIcons name="thumb-down" size={18} color="#fff" style={styles.bubbleActionIcon} />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Sugerencias rápidas */}
      <View style={styles.suggestionsRow}>
        <TouchableOpacity style={styles.suggestionButton}><Text style={styles.suggestionText}>🤔¿Dónde veo mis notas?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.suggestionButton}><Text style={styles.suggestionText}>¿Cómo obtengo mi historial académico?</Text></TouchableOpacity>
      </View>
      {/* Caja de texto */}
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Type your message here..." placeholderTextColor="#888" />
        <TouchableOpacity style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="#1F4287" />
        </TouchableOpacity>
      </View>
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
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'visible',
    justifyContent: 'flex-end',
  },
  dog: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 10,
    left: 18,
    zIndex: 2,
  },
  asisName: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 110,
    marginTop: 10,
    zIndex: 2,
  },
  asisStatus: {
    color: '#7CFC00',
    fontSize: 15,
    marginLeft: 110,
    marginTop: 2,
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 18,
    zIndex: 3,
    padding: 5,
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
  chatScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContent: {
    padding: 18,
    paddingBottom: 30,
  },
  botBubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  botAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1F4287',
    marginRight: 8,
  },
  botBubble: {
    backgroundColor: '#1F4287',
    borderRadius: 16,
    padding: 14,
    maxWidth: '80%',
    minWidth: 80,
    flexShrink: 1,
  },
  botText: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 6,
  },
  bubbleActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bubbleActionIcon: {
    marginLeft: 8,
  },
  userBubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  userBubble: {
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 14,
    maxWidth: '80%',
    minWidth: 80,
    flexShrink: 1,
    marginRight: 8,
  },
  userText: {
    color: '#222',
    fontSize: 15,
  },
  userTime: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'right',
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1F4287',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 6,
    backgroundColor: '#fff',
  },
  suggestionButton: {
    backgroundColor: '#f3f6fa',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 6,
    marginLeft: 0,
    marginBottom: 2,
  },
  suggestionText: {
    color: '#222',
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    color: '#222',
  },
  sendButton: {
    backgroundColor: '#e6eefc',
    borderRadius: 20,
    padding: 8,
  },
});
