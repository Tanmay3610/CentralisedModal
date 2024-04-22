"use client";
import React, { FormEvent } from "react";
import styled from 'styled-components';
import { useRouter } from "next/navigation";

import { useModal } from "@/context/ModalContext";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  overflow: hidden;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: red;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  width: 50%;
  margin-top: 10px;
`;

export default function Login({initialEmail, isModal}: {initialEmail: string, isModal: Boolean}) {
  const [details, setDetails] = React.useState<{email: string, password: string}>({email: initialEmail, password: ""});
  const { closeModal } = useModal();
  const router = useRouter();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isModal) {
      closeModal(details);
    } else {
      router.push('/home');
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetails({...details, email: e.target.value});
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetails({...details, password: e.target.value});
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmitHandler}>
        <Input placeholder="Email" value={details.email} onChange={onChangeEmail} />
        <Input type="password" placeholder="Password" value={details.password} onChange={onChangePassword} />
        <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
    </BoxContainer>
  );
}