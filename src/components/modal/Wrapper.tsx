"use client"
import React from "react";
import styled, { css, keyframes } from "styled-components";

import {
  ModalVerticalPosition, 
  ModalHorizontalPosition,
  WrapperConfig,
  ModalWrapperAnimations,
  SlideAnimationDirection
} from "@/interface/Modal";

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideInTop = ({verticalAlign, horizontalAlign}: {verticalAlign: ModalVerticalPosition, horizontalAlign: ModalHorizontalPosition}) => keyframes`
  0% {
    bottom: -100%; 
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "left: 100%; transform: translateX(-100%);" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "left: 50%; transform: translateX(-50%);" 
       : "left: 0%;"
    }
    }
  100% {
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "bottom: 100%;" 
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "bottom: 0%;"
      : "bottom: 50%;"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "left: 100%;" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "left: 50%;" 
       : "left: 0%;"
    }

    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "bottom: 100%; transform: translateY(100%)" 
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "transform: "
      : "transform: translateY(50%)"
    }

    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "translateX(-100%)" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "translateX(-50%)" 
       : null
    };
  }
`;

const slideInBottom = ({verticalAlign, horizontalAlign}: {verticalAlign: ModalVerticalPosition, horizontalAlign: ModalHorizontalPosition}) => keyframes`
  0% {
    top: -100%;
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "left: 100%; transform: translateX(-100%);" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "left: 50%; transform: translateX(-50%);" 
       : "left: 0%;"
    }
  }
  100% {
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "top: 0%;"
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "top: 100%;" 
      : "top: 50%;"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "left: 100%;" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "left: 50%;" 
       : "left: 0%;"
    }

    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "transform: "
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "transform: translateY(-100%)" 
      : "transform: translateY(-50%)"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
       ? "translateX(-100%)" 
       : horizontalAlign === ModalHorizontalPosition.CENTER 
       ? "translateX(-50%)" 
       : null
    };
  }
`;

const slideInLeft = ({verticalAlign, horizontalAlign}: {verticalAlign: ModalVerticalPosition, horizontalAlign: ModalHorizontalPosition}) => keyframes`
  0% {
    left: 200%;
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "top: 0%;" 
      : verticalAlign === ModalVerticalPosition.BOTTOM
      ? "top: 100%; transform: translateY(-100%);" 
      : "top: 50%; transform: translateY(-50%);"
    }
  }
  100% {
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "top: 0%;"
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "top: 100%;" 
      : "top: 50%;"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
      ? "left: 100%;"
      : horizontalAlign === ModalHorizontalPosition.CENTER 
      ? "left: 50%;"
      : "left: 0%;"
    }

    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "transform: "
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "transform: translateY(-100%)" 
      : "transform: translateY(-50%)"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
      ? "translateX(-100%)" 
      : horizontalAlign === ModalHorizontalPosition.CENTER 
      ? "translateX(-50%)" 
      : null
    };
  }
`;

const slideInRight = ({verticalAlign, horizontalAlign}: {verticalAlign: ModalVerticalPosition, horizontalAlign: ModalHorizontalPosition}) => keyframes`
  0% {
    left: -100%;
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "top: 0%;" 
      : verticalAlign === ModalVerticalPosition.BOTTOM
      ? "top: 100%; transform: translateY(-100%);" 
      : "top: 50%; transform: translateY(-50%);"
    }
  }
  100% {
    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "top: 0%;"
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "top: 100%;" 
      : "top: 50%;"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
      ? "left: 100%;" 
      : horizontalAlign === ModalHorizontalPosition.CENTER 
      ? "left: 50%;" 
      : "left: 0%;"
    }

    ${
      verticalAlign === ModalVerticalPosition.TOP 
      ? "transform: "
      : verticalAlign === ModalVerticalPosition.BOTTOM 
      ? "transform: translateY(-100%)" 
      : "transform: translateY(-50%)"
    }
    ${
      horizontalAlign === ModalHorizontalPosition.RIGHT 
      ? "translateX(-100%)" 
      : horizontalAlign === ModalHorizontalPosition.CENTER 
      ? "translateX(-50%)" 
      : null
    };
}
`;

const calculateTop = (verticalAlign: number) => {
  return verticalAlign === ModalVerticalPosition.TOP 
    ? "0%" 
    : verticalAlign === ModalVerticalPosition.CENTER 
    ? "50%"
    : null
}

