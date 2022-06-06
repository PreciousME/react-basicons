import React from 'react'
import { IconConfig } from '../types'
const AccountSearchUserPerson: React.FC<IconConfig> = ({
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
            <circle
                cx="12"
                cy="7"
                r="4"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 21V17C3 15.8954 3.89543 15 5 15H12"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.5 19.5L21 21M20.25 17.625C20.25 19.0747 19.0747 20.25 17.625 20.25C16.1753 20.25 15 19.0747 15 17.625C15 16.1753 16.1753 15 17.625 15C19.0747 15 20.25 16.1753 20.25 17.625Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default AccountSearchUserPerson
