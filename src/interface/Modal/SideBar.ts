import { WidthType, ModalHorizontalPosition } from "@/utils/constants";
import { IModalWrapperAnimationConfig, IModalConfig, IWrapperConfig, IContentConfig } from "@/interface/Modal/Modal";

type SideBarWidthType = Exclude<WidthType, WidthType.COVER>;
type SideBarHorizontalAlignment = Exclude<ModalHorizontalPosition, ModalHorizontalPosition.CENTER | ModalHorizontalPosition.CUSTOM>

type SidebarAnimationConfig = Omit<IModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
type SideBarWrapperConfig = Omit<IWrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {horizontalAlignment?: SideBarHorizontalAlignment, modalAnimationConfig: SidebarAnimationConfig};
type SideBarContentConfig = Omit<IContentConfig, "heightType" | "height" | "childrenHorizontalPosition" | "topLeftBorderRadius" | "topRightBorderRadius" | "bottomLeftBorderRadius" | "bottomRightBorderRadius"> & {widthType?: SideBarWidthType, borderRadius?: number}
export type SideBarConfig = Omit<IModalConfig, "wrapperConfig" | "contentConfig"> & {wrapperConfig?: SideBarWrapperConfig, contentConfig?: SideBarContentConfig};
