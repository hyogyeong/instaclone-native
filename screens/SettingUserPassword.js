import React, {useEffect} from "react";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthLayoutTwo } from "../components/auth/AuthLayout";
import { TextInput} from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";

export default function SettingUserPassword() {

 const {register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("password", {
      required : true,
    });
  }, [register]);

  const onValid = (data) => {
    console.log(data);
 };  

  return (
    <AuthLayoutTwo>
      <TextInput
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onChangeText = {(text) => setValue("password", text)}
        onSubmitEditing = {handleSubmit(onValid)}
      />
      <AuthButton text="다음" disabled={false} onPress={handleSubmit(onValid)} />
    </AuthLayoutTwo>
  );
}