import React, { Component, useContext, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import Cards from "../Home/Cards";

import { useNavigation } from "@react-navigation/native";
// import { UserContext } from "../../contexts/user.context";

import CardUser from "./Cards";
import { UserContext } from "../../contexts/user.context";

export default function Admin() {
  const { FetchuSERS, userdata } = useContext(UserContext);
  // const navigation = useNavigation();
  useEffect(() => {
    FetchuSERS();
  }, []);

  const changeUser = async (a, b, c) => {
    try {
      const response = await axios.post(
        "https://rijarportal.onrender.com/api/auth/modify",
        {
          _id: a,
          key: "vvvvxxxmsmskdklflg",
          change: c,
        }
      );
      console.log("Disabled successful!", response.data);
      Alert.alert("Success", "Disabled!", [{ text: "OK" }]);
      // navigation.navigate("Sign In");
      FetchuSERS();

      // Handle successful registration, e.g., navigate to another screen.
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed.", [{ text: "OK" }]);
    }
  };

  return (
    <View style={{ padding: 30 }}>
      <Text>Nnnn</Text>
      <FlatList
        data={userdata}
        renderItem={({ item }) => (
          // <Text>Testing</Text>
          <CardUser item={item} />
        )}
        keyExtractor={(item) => item.job_id}
        // contentContainerStyle={{ columnGap: SIZES.medium }}
        vertical
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
