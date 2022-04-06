import { ICropperConfig, CropperStyles, Dimensions } from './types'

class CropperConfig implements ICropperConfig {
    handleConfig: ICropperConfig['handleConfig']
    styles: CropperStyles
    imageAlt: string
    zeroDimensions: Dimensions
    hint: string
    minCrop: number
    theme = {
        size: { small: '8px', medium: '16px', large: '32px' },
        space: { small: '8px', medium: '16px', large: '32px' },
        color: { white: '#fff', grayDark: '#232323' }
    }
    constructor() {
        this.minCrop = 30
        this.handleConfig = {
            edges: ['top', 'right', 'left', 'bottom'],
            height: 10,
            width: 10
        }
        this.imageAlt = 'Image to crop'
        this.zeroDimensions = {
            top: 0,
            left: 0,
            height: 0,
            width: 0
        }
        this.styles = {
            handles: {
                common: {
                    inner: {
                        display: 'flex',
                        touchAction: 'none',
                        background: this.theme.color.grayDark,
                        cursor: 'grab',
                        height: this.handleConfig.height,
                        width: this.handleConfig.width
                    },
                    outer: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute'
                    }
                },
                top: {
                    inner: {},
                    outer: {
                        left: 0,
                        right: 0,
                        transform: 'translateY(-50%)',
                        height: this.theme.size.large
                    }
                },
                left: {
                    inner: {},
                    outer: {
                        top: 0,
                        bottom: 0,
                        transform: 'translateX(-50%)',
                        width: this.theme.size.large
                    }
                },
                bottom: {
                    inner: {},
                    outer: {
                        left: 0,
                        right: 0,
                        top: '100%',
                        transform: 'translateY(-50%)',
                        height: this.theme.size.large
                    }
                },
                right: {
                    inner: {},
                    outer: {
                        bottom: 0,
                        top: 0,
                        left: '100%',
                        transform: 'translateX(-50%)',
                        width: this.theme.size.large
                    }
                }
            },
            image: {
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
            },
            cropPolygon: {
                position: 'absolute',
                background: 'transparent',
                boxShadow: `10px 10px 200vw 200vh rgba(255,255,255,0.6)`
            },
            container: {
                display: 'flex',
                height: '30vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                touchAction: 'none',
                marginBottom: this.theme.space.medium
            }
        }
        this.hint = 'Drag to crop'
    }
}

export const config = new CropperConfig()
