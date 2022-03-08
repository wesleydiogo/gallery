export enum ThemeColors {
    BLUE1 = "#3333e6",
    BLUE2 = "#1a1a80",
    GAINSBORO = "#DCDCDC"
}

export interface Theme {
    backgroundColor?: string,
    primaryColor?: ThemeColors,
    secondaryColor?: string,
    primaryColorHover?: ThemeColors,
    secondaryColorHover?: string
}