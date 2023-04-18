import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemsTareas = ({ tareas, eliminarTarea }) => {
  const navigation = useNavigation();

  return (
    <View style={style.continer_tareas}>
      <TouchableOpacity
        style={{ width: "75%" }}
        onPress={() => navigation.navigate("FormScreen", {id: tareas._id})}
      >
        <Text style={{ color: "white" }}>{tareas.nombre}</Text>
        <Text style={{ color: "white" }}>{tareas.descripcion}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.button_eliminar}
        onPress={() => eliminarTarea(tareas._id)}
      >
        <Text style={{ color: "white" }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  continer_tareas: {
    width: "100%",
    backgroundColor: "black",
    padding: 20,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button_eliminar: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 12,
  },
});

export default ItemsTareas;
