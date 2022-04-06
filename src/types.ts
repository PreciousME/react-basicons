import { CSSProperties } from 'react'

export type Edge = 'left' | 'right' | 'top' | 'bottom'

export type ElementLayer = 'inner' | 'outer'

export type HandleStyle = Record<ElementLayer, CSSProperties>

export interface CropperStyles {
    handles: {
        common: HandleStyle
        left: HandleStyle
        right: HandleStyle
        bottom: HandleStyle
        top: HandleStyle
    }
    image: CSSProperties
    cropPolygon: CSSProperties
    container: CSSProperties
}

export interface ICropperConfig {
    minCrop: number
    handleConfig: {
        edges: Array<Edge>
        height: number
        width: number
    }
    styles: CropperStyles
    imageAlt: string
    zeroDimensions: Dimensions
    hint: string
}

export interface ScaleDimensions {
    height: number
    width: number
    isFullHeight?: boolean
    isFullWidth?: boolean
}

export type SourceMeasurement = number
export type DestMeasurement = number

export type ScaleSpec = Record<
    'height' | 'width',
    [SourceMeasurement, DestMeasurement]
>

export interface Dimensions extends ScaleDimensions {
    top: number
    left: number
}

export interface BoundingBox {
    top: number
    bottom: number
    left: number
    right: number
}
export interface CropperOutput {
    boundingBox?: BoundingBox
    imageUrl: string
}
