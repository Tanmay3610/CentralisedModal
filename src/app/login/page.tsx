"use client";
import React, { FormEvent } from "react";
import styled from 'styled-components';
import { useRouter } from "next/navigation";

import {useModal} from "@/utils/useModal"
import { HeightType, ModalOverlayAnimation } from "@/utils/constants";
import Modal from "@/components/TestModal";

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
  background-color: rgb(255,0,0);
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
  const { openBottomSheet, openModal } = useModal();
  const router = useRouter();
  
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isModal) {
      openBottomSheet({
        content: {
          component: <Modal />
        }, 
        modalConfig: {
          overlayConfig: {
            backgroundColor: "255,45,0",
            modalAnimationConfig: {
              animationType: ModalOverlayAnimation.FADE_IN,
              animationDurationInSeconds: 1
            }
          },
          wrapperConfig: {
            backdropClose: true,
            modalAnimationConfig: {
              animationDurationInSeconds: 1,
            }
          },
          contentConfig: {
            backgroundColor: "255,0,0",
            padding: 15,
            heightType: HeightType.CUSTOM,
            height: 40,
            topRightBorderRadius: 50,
            topLeftBorderRadius: 50
          }
      }});
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