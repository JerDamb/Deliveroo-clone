import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import GlobalStyles from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    //masque la barre de navigation
    navigation.setOptions({
      headerShown: false,
      headerTitle: "CLONE DE DELIVEROO",
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text className="text-red-500">HomeScreen</Text>
      {/* header */}
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
