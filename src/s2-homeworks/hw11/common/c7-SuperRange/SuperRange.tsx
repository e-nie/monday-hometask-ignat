import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx = {{ // стили для слайдера // пишет студент
                width: '80%',
                // borderRadius: '10px',
                height: '4px',
                color: 'success.light',
                               // ":active": 'rgb(0, 204, 34)',
                // color: 'rgb(139, 139, 139)',
                // thumb: 'green'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
