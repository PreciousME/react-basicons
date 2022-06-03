import React from 'react'
import { IconConfig } from '../types'
const CompressArrowsConverge: React.FC<IconConfig> = ({
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
                d="M15 6L12 9M12 9L9 6M12 9V2M15 18L12 15M12 15L9 18M12 15V22M6 9L9 12M9 12L6 15M9 12H2M18 9L15 12M15 12L18 15M15 12H22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CompressArrowsConverge
