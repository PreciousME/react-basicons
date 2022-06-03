import React from 'react'
import { IconConfig } from '../types'
const HeadphoneMusicAlt: React.FC<IconConfig> = ({
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
                d="M6.71428 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14H6.71429C7.26657 14 7.71429 14.4477 7.71429 15V21C7.71429 21.5523 7.26657 22 6.71428 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.2857 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14H17.2857C16.7334 14 16.2857 14.4477 16.2857 15V21C16.2857 21.5523 16.7334 22 17.2857 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 14V9C5 5.13401 8.13401 2 12 2V2C15.866 2 19 5.13401 19 9V14"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default HeadphoneMusicAlt
