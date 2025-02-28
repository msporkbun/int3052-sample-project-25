import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormLabel } from "@/components/FormLabel";

export default function Signup() {
  // implement the signup logic here
  // const [client, setClient] = useState(new Client()); using useState to set the client
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  // useEffect(() => {}, []);
  useEffect(() => {
    // check password length
    if (password.length >= 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Sign up for an account</Text>
        <FormLabel color="black" bg="white" text="Email" />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />

        <FormLabel color="black" bg="transparent" text="Password" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
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
    backgroundColor: "white",
  },
  form: {
    marginTop: 50,
    marginHorizontal: 40,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
});
