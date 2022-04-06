import {
    ScaleSpec,
    Dimensions,
    CropperStyles,
    Edge,
    HandleStyle
} from '../types'

export function validateFileSize(file: File): {
    isValid: boolean
    message?: string
} {
    const LIMIT = 9 * 1024 * 1024 // 9 MB
    const validity = { isValid: false }
    if (file.size > LIMIT) {
        return { ...validity, message: 'Please select an Image less than 9MB' }
    }
    return { isValid: true }
}

export function deepEqual(
    x: Record<string, any>,
    y: Record<string, any>
): boolean {
    // note that this function is naive in the sense that it expects that no key-pair value
    // should have an 'object' value
    const sameKeys = Object.keys(x).length === Object.keys(y).length
    return Object.keys(x).every((key) => x[key] === y[key]) && sameKeys
}

export function adjustPosition(scaleSpec: ScaleSpec): Dimensions {
    const [height, containerHeight] = scaleSpec.height
    const [width, containerWidth] = scaleSpec.width
    const hDelta = containerHeight - height
    const wDelta = containerWidth - width
    const top = hDelta / 2
    const left = wDelta / 2
    return { height, width, top, left }
}

export function getHandleStyle(
    edge: Edge,
    styleConfig: CropperStyles['handles']
): HandleStyle {
    switch (edge) {
        case 'bottom':
            return styleConfig.bottom
        case 'top':
            return styleConfig.top
        case 'left':
            return styleConfig.left
        case 'right':
            return styleConfig.right
    }
}
