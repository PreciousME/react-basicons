import { useEffect, useState } from 'react'
import { deepEqual } from '../helpers/utils'
import { config } from '../config'
import { Dimensions } from '../types'

/**
 *
 * Takes a ref and returns the dimensions of the referenced element
 *
 */

export function useElementDimensions(
    ref: React.RefObject<HTMLElement>,
    deps: any[] = []
): Dimensions {
    const [elementDimensions, setElementDimensions] = useState<Dimensions>(
        config.zeroDimensions
    )

    const effectAction = () => {
        if (ref && ref.current) {
            const newElementDimensions: Dimensions = {
                width: Math.floor(ref.current.getBoundingClientRect().width),
                height: Math.floor(ref.current.getBoundingClientRect().height),
                top: Math.floor(ref.current.getBoundingClientRect().top),
                left: Math.floor(ref.current.getBoundingClientRect().left)
            }

            if (
                !elementDimensions ||
                !deepEqual(
                    elementDimensions as any,
                    newElementDimensions as any
                )
            ) {
                setElementDimensions(newElementDimensions)
            }
        }
    }

    useEffect(effectAction, [...deps, ref])

    return elementDimensions
}
