import React from 'react'
import { IconConfig } from '../types'
const Reply: React.FC<IconConfig> = ({
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
                d="M9.99999 9.21468V4.92896L2.92892 12L9.99999 19.0711V14.2392M10 9.22304C10.6432 9.07708 11.3126 9.00002 12 9.00002C16.9706 9.00002 21 13.0295 21 18C21 18.8675 20.8773 19.7063 20.6482 20.5C19.5649 16.7457 16.1031 14 12 14C11.3126 14 10.6432 14.0771 10 14.223"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Reply
