"use client"
import React from "react";
import { useModal } from "@/context/ModalContext";
import {
  ModalVerticalPosition, 
  ModalHorizontalPosition,
  ModalOverlayAnimation,
  ModalWrapperAnimations,
  SlideAnimationDirection
} from "@/interface/Modal";

export default function Home() {
  const { openModal, onCloseModal, closeModal } = useModal();

  const Modal = () => {
    return (
      <>
        <div>Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div><div >Hey</div>
        <div onClick = {() => {
          closeModal({msg: "Hello"})
        }}>Close</div>
      </>
    )
  }
// Parallel Routes (Next JS) - to open a route
// Modal Props if opened though a route

  const onHandleButtonClick = () => {
    openModal({
      modalContent: <Modal />, 
      modalConfig: {
        overlayConfig: {
          backgroundColor: "pink",
          modalAnimationConfig: {
            animationType: ModalOverlayAnimation.NONE,
            animationDurationInSeconds: 2
          }
      },
      wrapperConfig: {
        verticalAlignment: ModalVerticalPosition.CENTER,
        horizontalAlignment: ModalHorizontalPosition.CENTER,
        backdropClose: true,
        modalAnimationConfig: {
          animationType: ModalWrapperAnimations.SLIDE_IN,
          animationDurationInSeconds: 2,
          slideAnimationDirection: SlideAnimationDirection.RIGHT_LEFT
        }
      },
      contentConfig: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 10
      }
    }});
  }

  onCloseModal((resultObject: any) => {
    console.log(resultObject)
  })

  return (
    <button onClick = {onHandleButtonClick}>
      Toggle Modal
    </button>
  );
}
