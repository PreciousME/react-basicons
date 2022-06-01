import React from 'react'
import { IconConfig } from '../types'
const CoffeeTeaAlt: React.FC<IconConfig> = ({
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
                d="M3 3H18V15C18 16.6569 16.6569 18 15 18H6C4.34315 18 3 16.6569 3 15V3Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18 4H18.9098C20.6165 4 22 5.38352 22 7.09017V7.09017C22 8.26064 21.3387 9.33065 20.2918 9.8541L18 11"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <line
                x1="2"
                y1="22"
                x2="22"
                y2="22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CoffeeTeaAlt
