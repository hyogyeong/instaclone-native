import React, {useEffect} from "react";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthLayoutTwo } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";

export default function EnterCode(  {navigation} ) {
  const goToSettingUserName = () => navigation.navigate("SettingUserName");

  const {register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("code", {
      required : true,
    });
  }, [register]);

  const onValid = (data) => {
    console.log(data);
 };  

  return (
    <AuthLayoutTwo>
      <TextInput
        placeholder="인증코드를 입력해주세요."
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onChangeText = {(text) => setValue("code", text)}
        onSubmitEditing = {handleSubmit(onValid)}
      />
      <AuthButton text="다음" disabled={false} onPress={() => {navigation.navigate("SettingUserName"); handleSubmit(onValid);}} />
    </AuthLayoutTwo>
  );
}