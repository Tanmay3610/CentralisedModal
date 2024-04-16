export enum ModalTypes {
  Modal,
  None
}

export enum ModalHorizontalPosition {
  LEFT,
  RIGHT,
  CENTER,
  CUSTOM
}

export enum ModalVerticalPosition {
  TOP,
  BOTTOM,
  CENTER,
  CUSTOM
}

export enum ModalCloseButtonVerticalPosition {
  TOP,
  BOTTOM,
}

export enum ModalCloseButtonHorizontalPosition {
  LEFT,
  RIGHT,
  CENTER
}

export enum SlideAnimationDirection {
  TOP_BOTTOM,
  BOTTOM_TOP,
  LEFT_RIGHT,
  RIGHT_LEFT
}

export enum ModalWrapperAnimations {
  FADE_IN,
  SLIDE_IN,
  NONE
}

export enum ModalOverlayAnimation {
  FADE_IN,
  NONE
}

export interface ModalWrapperAnimationConfig {
  animationType?: ModalWrapperAnimations;
  animationDurationInSeconds?: number;
  slideAnimationDirection?: SlideAnimationDirection;
}

export interface ModalOverlayAnimationConfig {
  animationType?: ModalOverlayAnimation;
  animationDurationInSeconds?: number;
}

export interface OverlayConfig {
  backgroundColor?: string;
  opacity?: number;
  modalAnimationConfig?: ModalOverlayAnimationConfig;
}

export interface WrapperConfig {
  verticalAlignment?: ModalVerticalPosition;
  horizontalAlignment?: ModalHorizontalPosition;
  closeButtonVerticalPosition?: ModalCloseButtonVerticalPosition;
  closeButtonHorizontalPosition?: ModalCloseButtonHorizontalPosition;
  modalAnimationConfig?: ModalWrapperAnimationConfig;
  backdropClose?: boolean;
}

export interface ContentConfig {
  backgroundColor?: string,
  padding?: number;
  borderRadius?: number;
}

export interface ModalConfig {
  overlayConfig?: OverlayConfig;
  wrapperConfig?: WrapperConfig;
  contentConfig?: ContentConfig;
}

export interface ModalContextType {
  modal: boolean;
  openModal: (options: {modalContent: React.ReactNode, modalConfig: ModalConfig}) => void;
  closeModal: (result: any) => void; 
  onCloseModal: (handlerFunction: any) => void;
  content: React.ReactNode,
  modalConfig: ModalConfig
};
