import React, { useState } from 'react'
import {
    Modal,
    Box,
    useTheme,
    Grid,
    Typography,
    Button,
    IconButton,
    Select,
    LinearProgress,
    MenuItem,
} from '@mui/material'
import { FileUploader } from 'react-drag-drop-files'
import CloseIcon from '@mui/icons-material/CloseOutlined'
import UploadIcon from '@mui/icons-material/CloudUploadOutlined'

import { tokens } from '../../config/theme'

const FileUploadModal = ({ open, onClose }) => {
    const [file, setFile] = useState()
    const [category, setCategory] = useState('전체')
    const [progress, setProgress] = useState(25)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Modal hideBackdrop open={open}>
            <Grid
                container
                columns={10}
                diplay="flex"
                direction="column"
                top="50%"
                left="50%"
                position="absolute"
                boxShadow={24}
                width={500}
                height={500}
                bgcolor={colors.primary[400]}
                border={`1px solid ${colors.primary[400]}`}
                p={2}
                sx={{
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '8px',
                }}>
                <Grid item xs={1} display="flex" flexDirection="row-reverse" alignItems="center">
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={9} container columns={10} display="flex" direction="column">
                    <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
                        <Select
                            fullWidth
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem key="전체" value="전체">
                                전체
                            </MenuItem>
                            <MenuItem key="테스트" value="테스트">
                                테스트
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={0.5} />
                    <Grid item xs={5}>
                        <FileUploader
                            multiple={false}
                            handleChange={(_file) => setFile(_file)}
                            types={['MP4']}>
                            <Box
                                width="100%"
                                border={`5px dashed ${colors.blueAccent[300]}`}
                                borderRadius="10px"
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ cursor: 'pointer' }}>
                                <UploadIcon sx={{ fontSize: '100px' }} />
                                <Typography variant="h1">파일을 선택해주세요</Typography>
                            </Box>
                        </FileUploader>
                    </Grid>
                    <Grid item xs={0.5} />
                    <Grid item xs={1} display="flex" alignItems="center">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress
                                color="secondary"
                                value={progress}
                                variant="determinate"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={1} display="flex" justifyContent="flex-end" alignItems="center">
                        <Button variant="contained" size="large" color="secondary">
                            업로드
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default FileUploadModal
