import { IModalConfig, IModalWrapperAnimationConfig, IWrapperConfig, IContentConfig } from "@/interface/Modal/Modal";

type BottomSheetAnimationConfig = Omit<IModalWrapperAnimationConfig, "animationType" | "slideAnimationDirection">
type BottomSheetWrapperConfig = Omit<IWrapperConfig, "verticalAlignment" | "horizontalAlignment" | "modalAnimationConfig"> & {modalAnimationConfig?: BottomSheetAnimationConfig}
type BottomSheetContentConfig = Omit<IContentConfig, "widthType" | "width" | "bottomLeftBorderRadius" | "bottomRightBorderRadius">
export type BottomSheetConfig = Omit<IModalConfig, "wrapperConfig" | "contentConfig"> & {wrapperConfig?: BottomSheetWrapperConfig, contentConfig?: BottomSheetContentConfig};

