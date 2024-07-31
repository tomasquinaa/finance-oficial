import { DefaultTheme } from "styled-components"

export const darkTheme: DefaultTheme = {
    COLORS: {
        /* Application */
        primary: '#473FCE',
        primayHover: '#8880E5',
        primaryBackgroundExtraLight: '#12113C7D',
        background: '#080325',
        textColor400: '#C2C2C2',
        textColor500: '#CFCFCF',
        borderColor: '#2B374A',
        danger: '#D1493D',
        success: '#28825C',
        warning: '#eba800',
        white: '#FFFFFF',

        /** Application Components */
        buttonBackground: '#473FCE',
        buttonColor: '#FFFFFF',
        buttonHover: '#4F46E5',
        inputBackground: 'transparent',
        inputBackgroundHover: 'transparent',
        inputColor: '#cfcfcf',
        inputBorderColor: '#4F46E573',
        inputBorderColorFocus: '#4F46E5',
        inputPlaceholderColor: '#A3A3A3',
        tableHeaderBackground: '#191A38',
        tableHeaderBorderColor: '#2B374A',
        tableRowHover: '#14142FAB',

        /** Layout */
        sidebarBackground: '#080325',
        sidebarColor: '#E2E8F0',
        sidebarBackgroundHover: '#191a38',
        sidebarBorderColor: '#2B374A',
        navbarBackground: '#080325',
        navbarColor: '#CFCFCF',
        navbarBackgroundHover: '#191A38',

        /** Pages - Auth */
        authCardTitleColor: '#C9CBCF',
        authCardSubTitleColor: '#7D848C',
        authErrorAlertBackground: '#961408ED',
        authErrorAlertColor: '#FFFFFF'
    },
    FONT_SIZES: {
        sm: '.9rem',
        md: '1rem',
        lg: '1.3rem',
        xl: '1.6rem',
        xxl: '2rem'
    }
}