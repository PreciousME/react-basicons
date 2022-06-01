import React from 'react'
import { IconConfig } from '../types'
const ThunderstormWeather: React.FC<IconConfig> = ({
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
                d="M6.34141 7C7.16508 4.66962 9.38756 3 12 3C15.3137 3 18 5.68629 18 9C20.2091 9 22 10.7909 22 13C22 14.8638 20.7252 16.4299 19 16.874M6.32069 7.04576C3.8806 7.37721 2 9.46898 2 12C2 14.0503 3.2341 15.8124 5 16.584"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 11.0002L9 16.0005L15 16.0001M15 16.0491L12 21.0493"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ThunderstormWeather
