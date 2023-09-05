import { createTheme, Theme } from '@mui/material'

const primary = {
    main: '#034670',
    light: '#E3E9EE'
}

const secondary = {
    main: '#43E0FF'
}

export const theme: Theme = createTheme({
    palette: {
        primary,
        secondary
    }
})
