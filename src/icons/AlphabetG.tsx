import React from 'react'
import { IconConfig } from '../types'
const AlphabetG: React.FC<IconConfig> = ({
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
                d="M13 13H19V16C19 19.3137 16.3137 22 13 22H11C7.68629 22 5 19.3137 5 16V8C5 4.68629 7.68629 2 11 2H13C15.973 2 18.441 4.16229 18.917 7"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AlphabetG
