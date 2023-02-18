import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ColorModeContext, useMode } from './config/theme'

const App = () => {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <div className="app">
                        <main className="content"></main>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
