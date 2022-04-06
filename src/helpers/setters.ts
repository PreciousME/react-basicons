import { config } from '../config'
import { Dimensions, CropperOutput } from '../types'

export function setTop(
    limitFirstVal: number,
    limitSecondVal: number,
    clientY: number,
    newCropHeightVal: number
): [number, number] {
    const limit = [limitFirstVal, limitSecondVal]
    const newCropTopVal =
        clientY < limit[0] ? limit[0] : Math.min(clientY, limit[1])
    const newCropTop = newCropTopVal
    const newCropHeight = newCropHeightVal - newCropTop
    return [newCropTop, newCropHeight]
}

export function setRight(
    limitFirstVal: number,
    limitSecondVal: number,
    clientX: number,
    crop: Dimensions
): number {
    const limit = [limitFirstVal, limitSecondVal]
    const newCropWidthVal =
        (clientX < limit[0] ? limit[0] : Math.min(limit[1], clientX)) -
        crop.left
    return newCropWidthVal
}

export function setBottom(
    limitFirstVal: number,
    limitSecondVal: number,
    clientY: number,
    crop: Dimensions
): number {
    const limit = [limitFirstVal, limitSecondVal]
    const newCropHeightVal =
        (clientY < limit[0] ? limit[0] : Math.min(clientY, limit[1])) - crop.top
    return newCropHeightVal
}

export function setLeft(
    limitFirstVal: number,
    limitSecondVal: number,
    clientX: number,
    crop: Dimensions
): [number, number] {
    const limit = [limitFirstVal, limitSecondVal]
    const newCropLeftVal =
        clientX < limit[0] ? limit[0] : Math.min(clientX, limit[1])
    const newCropWidth = crop.width + crop.left - newCropLeftVal
    return [newCropLeftVal, newCropWidth]
}

export function setCropByCase(
    activeCropEdge: string,
    imageDetails: Dimensions,
    clientX: number,
    clientY: number,
    setCrop: React.Dispatch<React.SetStateAction<Dimensions>>
): void {
    switch (activeCropEdge) {
        case 'top':
            setCrop((oldCrop) => {
                const [top, height] = setTop(
                    imageDetails.top,
                    oldCrop.top + oldCrop.height - config.minCrop,
                    clientY,
                    oldCrop.height + oldCrop.top
                )
                return { ...oldCrop, top, height }
            })
            break
        case 'right':
            setCrop((oldCrop) => {
                const width = setRight(
                    oldCrop.left + config.minCrop,
                    imageDetails.left + imageDetails.width,
                    clientX,
                    oldCrop
                )
                return { ...oldCrop, width }
            })
            break
        case 'bottom':
            setCrop((oldCrop) => {
                const height = setBottom(
                    oldCrop.top + config.minCrop,
                    imageDetails.top + imageDetails.height,
                    clientY,
                    oldCrop
                )
                return { ...oldCrop, height }
            })
            break
        case 'left':
            setCrop((oldCrop) => {
                const [left, width] = setLeft(
                    imageDetails.left,
                    oldCrop.left + oldCrop.width - config.minCrop,
                    clientX,
                    oldCrop
                )
                return { ...oldCrop, left, width }
            })
            break
        default:
            break
    }
}

export function setBoundingBox(
    imageData: CropperOutput,
    crop: Dimensions,
    imageDetails: Dimensions
): void {
    if (crop.left || crop.top || crop.width || crop.height) {
        imageData.boundingBox = {
            top: (crop.top - imageDetails.top) / imageDetails.height,
            left: (crop.left - imageDetails.left) / imageDetails.width,
            right:
                (crop.left - imageDetails.left) / imageDetails.width +
                crop.width / imageDetails.width,
            bottom:
                (crop.top - imageDetails.top) / imageDetails.height +
                crop.height / imageDetails.height
        }
    }
}
