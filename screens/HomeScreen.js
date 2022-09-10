import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import GlobalStyles from "../GlobalStyles";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import { SearchBar } from "react-native-screens";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

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
    <SafeAreaView className="bg-white pt-5" style={GlobalStyles.droidSafeArea}>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 p-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current location
            {/* <Icons.ChevronDownIcon size={20} color="#00CCBB" /> */}
          </Text>
        </View>
        {/* <Icons.UserIcon size={35} color="#00CCBB" /> */}
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          {/* <MagnifyingGlassIcon color="gray" size={20} /> */}
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
          {/* <Icons.AdjustmentsVerticalIcon color="#00CCBB" /> */}
        </View>
      </View>
      {/* body */}
      <ScrollView className="bg-gray-50">
        {/* categories */}
        <Categories />
        {/* featured rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements for our patners"
        />
        {/* tasty discount */}
        <FeaturedRow
          id="1234"
          title="tasty discount"
          description="Paid placements for our patners"
        />
        {/* offers near you */}
        <FeaturedRow
          id="12345"
          title="offers near you"
          description="Paid placements for our patners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
