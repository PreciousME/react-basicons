import React from 'react'
import { IconConfig } from '../types'
const Link: React.FC<IconConfig> = ({
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
                d="M10.4986 7.49586L12.7507 5.24378C14.4091 3.58541 17.0978 3.5854 18.7562 5.24378C20.4146 6.90216 20.4146 9.59093 18.7562 11.2493L16.5041 13.5014M6.5 11.5L5.24378 12.7507C3.58541 14.4091 3.5854 17.0978 5.24378 18.7562C6.90216 20.4146 9.59093 20.4146 11.2493 18.7562L12.5 17.5M9.5 14.5L14.5 9.5"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Link
