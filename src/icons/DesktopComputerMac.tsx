import React from 'react'
import { IconConfig } from '../types'
const DesktopComputerMac: React.FC<IconConfig> = ({
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
                d="M9 16V17.1716C9 18.9826 8.28058 20.7194 7 22H17C15.7194 20.7194 15 18.9826 15 17.1716V16M4 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DesktopComputerMac
