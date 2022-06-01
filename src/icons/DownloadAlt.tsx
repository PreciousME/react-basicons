import React from 'react'
import { IconConfig } from '../types'
const DownloadAlt: React.FC<IconConfig> = ({
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
                d="M10 2H12H14C14.5523 2 15 2.44771 15 3V13L19 14L12 22L5 14L9 13V3C9 2.44772 9.44772 2 10 2Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DownloadAlt
