// name of the file can be anything
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/signup">
        <Text>Signup</Text>
      </Link>
    </View>
  );
}
