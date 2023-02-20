import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar, menuClasses } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/PersonOutlined'
import VideoIcon from '@mui/icons-material/VideocamOutlined'

import { tokens } from '../../config/theme'

const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [selected, setSelected] = useState('dashboard')

    return (
        <Sidebar
            backgroundColor={colors.primary[400]}
            rootStyles={{
                border: 0,
            }}
            defaultCollapsed={true}>
            <Menu
                menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: colors.greenAccent[500],
                        },
                    },
                }}>
                <MenuItem
                    rootStyles={{
                        backgroundColor:
                            selected === 'dashboard' ? colors.greenAccent[500] : 'inherit',
                    }}
                    icon={<VideoIcon />}
                    component={<Link replace={true} to="/" />}
                    onClick={() => setSelected('dashboard')}
                />
                <MenuItem
                    rootStyles={{
                        backgroundColor:
                            selected === 'mycard' ? colors.greenAccent[500] : 'inherit',
                    }}
                    icon={<PersonIcon />}
                    component={<Link replace={true} to="/card" />}
                    onClick={() => setSelected('mycard')}
                />
            </Menu>
        </Sidebar>
    )
}

export default SideBar
