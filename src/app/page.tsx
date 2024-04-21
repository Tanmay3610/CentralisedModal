"use client"
import React from "react";

import { useModal } from "@/context/ModalContext";
import {
  ModalHorizontalPosition,
  ModalVerticalPosition,
  ModalOverlayAnimation,
  ModalWrapperAnimations,
  SlideAnimationDirection,
  WidthType,
  HeightType,
  ChildrenVerticalPosition
} from "@/constants";

export default function Home() {
  const { onCloseModal, closeModal, openModal, openBottomSheet, openDialogBox, openSideBar } = useModal();

  const Modal = () => {
    return (
      <>
        <div style={{color: "Black"}}>Hey</div><div >Hey</div>
        <div onClick = {() => {
          closeModal({msg: "Hello"})
        }}>Close</div>
      </>
    )
  }

  const onHandleModalClick = () => {
    openModal({
      content: <Modal />,
      modalConfig: {
        overlayConfig: {
          backgroundColor: "pink",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.FADE_IN,
            animationDurationInSeconds: 1
          }
      },
      wrapperConfig: {
        verticalAlignment: ModalVerticalPosition.CENTER,
        horizontalAlignment: ModalHorizontalPosition.CENTER,
        backdropClose: true,
        modalAnimationConfig: {
          animationType: ModalWrapperAnimations.SLIDE_IN,
          animationDurationInSeconds: 1,
          slideAnimationDirection: SlideAnimationDirection.LEFT_RIGHT
        }
      },
      contentConfig: {
        backgroundColor: "red",
        padding: 15,
        widthType: WidthType.CUSTOM,
        heightType: HeightType.CUSTOM,
        height: 70,
        width: 50,
        topRightBorderRadius: 100
      }
    }});
  }

  const onHandleBottomSheetClick = () => {
    openBottomSheet({
      content: <Modal />, 
      modalConfig: {
        overlayConfig: {
          backgroundColor: "pink",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.FADE_IN,
            animationDurationInSeconds: 1
          }
      },
      wrapperConfig: {
        backdropClose: true,
        modalAnimationConfig: {
          animationDurationInSeconds: 1,
        }
      },
      contentConfig: {
        backgroundColor: "red",
        padding: 15,
        heightType: HeightType.CUSTOM,
        height: 70,
        topRightBorderRadius: 50,
        topLeftBorderRadius: 50
      }
    }});
  }

  const onHandleDialogClick = () => {
    openDialogBox({
      content: <Modal />, 
      modalConfig: {
        overlayConfig: {
          backgroundColor: "pink",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.FADE_IN,
            animationDurationInSeconds: 1
          }
      },
      wrapperConfig: {
        backdropClose: true,
        modalAnimationConfig: {
          animationType: ModalWrapperAnimations.SLIDE_IN,
          animationDurationInSeconds: 1,
          slideAnimationDirection: SlideAnimationDirection.BOTTOM_TOP
        }
      },
      contentConfig: {
        backgroundColor: "red",
        padding: 15,
        widthType: WidthType.CUSTOM,
        heightType: HeightType.CUSTOM,
        height: 70,
        width: 50,
        bottomRightBorderRadius: 100
      }
    }});
  }

  const onHandleSideBarClick = () => {
    openSideBar({
      contentUrl: '/login',
      urlComponentProps: {
        initialEmail: "tanmay"
      },
      modalConfig: {
        overlayConfig: {
          backgroundColor: "pink",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.FADE_IN,
            animationDurationInSeconds: 1
          }
      },
      wrapperConfig: {
        horizontalAlignment: ModalHorizontalPosition.RIGHT,
        backdropClose: true,
        modalAnimationConfig: {
          animationDurationInSeconds: 1,
        }
      },
      contentConfig: {
        backgroundColor: "red",
        childrenVerticalPosition: ChildrenVerticalPosition.CENTER,
        widthType: WidthType.CUSTOM,
        width: 20,
        padding: 0,
        bottomLeftBorderRadius: 100,
        topLeftBorderRadius: 100
      }
    }})
  }

  onCloseModal((resultObject: any) => {
    console.log(resultObject)
  })

  return (
    <>
      <button onClick = {onHandleModalClick}>
        Open Modal
      </button>
      <button onClick = {onHandleBottomSheetClick}>
        Open Bottom Sheet
      </button>
      <button onClick = {onHandleDialogClick}>
        Open Dialog Box
      </button>
      <button onClick = {onHandleSideBarClick}>
        Open Side Bar
      </button>
    </>
  );
}
