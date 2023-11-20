import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APIURL = `https://rijarportal.onrender.com/api/auth/`;

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  // const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [timenow, settimenow] = useState(0);
  const [subbal, setsbal] = useState(0);
  const [dataTx, setTx] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(balance);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        const pass = await AsyncStorage.getItem("password");
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setEmail(parsedUserData);
          setPass(pass);
          FetchData(); // Call the FetchData function
          // getLoginCookies();
          FetchDataTx();
        }
      } catch (error) {
        // navigation.navigate("Get Started");
      }
    };

    loadUserData();
  }, []);

  useEffect(() => {
    FetchData(); // Call the FetchData function
    // getLoginCookies();
    FetchDataTx();
    // Call the getLoginCookies function
  }, [address, balance]);

  const FetchData = async () => {
    try {
      const response = await axios.get(`${APIURL}/address/${email}`);
      const { address, balance, sbal, timenow } = response.data;
      setAddress(address);
      setBalance(balance);
      setsbal(sbal);
      settimenow(timenow);
    } catch (error) {
      console.error("Error fetching user address:", error);
    }
    FetchDataTx();
    FetchuSERS();
  };

  const FetchuSERS = async () => {
    try {
      const response = await axios.get(
        `${APIURL}/userdata/SGSHHDGSGSHSHSJSJSKKSSGAGSH`
      );
      const datax = response.data;
      setUserdata(datax);
    } catch (error) {
      console.error("Error fetching user address:", error);
    }
    FetchDataTx();
  };
  const FetchDataTx = async () => {
    try {
      const response = await axios.get(`${APIURL}/tx/${email}`);
      const data = response.data;
      // setAddress(address);
      setTx(data);
    } catch (error) {
      console.error("Error fetching user address:", error);
    }
  };
  const ClearData = async () => {
    setTx([]);
    setEmail("");
    setAddress("");
    setBalance(0);
    setsbal(0);
    settimenow(0);
  };
  return (
    <UserContext.Provider
      value={{
        email,
        address,
        balance,
        setEmail,
        FetchData,
        FetchDataTx,
        dataTx,
        setTx,
        subbal,
        ClearData,
        timenow,
        currentBalance,
        setCurrentBalance,
        userdata,
        FetchuSERS,
        passowrd
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
