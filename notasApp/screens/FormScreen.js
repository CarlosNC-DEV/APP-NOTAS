import { TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Layouts from "../components/Layouts";
import { crearTareaApi, traerTareaUnica, editarTareaApi } from "../apis";

const FormScreen = ({ navigation, route }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editando, setEditando] = useState(false);

  const nuevaTarea = async () => {
    try {
      if(!editando){
        const respuesta = await crearTareaApi({ titulo, descripcion });
        console.log(respuesta);
      }else{
        const respuesta = await editarTareaApi(route.params.id, titulo, descripcion );
        console.log(respuesta);
      }

      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Actualizando tarea" });
      setEditando(true);
      (async () => {
        const tarea = await traerTareaUnica(route.params.id);
        setTitulo(tarea.nombre);
        setDescripcion(tarea.descripcion);
      })();
    }
  }, []);

  return (
    <Layouts>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
        placeholder="Ingrese el titulo de la tarea"
      />

      <TextInput
        style={styles.input}
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
        placeholder="Ingrese la descripcion de la tarea"
      />

      {!editando ? (
        <TouchableOpacity style={styles.button_save}>
          <Text
            style={{ color: "white", textAlign: "center" }}
            onPress={() => nuevaTarea()}
          >
            Crear Tarea
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button_save}>
          <Text
            style={{ color: "white", textAlign: "center" }}
            onPress={() => nuevaTarea()}
          >
            Editar Tarea
          </Text>
        </TouchableOpacity>
      )}
    </Layouts>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    textAlign: "center",
    fontSize: 15,
  },
  button_save: {
    marginTop: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "black",
    fontSize: 15,
    width: "100%",
  },
});

export default FormScreen;
