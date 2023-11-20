import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import React, { useContext } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Iconaw from "react-native-vector-icons/FontAwesome"; // Import the Font Awesome icon library
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { UserContext } from "../../contexts/user.context";
import Admin from "../Admin/Admin";
import Settings from "../Settings/Settings";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard() {
  const navigation = useNavigation();

  const Tab = createBottomTabNavigator();
  const { email } = useContext(UserContext);

  const handleLinkPress = () => {
    Linking.openURL("https://rijar.org/contact");
  };
  async function logout() {
    navigation.navigate("Get Started");
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Fixed}>
          {/* Notification Icon */}
          <View style={styles.Fixed2}>
            <TouchableOpacity onPress={() => logout()}>
              <Icon name="home" color={"grey"} size={15} />
            </TouchableOpacity>
            {/* <Text style={styles.text}>George Lawr</Text> */}
          </View>
          <View style={styles.Fixed2}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={handleLinkPress}
            >
              <Icon name="headphones" color={"grey"} size={15} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
              <Iconaw name="bank" color={"grey"} size={26} />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontFamily: "InterSemiBold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Deposit}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="wallet" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Withdraw"
          component={Withdraw}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="download" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  Fixed: {
    backgroundColor: "white",
    padding: 20,
    paddingTop: "10%",
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    paddingTop: 8,
    paddingLeft: 20,
    fontFamily: "InterBold",
  },
  Fixed2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
