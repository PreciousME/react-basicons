import React from 'react'
import { IconConfig } from '../types'
const ShareAlt: React.FC<IconConfig> = ({
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
                d="M13.9289 9.21468V4.92896L21 12L13.9289 19.0711V14.2392M13.9289 9.22304C13.2857 9.07708 12.6163 9.00002 11.9289 9.00002C6.95836 9.00002 2.92892 13.0295 2.92892 18C2.92892 18.8675 3.05165 19.7063 3.28069 20.5C4.36404 16.7457 7.82583 14 11.9289 14C12.6163 14 13.2857 14.0771 13.9289 14.223"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ShareAlt
