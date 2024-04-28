"use client"
import React from "react";

import { useModal } from "@/utils/useModal";
import {
  ModalHorizontalPosition,
  ModalVerticalPosition,
  ModalOverlayAnimation,
  ModalWrapperAnimations,
  SlideAnimationDirection,
  WidthType,
  HeightType,
  ChildrenVerticalPosition
} from "@/utils/constants";

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
      content: {
        component: <Modal />
      }, 
      modalConfig: {
        overlayConfig: {
          backgroundColor: "255,192,203",
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
            animationType: ModalWrapperAnimations.NONE,
            animationDurationInSeconds: 1,
            slideAnimationDirection: SlideAnimationDirection.BOTTOM_TOP
          }
        },
        contentConfig: {
          backgroundColor: "255,255,0",
          padding: 100,
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
      content: {
        component: <Modal />
      }, 
      modalConfig: {
        overlayConfig: {
          backgroundColor: "255,192,203",
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
        backgroundColor: "255,0,0",
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
      content: {
        route: '/home'
      },
      modalConfig: {
        overlayConfig: {
          backgroundColor: "255,192,203",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.FADE_IN,
            animationDurationInSeconds: 1
          }
      },
      wrapperConfig: {
        backdropClose: true,
        modalAnimationConfig: {
          animationDurationInSeconds: 1
        }
      },
      contentConfig: {
        backgroundColor: "255,0,0",
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
      content: {
        route: '/login',
        params: {
          initialEmail: "tanmay",
          isModal: true
        }
      },
      modalConfig: {
        overlayConfig: {
          backgroundColor: "255,192,203",
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
        backgroundColor: "255,0,0",
        childrenVerticalPosition: ChildrenVerticalPosition.CENTER,
        widthType: WidthType.CUSTOM,
        width: 20,
        padding: 0,
        bottomLeftBorderRadius: 20,
        topLeftBorderRadius: 20
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
