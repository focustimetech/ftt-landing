import React from 'react'

import { Button, CircularProgress } from '@mui/material'
import { ButtonProps } from '@mui/material/Button'

interface IProps extends ButtonProps {
    loading: boolean
}

const LoadingButton: React.SFC<IProps> = (props) => {
    const { disabled, loading, ...rest } = props
    return (
        <div className='button-container'>
            <Button {...rest} disabled={disabled || loading}/>
            {loading && (
                <CircularProgress size={24} className='button-progress' />
            )}
        </div>
    )
}

export default LoadingButton
