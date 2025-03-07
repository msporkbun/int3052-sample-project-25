import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67c0eae7002e16dea328") // Replace with your project ID
  .setPlatform("ait.edu.apptest"); // Replace with your platform name

export const account = new Account(client);
export const databases = new Databases(client);
