"use client"
import styled from "styled-components";
import { motion } from 'framer-motion';

import { ModalOverlayAnimation } from '@/utils/constants';
import { IOverlayConfig } from "@/interface/Modal/Modal";
import { ModalVerticalPosition, ModalHorizontalPosition } from "@/utils/constants";

const Backdrop = styled(motion.div)<{background_color: string, animation: ModalOverlayAnimation, animationDuration: number, opacity: number, verticalAlign: ModalVerticalPosition, 
  horizontalAlign: ModalHorizontalPosition}>`
  position: absolute;
  display: flex;
  left: 0px;
  top: 0px;
  background-color: ${({ background_color, opacity }) => `rgba(${background_color},${opacity})`};
  height: 100%;
  width: 100%;
  justify-content: ${({horizontalAlign}) => horizontalAlign === ModalHorizontalPosition.LEFT ? "flex-start" : horizontalAlign === ModalHorizontalPosition.RIGHT ? "flex-end" : "center"};
  align-items: ${({verticalAlign}) => verticalAlign === ModalVerticalPosition.BOTTOM ? "flex-end" : verticalAlign === ModalVerticalPosition.TOP ? "flex-start" : "center"};
  box-sizing: border-box;
`;

const modalAnimation = ({
  animation,
  duration,
  backgroundColor,
  opacity
}: {
    animation: ModalOverlayAnimation,
    duration: number,
    opacity: number,
    backgroundColor: string
  }): any => {
  let hidden = {};
  let visible = {};
  
  if (animation === ModalOverlayAnimation.FADE_IN) {
    hidden = {backgroundColor: `rgba(${backgroundColor},0)`};
    visible = {backgroundColor:`rgba(${backgroundColor},${opacity})`};
  } else {
    return null;
  }

  visible = {...visible, transition: {duration}};
  hidden = {...hidden};
  return {hidden, visible};
}

const Overlay: React.FC<{overlayConfig: IOverlayConfig, children: React.ReactNode, verticalAlign: ModalVerticalPosition, 
  horizontalAlign: ModalHorizontalPosition}> = ({ overlayConfig, children, verticalAlign, horizontalAlign }) => {
  return (
    <Backdrop
      background_color={overlayConfig.backgroundColor!}
      animation = {overlayConfig.modalAnimationConfig!.animationType as ModalOverlayAnimation}
      animationDuration = {overlayConfig.modalAnimationConfig!.animationDurationInSeconds as number}
      opacity = {overlayConfig.opacity! as number}
      variants={
        modalAnimation({
          animation: overlayConfig.modalAnimationConfig!.animationType as ModalOverlayAnimation, 
          duration: overlayConfig.modalAnimationConfig!.animationDurationInSeconds as number,
          opacity: overlayConfig.opacity!,
          backgroundColor: overlayConfig.backgroundColor!
        })
      }
      initial="hidden"
      animate="visible"
      exit="hidden"
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
      {children}
    </Backdrop>
  )
};

export default Overlay;