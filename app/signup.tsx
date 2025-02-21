import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Signup</Text>
        <Link href="/">
          <Text>Go to Login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEF9F4",
  },
  form: {
    marginTop: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
