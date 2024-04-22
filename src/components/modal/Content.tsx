"use client"

import { ChildrenHorizontalPosition, ChildrenVerticalPosition, HeightType, WidthType } from "@/constants";
import { IContentConfig } from "@/interface/Modal/Modal";
import styled from "styled-components";

const ContentContainer = styled.div<{
  padding: number, 
  backgroundcolor: string, 
  bottomleftborderradius: number, 
  bottomrightborderradius: number,
  topleftborderradius: number,
  toprightborderradius: number,
  widthtype: WidthType, 
  heighttype: HeightType,
  height: number,
  width: number,
  childrenverticalpos: ChildrenVerticalPosition, 
  childrenhorizontalpos: ChildrenHorizontalPosition
}>`
  padding: ${({padding}) => padding}px;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  border-radius: ${({bottomleftborderradius, bottomrightborderradius, topleftborderradius, toprightborderradius}) => `${topleftborderradius}px ${toprightborderradius}px ${bottomrightborderradius}px ${bottomleftborderradius}px`};
  width: ${({widthtype, width}) => widthtype === WidthType.FIT_CONTENT ? "fit-content" : widthtype === WidthType.COVER ? "100%" : `${width}vw`};
  display: flex;
  flex-direction: column;
  height: ${({heighttype, height}) => heighttype === HeightType.FIT_CONTENT ? "fit-content" : heighttype === HeightType.COVER ? "100%" : `${height}vh`};
  align-items: ${({childrenhorizontalpos}) => childrenhorizontalpos === ChildrenHorizontalPosition.CENTER ? "center" : childrenhorizontalpos === ChildrenHorizontalPosition.LEFT ? "flex-start" : "flex-end"};
  justify-content: ${({childrenverticalpos}) => childrenverticalpos === ChildrenVerticalPosition.BOTTOM ? "flex-end" : childrenverticalpos === ChildrenVerticalPosition.TOP ? "flex-start": "center"};
`;

const Content: React.FC<{ children: React.ReactNode, contentConfig: IContentConfig }> = ({children, contentConfig}) => {
  return (
    <ContentContainer
      padding={contentConfig.padding!} 
      backgroundcolor={contentConfig.backgroundColor!} 
      bottomleftborderradius={contentConfig.bottomLeftBorderRadius!}
      bottomrightborderradius={contentConfig.bottomRightBorderRadius!}
      topleftborderradius={contentConfig.topLeftBorderRadius!}
      toprightborderradius={contentConfig.topRightBorderRadius!}
      widthtype={contentConfig.widthType!}
      heighttype={contentConfig.heightType!}
      height={contentConfig.height!}
      width={contentConfig.width!}
      childrenverticalpos={contentConfig.childrenVerticalPosition!}
      childrenhorizontalpos={contentConfig.childrenHorizontalPosition!}
    >
      {children}
    </ContentContainer>
  )
}

export default Content;
