import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchBar from "./../../components/SearchBar";
import Products from "./../../components/Products";
import { useThemeColor } from "../../hooks/useThemeColor";

const products = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    price: "6,000",
    name: "Product 1",
    description:
      "Incididunt duis nulla enim voluptate ad mollit voluptate labore nulla incididunt aute. Consequat Lorem non ipsum sint et est qui cupidatat et do anim cupidatat. Do labore occaecat ipsum aute eiusmod esse anim dolore ipsum. Nulla eiusmod ea incididunt labore ex amet dolore irure. Cupidatat proident nisi sit ut est ut labore duis aliquip. Sint Lorem eiusmod eu sint esse duis.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "10,000",
    name: "Product 2",
    description:
      "Irure mollit enim eiusmod consectetur et deserunt sunt nostrud. Aliquip minim labore velit aliquip culpa voluptate id non eiusmod. Veniam aliqua aliqua proident exercitation labore nisi laborum esse. Et irure quis id tempor proident ea ad velit. Reprehenderit exercitation qui ad eiusmod labore id nulla laboris ea ad id laboris tempor.",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    price: "6,000",
    name: "Product 3",
    description:
      "Incididunt duis nulla enim voluptate ad mollit voluptate labore nulla incididunt aute. Consequat Lorem non ipsum sint et est qui cupidatat et do anim cupidatat. Do labore occaecat ipsum aute eiusmod esse anim dolore ipsum. Nulla eiusmod ea incididunt labore ex amet dolore irure. Cupidatat proident nisi sit ut est ut labore duis aliquip. Sint Lorem eiusmod eu sint esse duis.",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "10,000",
    name: "Product 4",
    description:
      "Irure mollit enim eiusmod consectetur et deserunt sunt nostrud. Aliquip minim labore velit aliquip culpa voluptate id non eiusmod. Veniam aliqua aliqua proident exercitation labore nisi laborum esse. Et irure quis id tempor proident ea ad velit. Reprehenderit exercitation qui ad eiusmod labore id nulla laboris ea ad id laboris tempor.",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    price: "6,000",
    name: "Product 5",
    description:
      "Incididunt duis nulla enim voluptate ad mollit voluptate labore nulla incididunt aute. Consequat Lorem non ipsum sint et est qui cupidatat et do anim cupidatat. Do labore occaecat ipsum aute eiusmod esse anim dolore ipsum. Nulla eiusmod ea incididunt labore ex amet dolore irure. Cupidatat proident nisi sit ut est ut labore duis aliquip. Sint Lorem eiusmod eu sint esse duis.",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "10,000",
    name: "Product 6",
    description:
      "Irure mollit enim eiusmod consectetur et deserunt sunt nostrud. Aliquip minim labore velit aliquip culpa voluptate id non eiusmod. Veniam aliqua aliqua proident exercitation labore nisi laborum esse. Et irure quis id tempor proident ea ad velit. Reprehenderit exercitation qui ad eiusmod labore id nulla laboris ea ad id laboris tempor.",
  },
];

let height = Dimensions.get("window").height;
// let height = Dimensions.get("window").height;
height = height - 125;

export default function Store() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    themeColor,
    setThemeColor,
    colorScheme,
    setColorScheme,
    toggleColorMode,
  } = useThemeColor();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colorScheme },
          headerLeft: () => <SearchBar />,
          headerRight: () => (
            <View className="mr-6">
              <FontAwesome5 name="cart-plus" size={24} color="#7b091c" />
            </View>
          ),
          headerTitle: () => (
            <Text
              className="font-boldFont text-xl"
              style={{
                color: `${colorScheme === "#121212" ? "white" : "#7b091c"}`,
              }}
            >
              Store
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
      <View className="h-full" style={{ backgroundColor: colorScheme }}>
        <Products products={products} />
      </View>
    </SafeAreaView>
  );
}
