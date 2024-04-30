"use client"

import React from "react";
import Content from "./Content";
import Wrapper from "./Wrapper";
import Overlay from "./Overlay";

import { AnimatePresence } from 'framer-motion';

import ModalProvider from "@/Context/Modal/Provider";
import {useModal} from "@/utils/useModal"

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
            <Overlay overlayConfig={overlayConfig!} verticalAlign={wrapperConfig?.verticalAlignment!} horizontalAlign={wrapperConfig?.horizontalAlignment!}>
              <Wrapper
                wrapperConfig={wrapperConfig!} 
                closeModal={closeModal}
                widthType={contentConfig!.widthType!}
                width={contentConfig!.width!}
                heightType={contentConfig!.heightType!}
                height={contentConfig!.height!}
                >
                <Content contentConfig={contentConfig!} closeModal={closeModal}>
                  <ModalProvider>
                    <Modal />
                    {content}
                  </ModalProvider>
                </Content>
              </Wrapper>
            </Overlay>
          </>
        )}
      </AnimatePresence>
    )
}

export default Modal;