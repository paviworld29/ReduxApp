import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={{ marginTop: 100, alignItems: "center" }}>
      <Text>Profile Screen</Text>
    {user ? (
  <Text>Welcome {user.name}</Text>
) : (
  <Text>No user logged in</Text>
)}

    </View>
  );
};

export default ProfileScreen;
