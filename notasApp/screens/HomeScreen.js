import { View, Text } from "react-native";
import React from "react";
import Layouts from "../components/Layouts";

import ListaTareas from '../components/ListaTareas';

const HomeScreen = () => {
  return (
    <Layouts>
      <ListaTareas/>
    </Layouts>
  );
};

export default HomeScreen;
