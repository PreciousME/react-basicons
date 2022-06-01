import React from 'react'
import { IconConfig } from '../types'
const EmojiSmileyDizzyHappy: React.FC<IconConfig> = ({
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
                d="M8 15C8 15 9 17 12 17C15 17 16 15 16 15M16 9L15 10M15 10L14 11M15 10L16 11M15 10L14 9M10 9L9 10M9 10L8 11M9 10L10 11M9 10L8 9M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EmojiSmileyDizzyHappy
