import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Profile from "../../components/Profile"; // Import the Profile component
import { Stack } from "expo-router";
import SearchBar from "./../../components/SearchBar";
import { useThemeColor } from "./../../hooks/useThemeColor";

const NavigationItem = ({ label, colorScheme, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.navigationItem,
        { backgroundColor: colorScheme === "#121212" ? "black" : "white" },
      ]}
      onPress={onPress}
    >
      <Text style={{ color: colorScheme === "#121212" ? "white" : "black" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const {
    themeColor,
    setThemeColor,
    colorScheme,
    setColorScheme,
    toggleColorMode,
  } = useThemeColor();

  const [profileData, setProfileData] = useState({
    username: "John Doe",
    bio: "Hello, I'm John Doe!",
    profilePhoto: null,
  });

  const onUpdateProfile = (newProfileData, newProfilePhoto) => {
    setProfileData({ ...newProfileData, profilePhoto: newProfilePhoto });
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colorScheme },
          headerLeft: () => <SearchBar />,
          headerTitle: () => (
            <Text
              className="font-boldFont text-xl"
              style={{
                color: `${colorScheme === "#121212" ? "white" : "black"}`,
              }}
            >
              Account
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
      <ScrollView>
        <View style={styles.content}>
          <Profile
            profileData={profileData}
            onUpdateProfile={onUpdateProfile}
          />

          <NavigationItem label="Profile" colorScheme={colorScheme} />
          <NavigationItem label="Settings" colorScheme={colorScheme} />
          <NavigationItem
            label="Transaction History"
            colorScheme={colorScheme}
          />
          <NavigationItem
            label="Change Password"
            colorScheme={colorScheme}
            onPress={handleLogout}
          />
          <NavigationItem
            label="Logout"
            colorScheme={colorScheme}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  navigationItem: {
    marginVertical: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#bd6379",
    width: "90%",
    alignItems: "flex-start",
    shadowColor: "#bd6379",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.73,
    shadowRadius: 5,
    elevation: 10,
  },
});
