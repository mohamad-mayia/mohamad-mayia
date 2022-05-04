import { createTheme } from '@mui/material/styles';
const light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#EBAFE0',
            light: '#5E7BFD',
            dark: '#3A53A2',
        },
        secondary: {
            main: '#EBD4F7',
            light: '#FFC5F6',
            dark: '#FF9FB1',
        },

    },
})


export default light;