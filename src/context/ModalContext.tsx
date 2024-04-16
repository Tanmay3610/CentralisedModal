"use client"

import React from "react";
import { 
  ModalContextType,
  ModalConfig, 
  ModalVerticalPosition, 
  ModalHorizontalPosition,
  ModalCloseButtonVerticalPosition,
  ModalCloseButtonHorizontalPosition,
  ModalWrapperAnimations,
  ModalOverlayAnimation
} from "@/interface/Modal";

const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const defaultBackgroundColor = "white";

const defaultModalProperties: ModalConfig = {
  overlayConfig: {
    backgroundColor: defaultBackgroundColor,
    opacity: 0.5,
    modalAnimationConfig: {
      animationType: ModalOverlayAnimation.NONE,
      animationDurationInSeconds: 0
    }
  },
  wrapperConfig: {
    verticalAlignment: ModalVerticalPosition.CENTER,
    horizontalAlignment: ModalHorizontalPosition.CENTER,
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.NONE,
      animationDurationInSeconds: 0
    }
  },
  contentConfig:{
    backgroundColor: defaultBackgroundColor,
    padding: 10,
    borderRadius: 5
  }
}

const ModalProvider = ({ children }: {children: React.ReactNode}) => {
  const [modal, setModal] = React.useState<boolean>(false);
  
  let modalProperties: React.MutableRefObject<ModalConfig> = React.useRef(defaultModalProperties);
  let onCloseHandler: any = () => {};
  let content: React.MutableRefObject<React.ReactNode> = React.useRef(<></>);
  let resultObject: React.MutableRefObject<any> = React.useRef({});

  const openModal = ({
    modalContent, 
    modalConfig
  }: {
    modalContent: React.ReactNode,
    modalConfig: ModalConfig
  }): void => {
    modalProperties.current = {
      overlayConfig: {
        ...defaultModalProperties.overlayConfig,
        ...modalConfig.overlayConfig,
        modalAnimationConfig: {
          ...defaultModalProperties.overlayConfig!.modalAnimationConfig,
          ...modalConfig.overlayConfig?.modalAnimationConfig
        }, 
      },
      wrapperConfig: {
        ...defaultModalProperties.wrapperConfig,
        ...modalConfig.wrapperConfig,
        modalAnimationConfig: {
          ...defaultModalProperties.wrapperConfig!.modalAnimationConfig,
          ...modalConfig.wrapperConfig?.modalAnimationConfig
        }
      },
      contentConfig: {
        ...defaultModalProperties.contentConfig,
        ...modalConfig.contentConfig
      }
    };
    content.current = modalContent;
    setModal(true);
  }

  const closeModal = (result: any) => {
    resultObject.current = result;
    onCloseHandler();
    setModal(false);
  }

  // setResult fn

  const onCloseModal = (handlerFunction: any) => {
    onCloseHandler = () => handlerFunction(resultObject.current);
  }

  const sharedObject = React.useMemo(() => ({
    modal, 
    openModal, 
    closeModal,
    onCloseModal,
    content: content.current,
    modalConfig: modalProperties.current}), [
      modal
    ]);

    // bottomSheet
    // Dialog
    // Sidebar

    // Framer Motion (React Lib)

  return (
    <ModalContext.Provider value={sharedObject}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextType => {
  return React.useContext(ModalContext)
};

export default ModalProvider;
