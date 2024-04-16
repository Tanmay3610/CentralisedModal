"use client"

import { ContentConfig } from "@/interface/Modal";
import styled from "styled-components";

const ContentContainer = styled.div<{padding: number, backgroundColor: string, borderRadius: number}>`
  padding: ${({padding}) => padding}px;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: ${({borderRadius}) => borderRadius}px;
`;

const Content: React.FC<{ children: React.ReactNode, contentConfig: ContentConfig }> = ({children, contentConfig}) => {
  return (
    <ContentContainer 
      padding={contentConfig.padding!} 
      backgroundColor={contentConfig.backgroundColor!} 
      borderRadius={contentConfig.borderRadius!}
    >
      {children}
    </ContentContainer>
  )
}

export default Content;
