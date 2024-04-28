"use client"
import React from "react";

import ModalContext from "@/Context/Modal/Context"
import fillDefaultValue, { defaultModalProperties } from "@/utils/defaultContextValues";

import { routeMap } from "@/utils/routeConfig";
import { ModalTypes } from "@/utils/constants";
import { IModalConfig } from "@/interface/Modal/Modal";
import { OpenModal } from "@/interface/ModalContext";
import { DialogBoxConfig } from "@/interface/Modal/DialogBox";
import { SideBarConfig,  } from "@/interface/Modal/SideBar";
import { BottomSheetConfig } from "@/interface/Modal/BottomSheet";
import { RouteProps } from "@/interface/RouteConfig";
import { useModal } from "@/utils/useModal";

const ModalProvider = ({ children }: {children: React.ReactNode}) => {
  const [modal, setModal] = React.useState<boolean>(false);

  let modalProperties: React.MutableRefObject<IModalConfig> = React.useRef(defaultModalProperties);
  let onCloseHandler: any = () => {};
  let content: React.MutableRefObject<React.ReactNode> = React.useRef(<></>);
  let resultObject: React.MutableRefObject<any> = React.useRef({});

  const { closeModal: selfCloseModal, setResult: selfSetResult } = useModal();

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
    console.log(modalProperties.current)
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

  const closeSelf = (result: any | null) => {
    if (selfCloseModal) {
      selfCloseModal(result);
    }
  }

  const setResult = (result: any) => {
    resultObject.current = result;
  }

  const setResultSelf = (result: any) => {
    if (selfSetResult) {
      selfSetResult(result);
    }
  }

  const onCloseModal = (handlerFunction: any) => {
    onCloseHandler = () => handlerFunction(resultObject.current);
  }

  const sharedObject = React.useMemo(() => ({
    modal,
    content: content.current,
    modalConfig: modalProperties.current,
    openModal,
    openBottomSheet,
    openDialogBox,
    openSideBar,
    closeModal,
    onCloseModal,
    setResult,
    closeSelf,
    setResultSelf
  }), [modal]);

  return (
    <ModalContext.Provider value={sharedObject}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;
