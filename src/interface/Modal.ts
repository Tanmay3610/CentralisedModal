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
} from "@/constants";

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
  topLeftBorderRadius?: number;
  topRightBorderRadius?: number;
  bottomLeftBorderRadius?: number;
  bottomRightBorderRadius?: number;
  widthType?: WidthType;
  heightType?: HeightType;
  height?: number;
  width?: number;
  childrenHorizontalPosition?: ChildrenHorizontalPosition;
  childrenVerticalPosition?: ChildrenVerticalPosition;
}

export interface ModalConfig {
  overlayConfig?: OverlayConfig;
  wrapperConfig?: WrapperConfig;
  contentConfig?: ContentConfig;
}


// Bottom Sheets Interfaces
export type BottomSheetAnimationConfig = Omit<ModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
export type BottomSheetWrapperConfig = Omit<WrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {modalAnimationConfig?: BottomSheetAnimationConfig}
export type BottomSheetContentConfig = Omit<ContentConfig, "widthType" | "width" | "bottomLeftBorderRadius" | "bottomRightBorderRadius">
export type BottomSheetConfig = Omit<ModalConfig, "wrapperConfig" | "contentConfig"> & {wrapperConfig?: BottomSheetWrapperConfig, contentConfig?: BottomSheetContentConfig};

// Dialog Interfaces
export type DialogBoxWrapperConfig = Omit<WrapperConfig, "verticalAlignment" | "horizontalAlignment">
export type DialogBoxContentConfig = Omit<ContentConfig, "widthType" | "heightType" | "width" | "height" | "childrenHorizontalPosition" | "childrenVerticalPosition">
export type DialogBoxConfig = Omit<ModalConfig, "wrapperConfig"> & {wrapperConfig?: DialogBoxWrapperConfig, contentConfig?: DialogBoxContentConfig};

// SideBar Interfaces
export type SideBarWidthType = Exclude<WidthType, WidthType.COVER>;
export type SideBarHorizontalAlignment = Exclude<ModalHorizontalPosition, ModalHorizontalPosition.CENTER | ModalHorizontalPosition.CUSTOM>
export type SidebarAnimationConfig = Omit<ModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
export type SideBarWrapperConfig = Omit<WrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {horizontalAlignment?: SideBarHorizontalAlignment, modalAnimationConfig: SidebarAnimationConfig};
export type SideBarContentConfig = Omit<ContentConfig, "widthType" | "heightType" | "height" | "childrenHorizontalPosition"> & {widthType?: SideBarWidthType}
export type SideBarConfig = Omit<ModalConfig, "wrapperConfig" | "contentConfig"> & {wrapperConfig?: SideBarWrapperConfig, contentConfig?: SideBarContentConfig};

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
      [K in Keys]-?:
          Required<Pick<T, K>>
          & Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

interface ModalContentType<T> {
  modalConfig: T;
  urlComponentProps?: object;
  contentUrl: string;
  content: React.ReactNode;
}
export type OpenModalParameter<T> = RequireOnlyOne<ModalContentType<T>, "contentUrl" | "content">;

export interface ModalContextType {
  modal: boolean;
  routeKey: string;
  openModal: (options: OpenModalParameter<ModalConfig>) => void;
  openDialogBox: (options: OpenModalParameter<DialogBoxConfig>) => void;
  openBottomSheet: (options: OpenModalParameter<BottomSheetConfig>) => void;
  openSideBar: (options: OpenModalParameter<SideBarConfig>) => void;
  closeModal: (result: any | null) => void; 
  onCloseModal: (handlerFunction: any) => void;
  content: React.ReactNode,
  modalConfig: ModalConfig,
  setResult: (result: any) => void;
};
