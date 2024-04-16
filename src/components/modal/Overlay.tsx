"use client"
import styled, { keyframes } from "styled-components";

import { ModalOverlayAnimation, OverlayConfig } from "@/interface/Modal";

const fadeInAnimation = (finalOpacity: number) => keyframes`
  0% { opacity: 0; }
  100% { opacity: ${finalOpacity}; }
`;

const Backdrop = styled.div<{background_color: string, opacity: number, animation: ModalOverlayAnimation, animationDuration: number}>`
  position: fixed;
  background-color: ${({ background_color }) => background_color};
  opacity: ${({opacity}) => opacity};
  height: 100%;
  width: 100%;
  animation: ${({animation, opacity}) => animation === ModalOverlayAnimation.FADE_IN ? fadeInAnimation(opacity) : null};
  animation-duration: ${({animationDuration}) => animationDuration}s;
`;

const Overlay: React.FC<{ children: React.ReactNode, overlayConfig: OverlayConfig }> = ({children, overlayConfig}) => {
  return (
    <Backdrop
      background_color={overlayConfig.backgroundColor!}
      opacity = {overlayConfig.opacity!}
      animation = {overlayConfig.modalAnimationConfig!.animationType as ModalOverlayAnimation}
      animationDuration = {overlayConfig.modalAnimationConfig!.animationDurationInSeconds as number}
    >
      {children}
    </Backdrop>
  )
};

export default Overlay;