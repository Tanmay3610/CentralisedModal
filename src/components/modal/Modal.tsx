"use client"

import React from "react";

import Content from "./Content";
import Wrapper from "./Wrapper";
import Overlay from "./Overlay";

import { AnimatePresence } from 'framer-motion';

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
    console.log("Modal Rendered");
    return (
      <AnimatePresence>
        {modal && (
          <>
            <Overlay overlayConfig={overlayConfig!} />
            <Wrapper 
              wrapperConfig={wrapperConfig!} 
              closeModal={closeModal} 
              widthType={contentConfig!.widthType!}
              width={contentConfig!.width!}
              heightType={contentConfig!.heightType!}
              height={contentConfig!.height!}
              >
              <Content contentConfig={contentConfig!}>
                {content}
              </Content>
            </Wrapper>
          </>
        )}
       </AnimatePresence>
    )
}

export default Modal;