import { IconType } from 'react-icons'


interface Tag {
	name: string
	icon: IconType
	showIcon: boolean
}

export type { Tag }
export {default as pwa} from './pwa'
export {default as react} from './react'
export {default as research} from './research'
export {default as typescript} from './typescript'
export {default as javascript} from './javascript'
export {default as ui} from './ui'


export {default as travel} from './travel'