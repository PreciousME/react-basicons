import React from 'react'
import { IconConfig } from '../types'
const UploadAlt: React.FC<IconConfig> = ({
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
                d="M10 22H12H14C14.5523 22 15 21.5523 15 21V11L19 10L12 2L5 10L9 11V21C9 21.5523 9.44772 22 10 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default UploadAlt
