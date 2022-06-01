import React from 'react'
import { IconConfig } from '../types'
const CameraPhoto: React.FC<IconConfig> = ({
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
                d="M4 21H20C21.1046 21 22 20.1046 22 19V8.6C22 7.49543 21.1046 6.6 20 6.6L17 6.6L14.5 3H9.5L7 6.6L4 6.6C2.89543 6.6 2 7.49543 2 8.6V19C2 20.1046 2.89543 21 4 21Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="13"
                r="4"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CameraPhoto
