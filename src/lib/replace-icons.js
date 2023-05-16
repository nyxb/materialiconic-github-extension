import { observe } from 'selector-observer'

import { replaceElementWithIcon, replaceIconInRow } from './replace-icon'

// replacing all icons synchronously prevents visual "blinks" but can
// cause missing icons/rendering delay in very large folders
// replacing asynchronously instead fixes problems in large folders, but introduces "blinks"
// Here we compromise, rushing the first n replacements to prevent blinks that will likely be "above the fold"
// and delaying the replacement of subsequent rows
let executions = 0
let timerID
function rushFirst(rushBatch, callback) {
   if (executions <= rushBatch) {
      callback() // immediately run to prevent visual "blink"
      setTimeout(callback, 20) // run again later to catch any icons that are missed in large repositories
      executions += 1
   }
   else {
      setTimeout(callback, 0) // run without blocking to prevent delayed rendering of large folders too much
      clearTimeout(timerID)
      timerID = setTimeout(() => {
         executions = 0
      }, 1000) // reset execution tracker
   }
}

// Monitor DOM elements that match a CSS selector.
export function observePage(gitProvider, iconPack) {
   observe(gitProvider.selectors.row, {
      add(row) {
         const callback = () => replaceIconInRow(row, gitProvider, iconPack)
         rushFirst(90, callback)
         gitProvider.onAdd(row, callback)
      },
   })
}

export function replaceAllIcons(provider, iconPack) {
   return document.querySelectorAll('img[data-materialiconic-iconname]').forEach((iconEl) => {
      const iconName = iconEl.getAttribute('data-materialiconic-iconname')
      const fileName = iconEl.getAttribute('data-materialiconic-filename')
      if (iconName)
         replaceElementWithIcon(iconEl, iconName, fileName, iconPack, provider)
   })
}
