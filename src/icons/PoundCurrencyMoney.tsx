import React from 'react'
import { IconConfig } from '../types'
const PoundCurrencyMoney: React.FC<IconConfig> = ({
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
                d="M3 21H4.21053C6.30339 21 8 19.3034 8 17.2105V9.5C8 5.91015 10.9101 3 14.5 3H15C17.087 3 18.9251 4.06551 20 5.6822M4 21H21M3 13H16"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default PoundCurrencyMoney
