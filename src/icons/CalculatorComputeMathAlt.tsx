import React from 'react'
import { IconConfig } from '../types'
const CalculatorComputeMathAlt: React.FC<IconConfig> = ({
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
                d="M17.5 4V9M20 6.5H15M4.5 14.5L6.5 16.5M6.5 16.5L8.5 18.5M6.5 16.5L8.5 14.5M6.5 16.5L4.5 18.5M20 18H15M20 15H15M9 6.5H4"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CalculatorComputeMathAlt
