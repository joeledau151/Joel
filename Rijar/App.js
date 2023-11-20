import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native"; // Import useNavigation
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome/Welcome";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Dashboard from "./screens/Dashboard/Dashboard";
import { UserProvider } from "./contexts/user.context";
import { TransitionSpecs } from "@react-navigation/stack";
import Admin from "./screens/Admin/Admin";
import Profile from "./screens/Profile/Profile";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/mb.ttf"),
    InterBold2: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/mr.ttf"),
    InterMedium: require("./assets/fonts/mr.ttf"),
    InterRegular: require("./assets/fonts/mr.ttf"),
    InterLight: require("./assets/fonts/mr.ttf"),
    InterLight2: require("./assets/fonts/Inter-Light.ttf"),
    InterThin: require("./assets/fonts/Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const fantasyTransition = {
    gestureDirection: "horizontal",
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current }) => ({
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [500, 0],
            }),
          },
        ],
      },
    }),
  };



  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            name="Get Started"
            component={Welcome}
            options={{ headerShown: false, ...fantasyTransition }}
          />
          <Stack.Screen
            name="Sign In"
            component={Login}
            options={{ headerShown: false, ...fantasyTransition }}
          />
          <Stack.Screen
            name="SignUp"
            component={Register}
            options={{ headerShown: false, ...fantasyTransition }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false, ...fantasyTransition }}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
            options={{ headerShown: false, ...fantasyTransition }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true, ...fantasyTransition }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
