import { createMuiTheme } from "@material-ui/core";
import { raleway } from '../fonts/raleway';

export const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        button: {
            textTransform: 'none',
            marginRight: '5%',
            marginTop: '3%',
            marginBottom: '2%'
        },
        h4: {
            fontWeight: 'bold',
        },
        body1: {
            color: '#000000',
            fontSize: '14',
            fontWeight: 'normal',
        },

    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [raleway],

            },
        },
    },
});