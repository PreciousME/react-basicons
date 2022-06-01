import React from 'react'
import { IconConfig } from '../types'
const CursorPointerMouse: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg
            width={`${size || 24}`}
            height={`${size || 24}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.91304 19.4348L3 3L19.4348 6.91304L14.7391 10.0435L21 16.3043L16.3043 21L10.0435 14.7391L6.91304 19.4348Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CursorPointerMouse
