import React, { useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import  { AuthLayoutTwo } from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput_Two } from "../components/auth/AuthShared";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const Logo = styled.Image`
  max-width: 30%;
  height: 100px;
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({ route: { params } }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      password: params?.password,
      username: params?.username,
    },
  });
  const emailRef = useRef();
  const passwordRef = useRef();
  const onCompleted = (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      isLoggedInVar(true);
    }
  };

  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };


  useEffect(() => {
    register("email")
    register("password")
  }, [register]);
  
  return (
    <AuthLayoutTwo>
      <Logo resizeMode="contain" source={require("../assets/logo1.png")} />
      <TextInput_Two
        value={watch("email")}
        ref = {emailRef}
        autoCapitalize = "none"
        placeholder="이메일을 입력해주세요."
        returnKeyType="next"
        placeholderTextColor="gray"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onSubmitEditing = {() => onNext(passwordRef)}
        onChangeText = {(text) => setValue("email", text)}
      />
      <TextInput_Two
        value={watch("password")}
        ref = {passwordRef}
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor="gray"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onSubmitEditing = {handleSubmit(onValid)}
        onChangeText = {(text) => setValue("password", text)}
      />
      <AuthButton
        text="로그인"
        loading={loading}
        disabled={!watch("email") || !watch("password")}
        onPress = { handleSubmit(onValid) }
      />
    </AuthLayoutTwo>
  );
}