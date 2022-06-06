import React from 'react'
import { IconConfig } from '../types'
const AlphabetB: React.FC<IconConfig> = ({
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
                d="M14.1 12H5M14.1 12C16.8062 12 19 9.98528 19 7.5C19 5.01472 16.8062 3 14.1 3H5V21H14.1C16.8062 21 19 18.9853 19 16.5C19 14.0147 16.8062 12 14.1 12Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetB
