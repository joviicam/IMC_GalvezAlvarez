import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import FormScreen from '../screens/FormScreen'
import DataScreen from '../screens/DataScreen'

const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="LoginS" component={LoginScreen} 
                options={{
                    title: "Login",
                    headerShown: false
                }} />
                <Stack.Screen name="FormS" component={FormScreen}
                    options={{
                        title: "Formulario",
                    }}
                />
                <Stack.Screen name="DataS" component={DataScreen} options={{ title: "Datos" }} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({})