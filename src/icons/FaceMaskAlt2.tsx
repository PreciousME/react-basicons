import React from 'react'
import { IconConfig } from '../types'
const FaceMaskAlt2: React.FC<IconConfig> = ({
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
                d="M5 8H19M5 8V13.5C5 14.1093 5.25513 14.621 5.69842 15.0175L8.74604 17.7438C10.6185 19.4187 13.3815 19.4187 15.254 17.7438L18.3016 15.0175C18.7449 14.621 19 14.1093 19 13.5V8M5 8L2 5M19 8L22 5"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default FaceMaskAlt2
