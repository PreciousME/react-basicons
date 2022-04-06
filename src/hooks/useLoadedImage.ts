import {
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    MutableRefObject
} from 'react'
import { config } from '../config'
import { Dimensions, ScaleSpec } from '../types'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { resizeImage } from '../helpers/image'
import { useElementDimensions } from './useElementDimensions'

interface Params {
    boxRef: MutableRefObject<HTMLDivElement | null>
    imageRef: MutableRefObject<HTMLImageElement | null>
    deps: any[]
}

export function useLoadedImage(
    params: Params
): [Dimensions, Dimensions, Dispatch<SetStateAction<Dimensions>>] {
    const { boxRef, imageRef, deps } = params
    const [imageSpec, setImageSpec] = useState<Dimensions>(
        config.zeroDimensions
    )
    const [cropSpec, setCropSpec] = useState<Dimensions>(config.zeroDimensions)
    const boxDimensions = useElementDimensions(boxRef)

    useEffect(() => {
        if (!boxDimensions) {
            return
        }
        if (!(imageRef && imageRef.current)) {
            return
        }
        const image = imageRef.current
        const scaleSpec: ScaleSpec = {
            height: [image.naturalHeight, boxDimensions.height],
            width: [image.naturalWidth, boxDimensions.width]
        }
        const resizedImageSpec = resizeImage(scaleSpec)
        setImageSpec(resizedImageSpec)
        setCropSpec(resizedImageSpec)
        // disable scrolls from weird iOS scroll behaviour
        disableBodyScroll(imageRef.current)
        // re-enable scroll after unmount
        return () => clearAllBodyScrollLocks()
    }, [...deps])
    return [imageSpec, cropSpec, setCropSpec]
}
