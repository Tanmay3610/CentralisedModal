"use client"

import React from "react";

import Content from "./Content";
import Wrapper from "./Wrapper";
import Overlay from "./Overlay";

import { useModal } from "@/context/ModalContext";

const Modal: React.FC = () => {
  const {
    modal, 
    content, 
    closeModal, 
    modalConfig: {
      overlayConfig,
      wrapperConfig,
      contentConfig,
    }
  } = useModal();
  console.log("Tanmay")
  if (modal) {
    return (
      <Overlay overlayConfig={overlayConfig!}>
        <Wrapper wrapperConfig={wrapperConfig!} closeModal={closeModal}>
          <Content contentConfig={contentConfig!}>
            {content}
          </Content>
        </Wrapper>
      </Overlay>
    )
  }

  return null;
}

export default Modal;