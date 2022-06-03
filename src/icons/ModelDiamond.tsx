import React from 'react'
import { IconConfig } from '../types'
const ModelDiamond: React.FC<IconConfig> = ({
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
                d="M2 10L6 4H18L22 10M2 10L12 20M2 10H22M12 20L22 10M12 20L16 10L12 4L8 10L12 20Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ModelDiamond
