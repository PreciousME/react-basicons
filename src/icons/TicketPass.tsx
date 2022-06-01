import React from 'react'
import { IconConfig } from '../types'
const TicketPass: React.FC<IconConfig> = ({
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
                d="M21 5H3C2.44772 5 2 5.44772 2 6V9.5H2.6C3.98071 9.5 5.1 10.6193 5.1 12C5.1 13.3807 3.98071 14.5 2.6 14.5H2V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V14.5H21.9C20.5193 14.5 19.4 13.3807 19.4 12C19.4 10.6193 20.5193 9.5 21.9 9.5H22V6C22 5.44772 21.5523 5 21 5Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 5V19"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="3 3"
            />
        </svg>
    )
}

export default TicketPass
