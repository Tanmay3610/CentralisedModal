import { IModalConfig } from "@/interface/Modal/Modal";
import { DialogBoxConfig } from "@/interface/Modal/DialogBox";
import { BottomSheetConfig } from "@/interface/Modal/BottomSheet";
import { SideBarConfig } from "@/interface/Modal/SideBar";

type ModalComponentContent = {
  component: React.ReactNode;
}

type ModalUrlContent = {
  route: string;
  params?: any;
}

export interface OpenModal<T> {
  modalConfig: T;
  content: ModalComponentContent | ModalUrlContent;
}

export interface ModalContextType {
  modal: boolean;
  routeKey: string;
  openModal: (options: OpenModal<IModalConfig>) => void;
  openDialogBox: (options: OpenModal<DialogBoxConfig>) => void;
  openBottomSheet: (options: OpenModal<BottomSheetConfig>) => void;
  openSideBar: (options: OpenModal<SideBarConfig>) => void;
  closeModal: (result: any | null) => void; 
  onCloseModal: (handlerFunction: any) => void;
  content: React.ReactNode,
  modalConfig: IModalConfig,
  setResult: (result: any) => void;
};
