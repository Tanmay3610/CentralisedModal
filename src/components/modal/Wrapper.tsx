"use client"
import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

import { 
  ModalVerticalPosition, 
  ModalHorizontalPosition,
  ModalWrapperAnimations,
  SlideAnimationDirection,
  WidthType,
  HeightType 
} from '@/utils/constants';
import { IWrapperConfig } from "@/interface/Modal/Modal";

const modalAnimation = ({
  animation, 
  slideDirection,
  verticalAlign,
  horizontalAlign,
  duration
}: {
    animation: ModalWrapperAnimations,
    slideDirection: SlideAnimationDirection,
    verticalAlign: ModalVerticalPosition,
    horizontalAlign: ModalHorizontalPosition,
    duration: number
  }): any => {
  let hidden = {};
  let visible = {};
  if (animation === ModalWrapperAnimations.FADE_IN) {
    hidden = {opacity: 0};
    visible = {opacity: 1};
  } else if (animation === ModalWrapperAnimations.SLIDE_IN) {
    if (slideDirection === SlideAnimationDirection.BOTTOM_TOP) {
      if (horizontalAlign === ModalHorizontalPosition.CENTER) {
        hidden = { y: "100vh"};
      } else if (horizontalAlign === ModalHorizontalPosition.RIGHT) {
        hidden = { y: "100vh" };
        visible = { x: 0 };
      } else if (horizontalAlign === ModalHorizontalPosition.LEFT) {
        hidden = { y: "200vh" };
        visible = { x: 0 };
      }

      if (verticalAlign === ModalVerticalPosition.BOTTOM) {
        visible = { ...visible, y: 0 };
      } else if (verticalAlign === ModalVerticalPosition.TOP) {
        visible = { ...visible, y: 0 };
      } else {
        visible = { ...visible, y: 0 };
      }
    } else if (slideDirection === SlideAnimationDirection.TOP_BOTTOM) {
      if (horizontalAlign === ModalHorizontalPosition.CENTER) {
        hidden = { y: "-100vh" };
      } else if (horizontalAlign === ModalHorizontalPosition.RIGHT) {
        hidden = { y: "-100vh" };
        visible = { x: 0 };
      } else if (horizontalAlign === ModalHorizontalPosition.LEFT) {
        hidden = { y: "-100vh" };
        visible = { x: 0 };
      }

      if (verticalAlign === ModalVerticalPosition.BOTTOM) {
        visible = { ...visible, y: 0 };
      } else if (verticalAlign === ModalVerticalPosition.TOP) {
        visible = { ...visible, y: 0 };
      } else {
        visible = { ...visible, y: 0 };
      }
    } else if (slideDirection === SlideAnimationDirection.LEFT_RIGHT) {
      if (verticalAlign === ModalVerticalPosition.BOTTOM) {
        hidden = { x: "-100vw" };
        visible = { y: 0 };
      } else if (verticalAlign === ModalVerticalPosition.TOP) {
        hidden = { x: "-100vw" };
        visible = { y: 0 };
      } else {
        hidden = { x: "-100vw" };
      }

      if (horizontalAlign === ModalHorizontalPosition.CENTER) {
        visible = { ...visible, x: 0 };
      } else if (horizontalAlign === ModalHorizontalPosition.RIGHT) {
        visible = { ...visible, x: 0 };
      } else if (horizontalAlign === ModalHorizontalPosition.LEFT) {
        visible = { ...visible, x: 0 };
      }
    } else if (slideDirection === SlideAnimationDirection.RIGHT_LEFT) {
      if (verticalAlign === ModalVerticalPosition.BOTTOM) {
        hidden = { x: "100vw" };
        visible = { y: 0 };
      } else if (verticalAlign === ModalVerticalPosition.TOP) {
        hidden = { x: "100vw" };
        visible = { y: 0 };
      } else {
        hidden = { x: "100vw"};
      }

      if (horizontalAlign === ModalHorizontalPosition.CENTER) {
        visible = { ...visible };
      } else if (horizontalAlign === ModalHorizontalPosition.RIGHT) {
        visible = { ...visible, x: 0 };
      } else if (horizontalAlign === ModalHorizontalPosition.LEFT) {
        visible = { ...visible, x: 0 };
      }
    }
  } else {
    return null;
  }

  visible = {...visible, transition: {duration}};
  hidden = {...hidden, transition: {duration}};
  return {hidden, visible};
}

const WrapperContainer = styled(motion.div)<{
  verticalAlign: ModalVerticalPosition, 
  horizontalAlign: ModalHorizontalPosition, 
  animation: ModalWrapperAnimations, 
  animationDuration: number, 
  slideDirection: SlideAnimationDirection,
  widthType: WidthType,
  heightType: HeightType,
  height: number,
  width: number
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({widthType, width}) => widthType === WidthType.FIT_CONTENT ? "fit-content" : widthType === WidthType.COVER ? "100vw" : `${width}vw`};
  height: ${({heightType, height}) => heightType === HeightType.FIT_CONTENT ? "fit-content" : heightType === HeightType.COVER ? "100vh" : `${height}vh`};
`;

const Wrapper: React.FC<{ 
  children: React.ReactNode, 
  wrapperConfig: IWrapperConfig, 
  closeModal: (result: any | null) => void,
  widthType: WidthType,
  heightType: HeightType,
  height: number,
  width: number
}> = ({
  children, 
  wrapperConfig, 
  closeModal,
  widthType,
  heightType,
  height,
  width
}) => {
  const WrapperRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    closeModal(null);
  }

  const handleOutsideClick = (e: MouseEvent): void => {
    if (WrapperRef.current && !WrapperRef.current.contains(e.target as any)) {
      handleClose();
    }
  }

  React.useEffect(() => {
    if (wrapperConfig.backdropClose!) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      if (wrapperConfig.backdropClose!) {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  });
  
  return (
      <WrapperContainer
        ref={WrapperRef}
        verticalAlign={wrapperConfig.verticalAlignment!}
        horizontalAlign={wrapperConfig.horizontalAlignment!}
        animation = {wrapperConfig.modalAnimationConfig!.animationType as ModalWrapperAnimations}
        animationDuration = {wrapperConfig.modalAnimationConfig!.animationDurationInSeconds as number}
        slideDirection = {wrapperConfig.modalAnimationConfig!.slideAnimationDirection as SlideAnimationDirection}
        widthType={widthType}
        width={width}
        heightType={heightType}
        height={height}
        variants={
          modalAnimation({
            animation: wrapperConfig.modalAnimationConfig!.animationType as ModalWrapperAnimations, 
            slideDirection: wrapperConfig.modalAnimationConfig!.slideAnimationDirection as SlideAnimationDirection,
            verticalAlign: wrapperConfig.verticalAlignment!,
            horizontalAlign: wrapperConfig.horizontalAlignment!,
            duration: wrapperConfig.modalAnimationConfig!.animationDurationInSeconds as number
          })
        }
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </WrapperContainer>
  )
}

export default Wrapper;
