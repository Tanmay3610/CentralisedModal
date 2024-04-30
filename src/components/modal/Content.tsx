"use client"

import { ChildrenHorizontalPosition, ChildrenVerticalPosition, ModalCloseButtonHorizontalPosition, ModalCloseButtonVerticalPosition } from "@/utils/constants";
import { IContentConfig } from "@/interface/Modal/Modal";
import styled from "styled-components";
import Image from "next/image";

const ContentContainer = styled.div<{
  padding: number,
  childrenverticalpos: ChildrenVerticalPosition, 
  childrenhorizontalpos: ChildrenHorizontalPosition
}>`
  padding: ${({padding}) => `${padding}px ${padding}px ${padding}px ${padding}px`};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({childrenhorizontalpos}) => childrenhorizontalpos === ChildrenHorizontalPosition.CENTER ? "center" : childrenhorizontalpos === ChildrenHorizontalPosition.LEFT ? "flex-start" : "flex-end"};
  justify-content: ${({childrenverticalpos}) => childrenverticalpos === ChildrenVerticalPosition.BOTTOM ? "flex-end" : childrenverticalpos === ChildrenVerticalPosition.TOP ? "flex-start": "center"};
`;

const MainContentContainer = styled.div<{
  backgroundcolor: string, 
  bottomleftborderradius: number, 
  bottomrightborderradius: number,
  topleftborderradius: number,
  toprightborderradius: number,
  closeButtonVerticalPosition: ModalCloseButtonVerticalPosition,
}>`
  overflow: scroll;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({closeButtonVerticalPosition}) => closeButtonVerticalPosition === ModalCloseButtonVerticalPosition.TOP ? "column" : "column-reverse"};
  background-color: ${({backgroundcolor}) => `rgb(${backgroundcolor})`};
  border-radius: ${({bottomleftborderradius, bottomrightborderradius, topleftborderradius, toprightborderradius}) => `${topleftborderradius}px ${toprightborderradius}px ${bottomrightborderradius}px ${bottomleftborderradius}px`};
`;

const CloseButtonContainer = styled.div<{
  closeButtonVerticalPosition: ModalCloseButtonVerticalPosition,
  closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition, 
  closeButtonMargin: number
}>`
  display: flex;
  width: 100%;
  justify-content: ${({closeButtonHorizontalPosition}) => closeButtonHorizontalPosition === ModalCloseButtonHorizontalPosition.CENTER ? "center" : closeButtonHorizontalPosition === ModalCloseButtonHorizontalPosition.LEFT ? "flex-start" : "flex-end"};
  margin-top: ${({closeButtonVerticalPosition, closeButtonMargin}) => closeButtonVerticalPosition === ModalCloseButtonVerticalPosition.TOP ? `${closeButtonMargin}px`: "0px"};
  margin-bottom: ${({closeButtonVerticalPosition, closeButtonMargin}) => closeButtonVerticalPosition === ModalCloseButtonVerticalPosition.BOTTOM ? `${closeButtonMargin}px`: "0px"};
`;

const CloseImage = styled(Image)<{
  closeButtonHorizontalPosition: ModalCloseButtonHorizontalPosition, 
  closeButtonMargin: number
}>`
  margin-right: ${({closeButtonHorizontalPosition, closeButtonMargin}) => closeButtonHorizontalPosition === ModalCloseButtonHorizontalPosition.RIGHT ? `${closeButtonMargin}px`: "0px"};
  margin-left: ${({closeButtonHorizontalPosition, closeButtonMargin}) => closeButtonHorizontalPosition === ModalCloseButtonHorizontalPosition.LEFT ? `${closeButtonMargin}px`: "0px"};
  cursor: pointer;
`;

const Content: React.FC<{ 
    children: React.ReactNode, 
    contentConfig: IContentConfig,
    closeModal: (result: any | null) => void
  }> = ({children, contentConfig, closeModal}) => {
  const handleClose = () => {
    closeModal(null);
  }
  
  return (
    <MainContentContainer 
        closeButtonVerticalPosition = {contentConfig.closeButtonVerticalPosition! as ModalCloseButtonVerticalPosition}
        backgroundcolor={contentConfig.backgroundColor!} 
        bottomleftborderradius={contentConfig.bottomLeftBorderRadius!}
        bottomrightborderradius={contentConfig.bottomRightBorderRadius!}
        topleftborderradius={contentConfig.topLeftBorderRadius!}
        toprightborderradius={contentConfig.topRightBorderRadius!}
      >
      <CloseButtonContainer 
        closeButtonVerticalPosition = {contentConfig.closeButtonVerticalPosition! as ModalCloseButtonVerticalPosition}
        closeButtonHorizontalPosition = {contentConfig.closeButtonHorizontalPosition! as ModalCloseButtonHorizontalPosition}
        closeButtonMargin = {contentConfig.closeButtonMargin! as number} 
      >
        <CloseImage
          closeButtonHorizontalPosition = {contentConfig.closeButtonHorizontalPosition! as ModalCloseButtonHorizontalPosition}
          closeButtonMargin = {contentConfig.closeButtonMargin! as number} 
          src="/close.svg" 
          width={contentConfig?.closeButtonWidth! as number}
          height={contentConfig?.closeButtonHeight! as number} 
          alt="Close Button"
          onClick={handleClose}
        />
      </CloseButtonContainer>
      <ContentContainer
        padding={contentConfig.padding!}
        childrenverticalpos={contentConfig.childrenVerticalPosition!}
        childrenhorizontalpos={contentConfig.childrenHorizontalPosition!}
      >
        {children}
      </ContentContainer>
    </MainContentContainer>
  )
}

export default Content;
