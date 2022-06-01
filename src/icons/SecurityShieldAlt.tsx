import React from 'react'
import { IconConfig } from '../types'
const SecurityShieldAlt: React.FC<IconConfig> = ({
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
                d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SecurityShieldAlt
