import React, {useEffect} from "react";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthLayoutTwo } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";


export default function SettingUserName( {navigation} ) {
  const goToSettingUserPassword = () => navigation.navigate("SettingUserPassword");

  const {register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("username", {
      required : true,
    });
  }, [register]);

  const onValid = (data) => {
    console.log(data);
 };  

  return (
    <AuthLayoutTwo>
      <TextInput
        autoCapitalize = "none"
        placeholder="이름을 입력해주세요."
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onChangeText = {(text) => setValue("username", text)}
        onSubmitEditing = {handleSubmit(onValid)}
      />
      <AuthButton text="다음" disabled={false} onPress={() => {navigation.navigate("SettingUserPassword"); handleSubmit(onValid);}} />
    </AuthLayoutTwo>
  );
}