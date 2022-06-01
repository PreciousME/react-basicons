import React from 'react'
import { IconConfig } from '../types'
const FlagCountry: React.FC<IconConfig> = ({
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
                d="M20 15.0233C18.8333 15.6877 15.6 16.722 12 15.1273C10.5 14.2968 6.8 13.0301 4 15.0234M4 21.9326V2.99656C6.8 1.00328 10.5 2.26993 12 3.10047C15.6 4.69509 18.8333 3.66084 20 2.99642V14.9561"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default FlagCountry
