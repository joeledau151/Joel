import React, { Component, useContext, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import Cards from "./Cards";
import TRX from "../../assets/trx.png";
import BNB from "../../assets/bnb.png";
import USDT from "../../assets/usdt.png";

import Ionicons from "react-native-vector-icons/FontAwesome";
import { UserContext } from "../../contexts/user.context";

const Lastest = ({}) => {
  const { email, balance, FetchData } = useContext(UserContext);

  // const [email, setUserEmail] = useState("");
  const [data, setData] = useState([
    {
      name: "USDT",
      full: "Stable Coin",
      img: USDT,
      id: 1,
      amount: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          
        }}
      >
        <Text style={styles.text}> Assets </Text>
        <Ionicons
          name="refresh"
          size={12}
          color="#900"
          style={styles.btnicon}
          onPress={() => FetchData()}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          // <Text>Testing</Text>
          <Cards item={item} balance={balance} />
        )}
        keyExtractor={(item) => item.job_id}
        // contentContainerStyle={{ columnGap: SIZES.medium }}
        vertical
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    top: 10,
  },
  text: {
    // padding: 20,
    fontFamily: "InterLight",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  btnicon: {
    // margin: 30,
  },
});

export default Lastest;
