import React from 'react'
import { IconConfig } from '../types'
const TheaterMask: React.FC<IconConfig> = ({
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
                d="M16 6V3C16 2.44772 15.5523 2 15 2H3C2.44772 2 2 2.44772 2 3V11C2 14.6979 4.86736 17.726 8.5 17.9824"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7V15C22 18.866 18.866 22 15 22C11.134 22 8 18.866 8 15V7Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.0161 11.0161L12 11"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.0161 11.0161L18 11"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.2359 16.9998C16.6866 17.6136 15.8883 17.9998 14.9998 17.9998C14.0688 17.9998 13.2368 17.5757 12.6865 16.9102"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default TheaterMask