const calculateBottom = (verticalAlign: number) => {
  return verticalAlign === ModalVerticalPosition.BOTTOM 
    ? "0%"
    : null
}

const calculateLeft = (horizontalAlign: number) => {
  return horizontalAlign === ModalHorizontalPosition.LEFT 
    ? "0%" 
    : horizontalAlign === ModalHorizontalPosition.CENTER 
    ? "50%"
    : null
}

const calculateRight = (horizontalAlign: number) => {
  return horizontalAlign === ModalHorizontalPosition.RIGHT 
    ? "0%"
    : null
}

const calculateAllDimensions = ({horizontalAlign, verticalAlign}: {horizontalAlign: number, verticalAlign: number}) => {
  return `
    top: ${calculateTop(verticalAlign)};
    bottom: ${calculateBottom(verticalAlign)};
    left: ${calculateLeft(horizontalAlign)};
    right: ${calculateRight(horizontalAlign)};
  `
}

const WrapperContainer = styled.div<{
  verticalAlign: ModalVerticalPosition, 
  horizontalAlign: ModalHorizontalPosition, 
  animation: ModalWrapperAnimations, 
  animationDuration: number, 
  slideDirection: SlideAnimationDirection 
}>`
  position: absolute;

  z-index: 7;
  width: fit-content;
  
  ${({animation, slideDirection, verticalAlign, horizontalAlign, animationDuration}) => {
    if (animation === ModalWrapperAnimations.FADE_IN) {
      return css`animation: ${fadeInAnimation} ${animationDuration}s`;
    } else if (animation === ModalWrapperAnimations.NONE) {
      return css`${calculateAllDimensions({verticalAlign, horizontalAlign})}`;
    } else {
      switch (slideDirection) {
        case SlideAnimationDirection.BOTTOM_TOP:
          return css`animation: ${slideInTop({verticalAlign, horizontalAlign})} ${animationDuration}s forwards`;
        case SlideAnimationDirection.TOP_BOTTOM:
          return css`animation: ${slideInBottom({verticalAlign, horizontalAlign})} ${animationDuration}s forwards`;
        case SlideAnimationDirection.RIGHT_LEFT:
          return css`animation: ${slideInLeft({verticalAlign, horizontalAlign})} ${animationDuration}s forwards`;
        default:
          return css`animation: ${slideInRight({verticalAlign, horizontalAlign})} ${animationDuration}s forwards`;
      }
    }
  }};

  transform: ${({ horizontalAlign, verticalAlign }) => 
    horizontalAlign === ModalHorizontalPosition.CENTER 
      && verticalAlign === ModalVerticalPosition.CENTER
      ? "translate(-50%, -50%)"
      : horizontalAlign === ModalHorizontalPosition.CENTER 
      && verticalAlign !== ModalVerticalPosition.CENTER
      ? "translate(-50%, 0%)"
      : horizontalAlign !== ModalHorizontalPosition.CENTER 
      && verticalAlign === ModalVerticalPosition.CENTER
      ? "translate(0%, -50%)"
      : null
  };

  transition: transform 1s;
`;

const Wrapper: React.FC<{ 
  children: React.ReactNode, 
  wrapperConfig: WrapperConfig, 
  closeModal: (result: any) => void
}> = ({
  children, 
  wrapperConfig, 
  closeModal
}) => {
  const WrapperRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    closeModal({});
  }

  const handleOutsideClick = (e: MouseEvent): void => {
    if (WrapperRef.current && !WrapperRef.current.contains(e.target as any)) {
      handleClose();
    }
  }

  React.useEffect(() => {
    if (wrapperConfig.backdropClose!) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  });
  
  return (
    <WrapperContainer 
      ref={WrapperRef}
      verticalAlign={wrapperConfig.verticalAlignment!}
      horizontalAlign={wrapperConfig.horizontalAlignment!}
      animation = {wrapperConfig.modalAnimationConfig!.animationType as ModalWrapperAnimations}
      animationDuration = {wrapperConfig.modalAnimationConfig!.animationDurationInSeconds as number}
      slideDirection = {wrapperConfig.modalAnimationConfig!.slideAnimationDirection as SlideAnimationDirection}
    >
      {children}
    </WrapperContainer>
  )
}

export default Wrapper;