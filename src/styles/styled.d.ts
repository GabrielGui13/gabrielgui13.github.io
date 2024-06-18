import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            backgroundOpacity: string;
            text: string;
            buttonText: string;

            shadow: string;

            backgroundpresentation: string;
            backgroundpresentation780: string;
        }
    }
}