import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation})=>({
            title: "Tus tareas",
            headerStyle: { backgroundColor: "#ADD8E6" },
            headerTitleStyle: { color: "#000000" },
            headerRight: ()=>(
              <TouchableOpacity onPress={()=> navigation.navigate("FormScreen")}>
                <Text style={{ color: "#000000", fontSize: 15, marginEnd: 10 }}>Crear Tarea</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{
            title: "Crea Una Nueva Tarea",
            headerStyle: { backgroundColor: "#ADD8E6" },
            headerTitleStyle: { color: "#000000" },
            headerTintColor: "#000000"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
