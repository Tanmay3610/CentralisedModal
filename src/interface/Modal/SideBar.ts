import { WidthType, ModalHorizontalPosition } from "@/constants";
import { IModalWrapperAnimationConfig, IModalConfig, IWrapperConfig, IContentConfig } from "@/interface/Modal/Modal";

type SideBarWidthType = Exclude<WidthType, WidthType.COVER>;
type SideBarHorizontalAlignment = Exclude<ModalHorizontalPosition, ModalHorizontalPosition.CENTER | ModalHorizontalPosition.CUSTOM>

type SidebarAnimationConfig = Omit<IModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
type SideBarWrapperConfig = Omit<IWrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {horizontalAlignment?: SideBarHorizontalAlignment, modalAnimationConfig: SidebarAnimationConfig};
type SideBarContentConfig = Omit<IContentConfig, "widthType" | "heightType" | "height" | "childrenHorizontalPosition"> & {widthType?: SideBarWidthType}
export type SideBarConfig = Omit<IModalConfig, "wrapperConfig" | "contentConfig"> & {wrapperConfig?: SideBarWrapperConfig, contentConfig?: SideBarContentConfig};
