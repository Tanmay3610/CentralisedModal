import { 
  ModalWrapperAnimations, 
  SlideAnimationDirection, 
  ModalOverlayAnimation, 
  ModalVerticalPosition, 
  ModalHorizontalPosition, 
  ModalCloseButtonHorizontalPosition, 
  ModalCloseButtonVerticalPosition, 
  WidthType, 
  HeightType,
  ChildrenHorizontalPosition,
  ChildrenVerticalPosition
} from "@/utils/constants";

export interface IModalWrapperAnimationConfig {
  animationType?: ModalWrapperAnimations;
  animationDurationInSeconds?: number;
  slideAnimationDirection?: SlideAnimationDirection;
}

export interface IModalOverlayAnimationConfig {
  animationType?: ModalOverlayAnimation;
  animationDurationInSeconds?: number;
}

export interface IOverlayConfig {
  backgroundColor?: string;
  opacity?: number;
  modalAnimationConfig?: IModalOverlayAnimationConfig;
}

export interface IWrapperConfig {
  verticalAlignment?: ModalVerticalPosition;
  horizontalAlignment?: ModalHorizontalPosition;
  modalAnimationConfig?: IModalWrapperAnimationConfig;
  backdropClose?: boolean;
}

export interface IContentConfig {
  backgroundColor?: string,
  padding?: number;
  topLeftBorderRadius?: number;
  topRightBorderRadius?: number;
  bottomLeftBorderRadius?: number;
  bottomRightBorderRadius?: number;
  widthType?: WidthType;
  heightType?: HeightType;
  height?: string;
  width?: string;
  childrenHorizontalPosition?: ChildrenHorizontalPosition;
  childrenVerticalPosition?: ChildrenVerticalPosition;
  closeButtonVerticalPosition?: ModalCloseButtonVerticalPosition;
  closeButtonHorizontalPosition?: ModalCloseButtonHorizontalPosition;
  closeButtonMargin?: number;
  closeButtonWidth?: number;
  closeButtonHeight?: number;
}

export interface IModalConfig {
  overlayConfig?: IOverlayConfig;
  wrapperConfig?: IWrapperConfig;
  contentConfig?: IContentConfig;
}
