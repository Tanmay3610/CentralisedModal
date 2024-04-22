"use client"
import styled from "styled-components";
import { motion } from 'framer-motion';

import { ModalOverlayAnimation } from '@/constants';
import { IOverlayConfig } from "@/interface/Modal/Modal";

const Backdrop = styled(motion.div)<{background_color: string, animation: ModalOverlayAnimation, animationDuration: number, opacity: number}>`
  position: fixed;
  background-color: ${({ background_color }) => background_color};
  height: 100%;
  width: 100%;
  opacity: ${({opacity}) => opacity};
`;

const modalAnimation = ({
  animation,
  duration,
  opacity
}: {
    animation: ModalOverlayAnimation,
    duration: number,
    opacity: number
  }): any => {
  let hidden = {};
  let visible = {};
  
  if (animation === ModalOverlayAnimation.FADE_IN) {
    hidden = {opacity: 0};
    visible = {opacity};
  } else {
    return null;
  }

  visible = {...visible, transition: {duration}};
  hidden = {...hidden, transition: {duration}};
  return {hidden, visible};
}

const Overlay: React.FC<{overlayConfig: IOverlayConfig}> = ({ overlayConfig }) => {
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
          opacity: overlayConfig.opacity!
        })
      }
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
  )
};

export default Overlay;