import React from 'react'
import { getHandleStyle } from './helpers/utils'
import { CropperStyles, Edge } from './types'

export interface Props {
    styles: CropperStyles['handles']
    edges: Edge[]
    onEdgeGrab: (
        edge: string
    ) => (evt: React.MouseEvent | React.TouchEvent) => void
    onDrop: () => void
    onDrag: (evt: React.MouseEvent | React.TouchEvent) => void
}

export const CropHandles: React.FC<Props> = (props) => {
    const { edges, styles, onEdgeGrab, onDrop, onDrag } = props

    return (
        <>
            {edges.map((edge) => {
                const { inner, outer } = getHandleStyle(edge, styles)
                return (
                    <div
                        key={edge}
                        style={{ ...styles.common.outer, ...outer }}
                        onTouchEnd={onDrop}
                        onTouchStart={onEdgeGrab(edge)}
                        onTouchMove={onDrag}
                        onMouseMove={onDrag}
                        onMouseDown={onEdgeGrab(edge)}
                        onMouseUp={onDrop}
                    >
                        <div
                            style={{
                                ...styles.common.inner,
                                ...inner
                            }}
                        />
                    </div>
                )
            })}
        </>
    )
}
