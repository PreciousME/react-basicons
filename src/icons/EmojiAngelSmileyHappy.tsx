import React from 'react'
import { IconConfig } from '../types'
const EmojiAngelSmileyHappy: React.FC<IconConfig> = ({
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
                d="M21.5423 9.00019C21.8397 9.94717 22 10.9549 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.9549 2.16033 9.94717 2.45774 9.00019M9.01611 10.0161L9 10M8 15C8 15 9 17 12 17C15 17 16 15 16 15M15.0161 10.0161L15 10M22 4C22 5.10457 17.5228 6 12 6C6.47715 6 2 5.10457 2 4C2 2.89543 6.47715 2 12 2C17.5228 2 22 2.89543 22 4Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EmojiAngelSmileyHappy
