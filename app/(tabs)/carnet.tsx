import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CarnetScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Blue Header with Back Arrow and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/homesiiu')} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CARNET ESTUDIANTIL</Text>
        <Image
          source={require('@/assets/images/logo_uce.png')}
          style={styles.headerLogo}
          resizeMode="contain"
        />
      </View>

      {/* Red Curve below header */}
      <View style={styles.headerRedCurve} />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* ID Card */}
        <View style={styles.cardContainer}>
          {/* Top Blue Section of Card */}
          <View style={styles.cardTopBlueSection}>
            <Text style={styles.cardUniversityName}>UNIVERSIDAD CENTRAL</Text>
            <Text style={styles.cardUniversityName}>DEL ECUADOR</Text>
            <Image
              source={require('@/assets/images/user_placeholder.png')} // Placeholder for student photo
              style={styles.studentPhoto}
            />
          </View>

          {/* Student Details Section */}
          <View style={styles.studentDetailsSection}>
            <Text style={styles.studentName}>Luis Lopez</Text>
            <Text style={styles.studentRole}>Estudiante</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Cédula</Text>
              <Text style={styles.detailValue}>: 905750250</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Fecha de Nacimiento</Text>
              <Text style={styles.detailValue}>: 19/05/2000</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Blood</Text>
              <Text style={styles.detailValue}>: A+</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailValue}>: 1201248510</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>E-mail</Text>
              <Text style={styles.detailValue}>: email@yourdomin.com</Text>
            </View>
          </View>

          {/* Bottom Blue Section of Card */}
          <View style={styles.cardBottomBlueSection}>
            <Image
              source={require('@/assets/images/logo_uce.png')}
              style={styles.cardBottomLogo}
              resizeMode="contain"
            />
          </View>

          {/* Terms and Conditions Section */}
          <View style={styles.termsAndConditionsSection}>
            <Text style={styles.termsTitle}>TERMS AND CONDITIONS</Text>
            <View style={styles.termItem}>
              <View style={styles.bullet} />
              <Text style={styles.termText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
              </Text>
            </View>
            <View style={styles.termItem}>
              <View style={styles.bullet} />
              <Text style={styles.termText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
              </Text>
            </View>
            <View style={styles.dateRow}>
              <Text style={styles.detailLabel}>Join Date</Text>
              <Text style={styles.detailValue}>: DD/MM/YEAR</Text>
            </View>
            <View style={styles.dateRow}>
              <Text style={styles.detailLabel}>Expire Date</Text>
              <Text style={styles.detailValue}>: DD/MM/YEAR</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#1F4287', // Dark blue
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 70, // Sufficient space for the title and back button
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: -24, // Adjust to center title despite back button
  },
  headerLogo: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  headerRedCurve: {
    position: 'absolute',
    bottom: -50, // Position this below the header to create the curve effect
    width: width * 1.5, // Wider for a flatter oval
    height: 100, // Height of the curve element
    backgroundColor: 'white',
    borderRadius: width * 0.75, // Half of width for perfect oval
    alignSelf: 'center',
    borderTopWidth: 10,
    borderColor: '#D32F2F',
    zIndex: 0, // Ensure it's behind the card
  },
  scrollViewContent: {
    paddingVertical: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  cardContainer: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginTop: -40, // Pull the card up to overlap the curve
  },
  cardTopBlueSection: {
    backgroundColor: '#1F4287',
    paddingTop: 30,
    paddingBottom: 70, // To make space for the student photo
    alignItems: 'center',
    position: 'relative',
    borderBottomLeftRadius: 50, // Curve bottom left
    borderBottomRightRadius: 50, // Curve bottom right
  },
  cardUniversityName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  studentPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    position: 'absolute',
    bottom: -50, // Half of height, to be centered on the curve
    backgroundColor: '#ccc', // Placeholder background
    alignSelf: 'center',
  },
  studentDetailsSection: {
    padding: 20,
    paddingTop: 60, // To account for the student photo
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  studentName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F4287',
    marginBottom: 5,
    textAlign: 'center',
    width: '100%',
  },
  studentRole: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#777',
    width: 90,
    textAlign: 'right',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'left',
    marginLeft: 5,
  },
  cardBottomBlueSection: {
    backgroundColor: '#1F4287',
    paddingVertical: 20,
    alignItems: 'center',
    borderTopLeftRadius: 50, // Curve top left
    borderTopRightRadius: 50, // Curve top right
    marginTop: 20, // Space after student details
  },
  cardBottomLogo: {
    width: 80,
    height: 80,
    tintColor: '#fff', // Make the logo white
  },
  termsAndConditionsSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  termsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F4287',
    marginBottom: 15,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1F4287',
    marginRight: 10,
    marginTop: 7, // Align bullet with text
  },
  termText: {
    flex: 1,
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
});
