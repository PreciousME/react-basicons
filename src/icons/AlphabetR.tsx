import React from 'react'
import { IconConfig } from '../types'
const AlphabetR: React.FC<IconConfig> = ({
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
                d="M5 12V3H14.5C16.9853 3 19 5.01472 19 7.5C19 9.98528 16.9853 12 14.5 12H5ZM5 12V21M11 12L19 21"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetR
