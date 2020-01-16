import { createMuiTheme, Theme } from '@material-ui/core'

const primary = {
    main: '#034670',
    light: '#E3E9EE'
}

const secondary = {
    main: '#43E0FF'
}

export const theme: Theme = createMuiTheme({
    palette: {
        primary,
        secondary
    }
})
