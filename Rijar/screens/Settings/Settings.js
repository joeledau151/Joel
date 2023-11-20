import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/FontAwesome";

const Settings = () => {
  const navigation = useNavigation();

  const handleLinkPress = () => {
    Linking.openURL("https://rijar.org/");
  };

  const handleLinkPress3 = () => {
    Linking.openURL("https://rijar.org/privacy");
  };
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={{ fontFamily: "InterBold", textAlign: "center" }}>
          {" "}
          General Settings{" "}
        </Text>

        <TouchableOpacity
          style={styles.section}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={{ width: "100%", fontFamily: "InterLight" }}>
            Profile
          </Text>

          <Ionicons name="chevron-right" size={12} color="#900" />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={{ width: "100%", fontFamily: "InterLight" }}>
            Privacy Policy
          </Text>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={handleLinkPress}
          >
            <Ionicons name="chevron-right" size={12} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={{ width: "100%", fontFamily: "InterLight" }}>
            About Rijar
          </Text>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={handleLinkPress3}
          >
            <Ionicons name="chevron-right" size={12} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    top: 10,
    flex: 1,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default Settings;
