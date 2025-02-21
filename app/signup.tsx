import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/">
        <Text>back</Text>
      </Link>
    </View>
  );
}
