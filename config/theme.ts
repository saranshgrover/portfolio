import {extendTheme} from '@chakra-ui/react'
import typography from './typography'

const theme = extendTheme({
    ...typography,
    styles: {
        global: {
            body: {
                overflowX: 'hidden'
            },
            a: {
                backgroundImage: `linear-gradient(120deg, teal 0%, teal 100%)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 0.2em',
                backgroundPosition: '0 88%',
                transition: 'background-size 0.25s ease-in',
                '&:hover': {
                    backgroundSize: '100% 88%'
                }
            }
        }
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: 'dark'
    }
})

export default theme