import {Pressable, StyleSheet, Text} from "react-native";
import {COLORS} from "../../../constants/colors";
import {AntDesign} from "@expo/vector-icons";
import {ButtonProps, ButtonSize, ButtonVariant} from "./types";


const VARIANT_TO_COLOR: Record<
    ButtonVariant,
    { base: string; pressed: string; text: string }
> = {
    primary: {base: COLORS.primary500, pressed: COLORS.primary200, text: "#fff"},
    secondary: {base: COLORS.secondary500, pressed: COLORS.secondary200, text: "#fff"},
    success: {base: COLORS.success500, pressed: COLORS.success200, text: "#fff"},
    danger: {base: COLORS.danger500, pressed: COLORS.danger200, text: "#fff"},
    warning: {base: COLORS.warning500, pressed: COLORS.warning200, text: "#fff"},
};

const SIZE_STYLES: Record<ButtonSize, { paddingVertical: number; paddingHorizontal: number; fontSize: number }> = {
    xs: {paddingVertical: 5, paddingHorizontal: 10, fontSize: 14},
    sm: {paddingVertical: 8, paddingHorizontal: 14, fontSize: 16},
    lg: {paddingVertical: 14, paddingHorizontal: 30, fontSize: 20},
    xl: {paddingVertical: 18, paddingHorizontal: 42, fontSize: 24},
};

export const Button = ({
                           variant = "primary",
                           label,
                           onPress,
                           size = "sm",
                           style,
                           textStyle,
                           disabled = false,
                           icon,
                           outlined = false
                       }: ButtonProps) => {
    const colors = VARIANT_TO_COLOR[variant];
    const sizeStyle = SIZE_STYLES[size];

    return (
        <Pressable
            style={({pressed}) => [
                styles.button,
                {
                    backgroundColor: outlined
                        ? (pressed ? colors.pressed : "transparent")
                        : disabled
                            ? "#ccc"
                            : pressed
                                ? colors.pressed
                                : colors.base,
                    borderColor: outlined ? colors.base : "transparent",
                    borderWidth: outlined ? 1 : 0,
                    opacity: disabled ? 0.7 : 1,
                    paddingVertical: sizeStyle.paddingVertical,
                    paddingHorizontal: sizeStyle.paddingHorizontal,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                },
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {icon && (
                <AntDesign
                    name={icon}
                    size={sizeStyle.fontSize + 3}
                    color={outlined ? colors.base : colors.text}
                    style={styles.iconStyle}
                />
            )}
            <Text
                style={[
                    styles.buttonText,
                    {
                        color: outlined ? colors.base : colors.text,
                        fontSize: sizeStyle.fontSize
                    },
                    textStyle,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    iconStyle: {
        marginRight: 6,
    },
});

export default Button;
