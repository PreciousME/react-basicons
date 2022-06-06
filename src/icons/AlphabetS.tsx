import React from 'react'
import { IconConfig } from '../types'
const AlphabetS: React.FC<IconConfig> = ({
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
                d="M11.5 12H14.5C16.9853 12 19 14.0147 19 16.5C19 18.9853 16.9853 21 14.5 21H5M12.5 12H9.5C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3H19"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetS
