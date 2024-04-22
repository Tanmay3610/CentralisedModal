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
  HeightType
} from '@/constants';
import { IModalConfig } from "@/interface/Modal/Modal";

const defaultBackgroundColor = "white";
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
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
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
    topLeftBorderRadius: 0,
    topRightBorderRadius: 0,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
    heightType: HeightType.FIT_CONTENT,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER
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
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.SLIDE_IN,
      slideAnimationDirection: SlideAnimationDirection.BOTTOM_TOP,
      animationDurationInSeconds: 2
    }
  },
  contentConfig:{
    widthType: WidthType.COVER,
    heightType: HeightType.CUSTOM,
    height: 80,
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: 0,
    topRightBorderRadius: 0,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER
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
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.FADE_IN,
      animationDurationInSeconds: 2
    }
  },
  contentConfig:{
    widthType: WidthType.FIT_CONTENT,
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: 0,
    topRightBorderRadius: 0,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
    heightType: HeightType.FIT_CONTENT,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.CENTER
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
    closeButtonVerticalPosition: ModalCloseButtonVerticalPosition.TOP,
    closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition.CENTER,
    backdropClose: true,
    modalAnimationConfig: {
      animationType: ModalWrapperAnimations.SLIDE_IN,
      slideAnimationDirection: SlideAnimationDirection.LEFT_RIGHT,
      animationDurationInSeconds: 2
    }
  },
  contentConfig:{
    widthType: WidthType.FIT_CONTENT,
    backgroundColor: defaultBackgroundColor,
    padding: 0,
    topLeftBorderRadius: 0,
    topRightBorderRadius: 0,
    bottomLeftBorderRadius: 0,
    bottomRightBorderRadius: 0,
    heightType: HeightType.COVER,
    childrenHorizontalPosition: ChildrenHorizontalPosition.CENTER,
    childrenVerticalPosition: ChildrenVerticalPosition.TOP
  }
}
