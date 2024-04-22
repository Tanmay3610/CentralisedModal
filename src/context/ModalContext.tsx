"use client"
import React from "react";

import { routeMap } from "@/routeConfig";
import { ModalTypes, SlideAnimationDirection, ModalHorizontalPosition } from "@/constants";
import { IModalConfig } from "@/interface/Modal/Modal";
import { OpenModal, ModalContextType } from "@/interface/ModalContext";
import { DialogBoxConfig } from "@/interface/Modal/DialogBox";
import { SideBarConfig,  } from "@/interface/Modal/SideBar";
import { BottomSheetConfig } from "@/interface/Modal/BottomSheet";
import { 
  defaultBottomSheetProperties, 
  defaultDialogBoxProperties, 
  defaultModalProperties, 
  defaultSidebarProperties 
} from "./defaultContextValues";
import { RouteProps } from "@/interface/RouteConfig";

const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const fillDefaultValue = ({type, modalConfig}:{type: ModalTypes, modalConfig: IModalConfig | BottomSheetConfig | DialogBoxConfig | SideBarConfig}) : IModalConfig => {
  let defaultValue: IModalConfig | null = null;
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
        console.log(defaultValue!.wrapperConfig!.modalAnimationConfig!.slideAnimationDirection);
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
  let modalProperties: React.MutableRefObject<IModalConfig> = React.useRef(defaultModalProperties);
  let onCloseHandler: any = () => {};
  let content: React.MutableRefObject<React.ReactNode> = React.useRef(<></>);
  let resultObject: React.MutableRefObject<any> = React.useRef({});

  const openModal = ({
    content: modalContent,
    modalConfig
  }: OpenModal<IModalConfig>
  ): void => {
    if ('component' in modalContent) {
      content.current = modalContent.component;
    } else {
      const Component: RouteProps = routeMap[modalContent.route];
      content.current = <Component.component  params={modalContent.params} />;
    }
    modalProperties.current = fillDefaultValue({type: ModalTypes.MODAL, modalConfig});
    setModal(true);
  }

  const openBottomSheet = ({
    content: modalContent,
    modalConfig
  }: OpenModal<BottomSheetConfig>
  ): void => {
    if ('component' in modalContent) {
      content.current = modalContent.component;
    } else {
      const Component: RouteProps = routeMap[modalContent.route];
      content.current = <Component.component  params={modalContent.params} />;
    }
    modalProperties.current = modalProperties.current = fillDefaultValue({type: ModalTypes.BOTTOM_SHEET, modalConfig});
    setModal(true);
  }

  const openDialogBox = ({
    content: modalContent,
    modalConfig
  }: OpenModal<DialogBoxConfig>
  ): void => {
    if ('component' in modalContent) {
      content.current = modalContent.component;
    } else {
      const Component: RouteProps = routeMap[modalContent.route];
      content.current = <Component.component  params={modalContent.params} />;
    }
    modalProperties.current = modalProperties.current = fillDefaultValue({type: ModalTypes.DIALOG_BOX, modalConfig});
    setModal(true);
  }

  const openSideBar = ({
    content: modalContent,
    modalConfig
  }: OpenModal<SideBarConfig>
  ): void => {
    if ('component' in modalContent) {
      content.current = modalContent.component;
    } else {
      const Component: RouteProps = routeMap[modalContent.route];
      content.current = <Component.component  {...modalContent.params} />;
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
  }), [modal]);

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
