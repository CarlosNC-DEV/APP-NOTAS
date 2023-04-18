import { FlatList, StyleSheet, RefreshControl } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { traerTarea, eliminarTareaApi } from "../apis";
import ItemsTareas from './ItemsTareas';


const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const isFocus = useIsFocused();

  useEffect(() => {
    getTareas();
  }, [isFocus]);

  const getTareas = async () => {
    const respuesta = await traerTarea();
    setTareas(respuesta);
  };

  const eliminarTarea = async(id)=>{
    await eliminarTareaApi(id);
    await getTareas();
  }

  const renderItems = ({ item }) =>(
    <ItemsTareas tareas={item} eliminarTarea={eliminarTarea}/>
  );

  const onRefresh = React.useCallback(async () => {
    setRefresh(true);
    await getTareas();
    setRefresh(false);
  });

  return (
    <FlatList
      style={styles.containerList}
      data={tareas}
      keyExtractor={(item) => item._id}
      renderItem={renderItems}
      refreshControl={
        <RefreshControl
        refreshing={refresh}
        colors={["black"]}
        onRefresh={onRefresh}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  containerList:{
    width: "100%"
  }
})

export default ListaTareas;
