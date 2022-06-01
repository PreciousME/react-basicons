import React from 'react'
import { IconConfig } from '../types'
const SketchDiamond: React.FC<IconConfig> = ({
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
                d="M12 3.00415L16.1935 3.38538L15.1189 7.00003H8.88108L7.80646 3.38538L12 3.00415ZM9.46157 9.00003H14.5384L12 17.8669L9.46157 9.00003ZM7.38123 9.00003L10.0393 18.2848L3.02941 9.00003H7.38123ZM6.79457 7.00003H3.4142L6.0199 4.39433L6.79457 7.00003ZM17.2054 7.00003L17.9954 4.34291L20.8099 7.00003H17.2054ZM20.7683 9.00003L13.997 18.158L16.6187 9.00003H20.7683Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default SketchDiamond
