import {GestureResponderEvent, TextStyle, ViewStyle} from "react-native";
import {ComponentProps} from "react";
import {AntDesign, Ionicons} from "@expo/vector-icons";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning";
export type ButtonSize = "xs" | "sm" | "lg" | "xl";

export type ButtonProps = {
    label: string;
    onPress: (evt: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    icon?: ComponentProps<typeof Ionicons>['name'];
    outlined?: boolean;
};
