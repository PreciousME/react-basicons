import React from 'react'
import { IconConfig } from '../types'
const TagPriceDiscount: React.FC<IconConfig> = ({
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
                d="M3 12.393L3 3L12.393 3L20.4442 11.0512C21.1853 11.7922 21.1853 12.9938 20.4442 13.7349L13.7349 20.4442C12.9938 21.1853 11.7922 21.1853 11.0512 20.4442L3 12.393Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.01611 7.01611L7 7"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default TagPriceDiscount
