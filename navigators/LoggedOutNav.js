import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { createStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";
import EnterCode from "../screens/EnterCode";
import SettingUserName from "../screens/SettingUserName";
import SettingUserPassword from "../screens/SettingUserPassword";


const Stack = createNativeStackNavigator();

export default function LoggedOutNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
          component={Welcome}
        />
        <Stack.Screen 
        options={{
          headerTitle: "",
          headerTintColor : "white"
        }}
        name="LogIn" component={LogIn} />
        <Stack.Screen
          options={{
            headerTitle: "이메일 주소 입력",
            headerTransparent: true ,
            headerTintColor: "black"
          }}
          name="CreateAccount"
          component={CreateAccount}
        />
        <Stack.Screen 
          options={{
            headerTitle: "인증코드 입력",
            headerTransparent: true ,
            headerTintColor: "black"
          }}
          name="EnterCode" component={EnterCode} />
        <Stack.Screen 
          options={{
          headerTitle: "이름 설정",
          headerTransparent: true ,
          headerTintColor: "black"
          }}
          name="SettingUserName" component= {SettingUserName} />
        <Stack.Screen 
          options={{
          headerTitle: "비밀번호 설정",
          headerTransparent: true ,
          headerTintColor: "black"
          }}
          name="SettingUserPassword" component= {SettingUserPassword} />

      </Stack.Navigator>
  );
}