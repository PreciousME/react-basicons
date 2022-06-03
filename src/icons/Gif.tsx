import React from 'react'
import { IconConfig } from '../types'
const Gif: React.FC<IconConfig> = ({
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
                d="M13 7V17M17 17V7H21M17 12H20M6.5 12.5H9V13.875C9 15.6009 7.65685 17 6 17C4.34315 17 3 15.6009 3 13.875V10.125C3 8.39911 4.34315 7 6 7C7.15198 7 8.15231 7.67635 8.65498 8.66863"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Gif
