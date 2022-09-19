import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../screens/colors";

const Button = styled.TouchableOpacity`
  background-color: ${colors.violet};
  padding: 13px 10px;
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;

`;

export default function AuthButton({ onPress, disabled, text, loading }) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? (<ActivityIndicator color="white" />) : (<ButtonText>{text}</ButtonText>) }
    </Button>
  );
}