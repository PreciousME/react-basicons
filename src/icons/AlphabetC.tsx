import React from 'react'
import { IconConfig } from '../types'
const AlphabetC: React.FC<IconConfig> = ({
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
                d="M19 4.22222C17.2072 2.83244 14.9243 2 12.4385 2C6.67346 2 2 6.47715 2 12C2 17.5228 6.67346 22 12.4385 22C14.9243 22 17.2072 21.1676 19 19.7778"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetC
