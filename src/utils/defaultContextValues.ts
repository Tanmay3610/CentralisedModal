"use client";
import {
  ModalVerticalPosition, 
  ModalHorizontalPosition,
  ModalCloseButtonVerticalPosition,
  ModalCloseButtonHorizontalPosition,
  ModalWrapperAnimations,
  ModalOverlayAnimation,
  SlideAnimationDirection,
  WidthType,
  ChildrenHorizontalPosition,
  ChildrenVerticalPosition,
  HeightType,
  ModalTypes
} from '@/utils/constants';
import { BottomSheetConfig } from '@/interface/Modal/BottomSheet';
import { DialogBoxConfig } from '@/interface/Modal/DialogBox';
import { IModalConfig } from "@/interface/Modal/Modal";
import { SideBarConfig } from '@/interface/Modal/SideBar';

const defaultBackgroundColor = "255,0,0";
const defaultCloseButtonHeight = 12;
const defaultCloseButtonWidth = 12;
const defaultCloseButtonMargin = 24;
const defaultBorderRadius = 24;
const defaultAnimationDurationInSeconds = 0.3;

export const defaultModalProperties: IModalConfig = {
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
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.NONE,
      animationDurationInSeconds: 0
    }
  },
  contentConfig:{
    widthType: WidthType.FIT_CONTENT,
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: defaultBorderRadius,
    topRightBorderRadius: defaultBorderRadius,
    bottomLeftBorderRadius: defaultBorderRadius,
    bottomRightBorderRadius: defaultBorderRadius,
    heightType: HeightType.FIT_CONTENT,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER,
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    closeButtonWidth: defaultCloseButtonWidth,
    closeButtonHeight: defaultCloseButtonHeight,
    closeButtonMargin: defaultCloseButtonMargin,
  }
}

export const defaultBottomSheetProperties: IModalConfig = {
  overlayConfig: {
    backgroundColor: defaultBackgroundColor,
    opacity: 0.5,
    modalAnimationConfig: {
      animationType: ModalOverlayAnimation.NONE,
      animationDurationInSeconds: 0
    }
  },
  wrapperConfig: {
    verticalAlignment: ModalVerticalPosition.BOTTOM,
    horizontalAlignment: ModalHorizontalPosition.CENTER,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.SLIDE_IN,
      slideAnimationDirection: SlideAnimationDirection.BOTTOM_TOP,
      animationDurationInSeconds: defaultAnimationDurationInSeconds
    }
  },
  contentConfig:{
    widthType: WidthType.CUSTOM,
    width: "170px",
    heightType: HeightType.CUSTOM,
    height: "calc(100% - 64px)",
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: defaultBorderRadius,
    topRightBorderRadius: defaultBorderRadius,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER,
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    closeButtonWidth: defaultCloseButtonWidth,
    closeButtonHeight: defaultCloseButtonHeight,
    closeButtonMargin: defaultCloseButtonMargin,
  }
}

export const defaultDialogBoxProperties: IModalConfig = {
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
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.FADE_IN,
      animationDurationInSeconds: defaultAnimationDurationInSeconds
    }
  },
  contentConfig: {
    widthType: WidthType.FIT_CONTENT,
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: defaultBorderRadius,
    topRightBorderRadius: defaultBorderRadius,
    bottomLeftBorderRadius: defaultBorderRadius,
    bottomRightBorderRadius: defaultBorderRadius,
    heightType: HeightType.CUSTOM,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER,
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.RIGHT,
    closeButtonWidth: defaultCloseButtonWidth,
    closeButtonHeight: defaultCloseButtonHeight,
    closeButtonMargin: defaultCloseButtonMargin,
  }
}

export const defaultSidebarProperties: IModalConfig = {
  overlayConfig: {
    backgroundColor: defaultBackgroundColor,
    opacity: 0.5,
    modalAnimationConfig: {
      animationType: ModalOverlayAnimation.NONE,
      animationDurationInSeconds: 0
    }
  },
  wrapperConfig: {
    verticalAlignment: ModalVerticalPosition.TOP,
    horizontalAlignment: ModalHorizontalPosition.LEFT,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.SLIDE_IN,
      slideAnimationDirection: SlideAnimationDirection.LEFT_RIGHT,
      animationDurationInSeconds: defaultAnimationDurationInSeconds
    }
  },
  contentConfig:{
    widthType: WidthType.CUSTOM,
    width: "580px",
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: 0,
    topRightBorderRadius: defaultBorderRadius,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: defaultBorderRadius,
    heightType: HeightType.COVER,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.TOP,
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.LEFT,
    closeButtonWidth: defaultCloseButtonWidth,
    closeButtonHeight: defaultCloseButtonHeight,
    closeButtonMargin: defaultCloseButtonMargin,
  }
}

