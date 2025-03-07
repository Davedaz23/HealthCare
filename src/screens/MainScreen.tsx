import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1588422427-050e2728b59d', // Replace with real healthcare image
        }}
        style={styles.heroImage}
      />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to Your Health Hub</Text>
          <Text style={styles.heroDescription}>
            Discover the best hospitals, book appointments, and stay healthy with ease.
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Services or Features Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesContainer}>
          <ServiceCard
            title="Find Hospitals"
            description="Browse a variety of hospitals near you and view their details."
            icon="hospital-o"
          />
          <ServiceCard
            title="Make Appointments"
            description="Easily book appointments with doctors and specialists."
            icon="calendar-check-o"
          />
          <ServiceCard
            title="Emergency Care"
            description="Get quick access to emergency medical services."
            icon="ambulance"
          />
        </View>
      </View>
    </ScrollView>
  );
};

// Service Card Component
interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <View style={styles.serviceCard}>
      <Icon name={icon} size={40} color="#FD5F20" />
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDescription}>{description}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    position: 'relative',
    height: 400,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    right: '10%',
    transform: [{ translateY: -50 }],
    alignItems: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  heroButton: {
    backgroundColor: '#FD5F20',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  heroButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  servicesSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  serviceCard: {
    width: '30%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
});

export default MainScreen;
