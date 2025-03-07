import React from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }} // Sample image, replace with real user data
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Defar Gobeze</Text> {/* Updated Name */}
        <Text style={styles.profileEmail}>Davegbhonesty@gmail.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={16} color="white" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Details Section */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <View style={styles.infoRow}>
          <Icon name="user" size={18} color="#FD5F20" />
          <Text style={styles.infoText}>Defar Gobeze</Text> {/* Updated Name */}
        </View>

        <View style={styles.infoRow}>
          <Icon name="envelope" size={18} color="#FD5F20" />
          <Text style={styles.infoText}>Davegbhonesty@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="phone" size={18} color="#FD5F20" />
          <Text style={styles.infoText}>+251925401353</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="map-marker" size={20} color="#FD5F20" />
          <Text style={styles.infoText}>Addis Ababa, Ethiopia</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="lock" size={18} color="#FD5F20" />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="bell" size={18} color="#FD5F20" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="sign-out" size={18} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6", // Light gray background
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FD5F20",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: "#888",
  },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#FD5F20",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
  },
  editButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  optionText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
});

export default ProfileScreen;
