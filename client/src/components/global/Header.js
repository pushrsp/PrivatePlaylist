import React, { useContext } from 'react'
import { Box, IconButton, useTheme, InputBase } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import UploadFileIcon from '@mui/icons-material/CloudUploadOutlined'
import SearchIcon from '@mui/icons-material/SearchOutlined'

import { ColorModeContext, tokens } from '../../config/theme'

const Header = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                <IconButton>
                    <UploadFileIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Header
