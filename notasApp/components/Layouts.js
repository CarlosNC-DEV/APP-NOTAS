import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Layouts = ({ children }) => {
  return (
    <View style={styleLatouts.containerLayout}>
      <StatusBar barStyle="dark-content" backgroundColor={"#ADD8E6"} translucent={true} />
      {children}
    </View>
  );
};

const styleLatouts = StyleSheet.create({
  containerLayout: {
    backgroundColor: "#ADD8E6",
    flex: 1,
    padding: 12,
    alignItems: "center"
  }
});

export default Layouts;
