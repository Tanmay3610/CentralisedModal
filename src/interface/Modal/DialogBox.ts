import { IWrapperConfig, IContentConfig, IModalConfig, IModalWrapperAnimationConfig } from "@/interface/Modal/Modal";

type DialogBoxAnimationConfig = Omit<IModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
type DialogBoxWrapperConfig = Omit<IWrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {modalAnimationConfig: DialogBoxAnimationConfig}
type DialogBoxContentConfig = Omit<IContentConfig, "widthType" | "heightType" | "width" | "height" | "childrenHorizontalPosition" | "childrenVerticalPosition">
export type DialogBoxConfig = Omit<IModalConfig, "wrapperConfig"> & {wrapperConfig?: DialogBoxWrapperConfig, contentConfig?: DialogBoxContentConfig};
