import React, { useEffect, useRef, useState } from 'react'
import { config } from './config'
import { useElementDimensions, useLoadedImage } from './hooks'
import { drag, dragFrom } from './helpers/actions'
import { finishCropping } from './helpers/image'
import { CropHandles } from './CropHandleGroup'

export interface Props {
    imageUrl: string
    onCropComplete: (cropped: Blob) => void
    readyToUse: boolean
}

const Cropper: React.FC<Props> = (props: Props) => {
    const { imageUrl, onCropComplete, readyToUse } = props
    const cropperRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const [activeEdge, setActiveEdge] = useState('')
    const [imageLoaded, setImageLoaded] = useState(false)
    const cropperDimensions = useElementDimensions(cropperRef)
    const [scaledImageSpec, crop, setCrop] = useLoadedImage({
        boxRef: cropperRef,
        imageRef,
        deps: [imageLoaded, imageRef]
    })

    useEffect(() => {
        if (readyToUse) {
            onFinish()
        }
    }, [readyToUse])

    const onDrop = () => {
        setActiveEdge('')
    }

    const onDrag = (evt: React.MouseEvent | React.TouchEvent) => {
        drag(evt, cropperDimensions, activeEdge, scaledImageSpec, crop, setCrop)
    }

    const onEdgeGrab = (edge: string) => {
        return dragFrom(edge, setActiveEdge)
    }

    const onFinish = () => {
        finishCropping(imageUrl, crop, scaledImageSpec, onCropComplete)
    }

    // seems not to be triggered only with document.onmouseup
    document.onmouseup = onDrop

    const handles = (
        <CropHandles
            {...{
                onDrag,
                onDrop,
                onEdgeGrab,
                edges: config.handleConfig.edges,
                styles: config.styles.handles
            }}
        />
    )

    return (
        <div>
            <div>{config.hint}</div>
            <div style={config.styles.container} ref={cropperRef}>
                <img
                    style={config.styles.image}
                    src={imageUrl}
                    ref={imageRef}
                    onLoad={() => setImageLoaded(true)}
                    alt={config.imageAlt}
                />

                <div style={{ ...config.styles.cropPolygon, ...crop }}>
                    {handles}
                </div>
            </div>
        </div>
    )
}

export default Cropper
