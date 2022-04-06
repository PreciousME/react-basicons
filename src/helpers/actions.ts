import { Dispatch, SetStateAction, MouseEvent, TouchEvent } from 'react'
import { Dimensions } from '../types'
import { getClientPosition } from './getters'
import { setCropByCase } from './setters'

export function drag(
    evt: MouseEvent | TouchEvent,
    cropperDimensions: Dimensions,
    activeEdge: string,
    imageSpec: Dimensions,
    crop: Dimensions,
    setCrop: Dispatch<SetStateAction<Dimensions>>
): void {
    if (!cropperDimensions || !imageSpec || !crop) {
        return
    }
    // What needs to be done is to listen for mouse move event on the document
    // if the mouse moves outside the bounds, then just update the cropper edge to
    // be at the boundary
    evt.preventDefault()
    evt.stopPropagation()
    if (!activeEdge) {
        return
    }
    let [clientX, clientY] = getClientPosition(evt)
    clientX -= cropperDimensions.left
    clientY -= cropperDimensions.top
    setCropByCase(activeEdge, imageSpec, clientX, clientY, setCrop)
}

export function dragFrom(
    edge: string,
    setActiveEdge: Dispatch<SetStateAction<string>>
): (evt: MouseEvent | TouchEvent) => void {
    return (evt: MouseEvent | TouchEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        setActiveEdge(edge)
    }
}
