import React from 'react'

export function getLimit(limitFirstVal: number, limitSecondVal: number) {
    let limit: number[] = []
    limit = [limitFirstVal, limitSecondVal]
    return limit
}

export function getClientPosition(
    evt: React.MouseEvent | React.TouchEvent
): [number, number] {
    let clientX = 0
    let clientY = 0
    if ((evt as React.MouseEvent).clientX) {
        const mouseEvt = evt as React.MouseEvent
        clientX = mouseEvt.clientX
        clientY = mouseEvt.clientY
    }
    if ((evt as React.TouchEvent).touches) {
        const touchEvt = evt as React.TouchEvent
        clientX = touchEvt.touches[0].clientX
        clientY = touchEvt.touches[0].clientY
    }
    return [clientX, clientY]
}