const fillDefaultValue = ({type, modalConfig}:{type: ModalTypes, modalConfig: IModalConfig | BottomSheetConfig | DialogBoxConfig | SideBarConfig | undefined}) : IModalConfig => {
  let defaultValue: IModalConfig | null = null;
  let borderRadius: number= 0;
  switch (type) {
    case ModalTypes.MODAL:
      defaultValue = defaultModalProperties;
      break;
    case ModalTypes.BOTTOM_SHEET:
      defaultValue = defaultBottomSheetProperties;
      borderRadius = (modalConfig as BottomSheetConfig)?.contentConfig?.borderRadius ?? defaultBorderRadius;
      if (borderRadius) {
        defaultValue!.contentConfig!.topLeftBorderRadius = borderRadius;
        defaultValue!.contentConfig!.topRightBorderRadius = borderRadius;
      }
      break;
    case ModalTypes.DIALOG_BOX:
      defaultValue = defaultDialogBoxProperties;
      borderRadius = (modalConfig as DialogBoxConfig)?.contentConfig?.borderRadius ?? defaultBorderRadius;
      if (borderRadius) {
        defaultValue!.contentConfig!.topLeftBorderRadius = borderRadius;
        defaultValue!.contentConfig!.bottomLeftBorderRadius = borderRadius;
        defaultValue!.contentConfig!.topRightBorderRadius = borderRadius;
        defaultValue!.contentConfig!.bottomRightBorderRadius = borderRadius;
      }
      break;
    case ModalTypes.SIDE_BAR:
      defaultValue = defaultSidebarProperties;
      if ((modalConfig as SideBarConfig)?.wrapperConfig?.horizontalAlignment) {
        defaultValue!.wrapperConfig!.modalAnimationConfig!.slideAnimationDirection = (modalConfig as SideBarConfig).wrapperConfig!.horizontalAlignment === ModalHorizontalPosition.RIGHT 
          ? SlideAnimationDirection.RIGHT_LEFT 
          : SlideAnimationDirection.LEFT_RIGHT
      }
      
      borderRadius = (modalConfig as SideBarConfig)?.contentConfig?.borderRadius ?? defaultBorderRadius;
      if (borderRadius) {
        if ((modalConfig as SideBarConfig).wrapperConfig!.horizontalAlignment === ModalHorizontalPosition.RIGHT ) {
          defaultValue!.contentConfig!.topLeftBorderRadius = borderRadius;
          defaultValue!.contentConfig!.bottomLeftBorderRadius = borderRadius;
          defaultValue!.contentConfig!.topRightBorderRadius = 0;
          defaultValue!.contentConfig!.bottomRightBorderRadius = 0;
        } else {
          defaultValue!.contentConfig!.topRightBorderRadius = borderRadius;
          defaultValue!.contentConfig!.bottomRightBorderRadius = borderRadius;
          defaultValue!.contentConfig!.topLeftBorderRadius = 0;
          defaultValue!.contentConfig!.bottomLeftBorderRadius = 0;
        }
      }
      break;
    default:
      defaultValue = {}
  }

  return {
    overlayConfig: {
      ...defaultValue.overlayConfig,
      ...modalConfig?.overlayConfig,
      modalAnimationConfig: {
        ...defaultValue.overlayConfig!.modalAnimationConfig,
        ...modalConfig?.overlayConfig?.modalAnimationConfig
      }, 
    },
    wrapperConfig: {
      ...defaultValue.wrapperConfig,
      ...modalConfig?.wrapperConfig,
      modalAnimationConfig: {
        ...defaultValue.wrapperConfig!.modalAnimationConfig,
        ...modalConfig?.wrapperConfig?.modalAnimationConfig,
      }
    },
    contentConfig: {
      ...defaultValue.contentConfig,
      ...modalConfig?.contentConfig
    }
  };
}

export default fillDefaultValue;
