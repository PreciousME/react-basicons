import React from 'react'
import { IconConfig } from '../types'
const AlphabetP: React.FC<IconConfig> = ({
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
                d="M5 12.4737V3H14.2632C16.8792 3 19 5.12076 19 7.73684C19 10.3529 16.8792 12.4737 14.2632 12.4737H5ZM5 12.4737V21"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetP
