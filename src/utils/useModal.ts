import React from "react";

import ModalContext from "@/Context/Modal/Context";
import { ModalContextType } from "@/interface/ModalContext";

export const useModal = (): ModalContextType => {
  return React.useContext(ModalContext)
};
