import React from 'react'
import { IconConfig } from '../types'
const CrosshairTargetCenter: React.FC<IconConfig> = ({
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
                d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H16M12 22C6.47715 22 2 17.5228 2 12M12 22V16M2 12C2 6.47715 6.47715 2 12 2M2 12L8 12M12 2V8"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CrosshairTargetCenter
