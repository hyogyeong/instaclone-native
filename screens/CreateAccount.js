import React, {useEffect} from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthLayoutTwo } from "../components/auth/AuthLayout";
import { TextInput} from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";

const goToEnterCode = () => navigation.navigate("EnterCode");
 const CREATE_ACCOUNT_MUTATION = gql`
 mutation createAccount(
   $email: String!
 ) {
   createAccount(
     email: $email
   ) {
     ok
     error
   }
 }
`;

export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data) => {
    const {
      createAccount: { ok },
    } = data;
    const { email} = getValues();
    if (ok) {
      navigation.navigate("EnterCode", {
        email
      });
    }
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );

  useEffect(() => {
    register("email", {
      required : true,
    });
  }, [register]);

  const onValid = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    } 
 };  

  return (
    <AuthLayoutTwo>
      <TextInput
        autoCapitalize = "none"
        placeholder="이메일을 입력해주세요."
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: '#E5E5E5', width: "100%" }}
        onChangeText = {(text) => setValue("email", text)}
        onSubmitEditing = {handleSubmit(onValid)}
      />
      <AuthButton text="다음" disabled={false} onPress= { () => {navigation.navigate("EnterCode"); handleSubmit(onValid);}  } />
    </AuthLayoutTwo>
  );
}
