import { getConfig, onConfigChange } from './userConfig'

function setSizeAttribute(iconSize) {
   return document.body.setAttribute('data-materialiconic-size', iconSize)
}

export function initIconSizes() {
   const setIconSize = () => getConfig('iconSize').then(setSizeAttribute)

   document.addEventListener('DOMContentLoaded', setIconSize, false)

   onConfigChange('iconSize', setSizeAttribute)
   onConfigChange('iconSize', setIconSize, 'default')
}
