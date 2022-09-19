import React from "react";
import styled from "styled-components/native";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0px 50px;
`;

const Container_Two = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 0px 50px;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
    style={{ flex: 1 }}
    onPress={dismissKeyboard}
    disabled = {Platform.OS === "web"}
    >
      <Container>
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}

export function AuthLayoutTwo({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
    style={{ flex: 1 }}
    onPress={dismissKeyboard}
    disabled={Platform.OS === "web"}
    >
      <Container_Two>
        {children}
      </Container_Two>
    </TouchableWithoutFeedback>
  );
}
