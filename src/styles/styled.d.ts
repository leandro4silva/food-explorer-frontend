import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        COLORS: {
            BACKGROUND_900: string,
            BACKGROUND_800: string,
            BACKGROUND_700: string,
            BACKGROUND_600: string,
            BACKGROUND_500: string,
            BACKGROUND_400: string,

            BACKGROUND_GRAY: string,

            BACKGROUND_RED_900: string,
            BACKGROUND_RED_800: string,
            BACKGROUND_RED_700: string,

            TEXT_WHITE: string,
            
            TEXT_GRAY_200: String,
            TEXT_GRAY_700: string,
            TEXT_GRAY_800: string,
            TEXT_GRAY_900: string,

            TEXT_BLUE: string
        }
    }
}