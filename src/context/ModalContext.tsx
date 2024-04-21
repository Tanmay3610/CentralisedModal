"use client"

import React from "react";

import routeMap from "@/routeConfig";
import { ModalTypes, SlideAnimationDirection, ModalHorizontalPosition } from "@/constants";
import {
  ModalContextType,
  ModalConfig,
  BottomSheetConfig,
  DialogBoxConfig,
  SideBarConfig,
  OpenModalParameter
} from "@/interface/Modal";
import { 
  defaultBottomSheetProperties, 
  defaultDialogBoxProperties, 
  defaultModalProperties, 
  defaultSidebarProperties 
} from "./defaultContextValues";
import { RouteProps } from "@/interface/RouteConfig";

const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const fillDefaultValue = ({type, modalConfig}:{type: ModalTypes, modalConfig: ModalConfig | BottomSheetConfig | DialogBoxConfig | SideBarConfig}) : ModalConfig => {
  let defaultValue: ModalConfig | null = null;
  switch (type) {
    case ModalTypes.MODAL:
      defaultValue = defaultModalProperties;
      break;
    case ModalTypes.BOTTOM_SHEET:
      defaultValue = defaultBottomSheetProperties;
      break;
    case ModalTypes.DIALOG_BOX:
      defaultValue = defaultDialogBoxProperties;
      break;
    case ModalTypes.SIDE_BAR:
      defaultValue = defaultSidebarProperties;
      if ((modalConfig as SideBarConfig).wrapperConfig?.horizontalAlignment) {
        defaultValue!.wrapperConfig!.modalAnimationConfig!.slideAnimationDirection = (modalConfig as SideBarConfig).wrapperConfig!.horizontalAlignment === ModalHorizontalPosition.RIGHT 
          ? SlideAnimationDirection.RIGHT_LEFT 
          : SlideAnimationDirection.LEFT_RIGHT
      }
      break;
    default:
      defaultValue = {}
  }

  return {
    overlayConfig: {
      ...defaultValue.overlayConfig,
      ...modalConfig.overlayConfig,
      modalAnimationConfig: {
        ...defaultValue.overlayConfig!.modalAnimationConfig,
        ...modalConfig.overlayConfig?.modalAnimationConfig
      }, 
    },
    wrapperConfig: {
      ...defaultValue.wrapperConfig,
      ...modalConfig.wrapperConfig,
      modalAnimationConfig: {
        ...defaultValue.wrapperConfig!.modalAnimationConfig,
        ...modalConfig.wrapperConfig?.modalAnimationConfig,
      }
    },
    contentConfig: {
      ...defaultValue.contentConfig,
      ...modalConfig.contentConfig
    }
  };
}

const ModalProvider = ({ children }: {children: React.ReactNode}) => {
  const [modal, setModal] = React.useState<boolean>(false);
  
  let routeKey: React.MutableRefObject<string> = React.useRef("");
  let modalProperties: React.MutableRefObject<ModalConfig> = React.useRef(defaultModalProperties);
  let onCloseHandler: any = () => {};
  let content: React.MutableRefObject<React.ReactNode> = React.useRef(<></>);
  let resultObject: React.MutableRefObject<any> = React.useRef({});

  const openModal = ({
    content: modalContent, 
    contentUrl,
    urlComponentProps,
    modalConfig
  }: OpenModalParameter<ModalConfig>
  ): void => {
    if (contentUrl) {
      const Component: RouteProps = routeMap[contentUrl];
      content.current = <Component.component  {...urlComponentProps} modalProps = {Component.params}/>;
    } else {
      content.current = modalContent;
    }
    modalProperties.current = fillDefaultValue({type: ModalTypes.MODAL, modalConfig});
    setModal(true);
  }

  const openBottomSheet = ({
    content: modalContent, 
    contentUrl,
    urlComponentProps,
    modalConfig
  }: OpenModalParameter<BottomSheetConfig>
  ): void => {
    if (contentUrl) {
      const Component: RouteProps = routeMap[contentUrl];
      content.current = <Component.component  {...urlComponentProps} modalProps = {Component.params}/>;
    } else {
      content.current = modalContent;
    }
    modalProperties.current = modalProperties.current = fillDefaultValue({type: ModalTypes.BOTTOM_SHEET, modalConfig});
    setModal(true);
  }

  const openDialogBox = ({
    content: modalContent,
    contentUrl,
    urlComponentProps,
    modalConfig
  }: OpenModalParameter<DialogBoxConfig>
  ): void => {
    if (contentUrl) {
      const Component: RouteProps = routeMap[contentUrl];
      content.current = <Component.component  {...urlComponentProps} modalProps = {Component.params}/>;
    } else {
      content.current = modalContent;
    }
    modalProperties.current = modalProperties.current = fillDefaultValue({type: ModalTypes.DIALOG_BOX, modalConfig});
    setModal(true);
  }

  const openSideBar = ({
    content: modalContent,
    contentUrl,
    urlComponentProps,
    modalConfig
  }: OpenModalParameter<SideBarConfig>
  ): void => {
    if (contentUrl) {
      const Component: RouteProps = routeMap[contentUrl];
      content.current = <Component.component  {...urlComponentProps} modalProps = {Component.params}/>;
    } else {
      content.current = modalContent;
    }
    modalProperties.current = modalProperties.current = fillDefaultValue({type: ModalTypes.SIDE_BAR, modalConfig});
    setModal(true);
  }

  const closeModal = (result: any | null) => {
    if (result) {
      resultObject.current = result;
    }
    onCloseHandler();
    setModal(false);
  }

  const setResult = (result: any) => {
    console.log(result);
    resultObject.current = result;
  }

  const onCloseModal = (handlerFunction: any) => {
    onCloseHandler = () => handlerFunction(resultObject.current);
  }

  const sharedObject = React.useMemo(() => ({
    modal, 
    openModal,
    openBottomSheet,
    openDialogBox,
    openSideBar,
    closeModal,
    routeKey: routeKey.current,
    onCloseModal,
    content: content.current,
    modalConfig: modalProperties.current,
    setResult
  }), [
      modal
    ]);

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
