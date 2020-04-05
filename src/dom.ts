
const DOM = window.document

/**
 * 获取绝对链接地址
 * @param path 
 */
export const getAbsoluteUrl = (path: string): string => {
  const anchor: HTMLAnchorElement = <HTMLAnchorElement>DOM.createElement('A')
  anchor.href = path
  return anchor.href
}

/**
 * 设置页面标题
 * @param title {string}
 */
export const setTitle = (title: string): void => {
  if (DOM.title) {
    DOM.title = title
  } else {
    DOM.getElementsByTagName('title')[0].innerText = title
  }
}

/**
 * 设置页面 REM 布局
 * @param designWidth 设计宽
 * @param split 分宽数
 */
export const setREMLayout = (designWidth: number = 750, split: number = 100, isSetViewport = true): ((pixel: number) => string) =>{
  const DOC_ELE = <HTMLElement>DOM.documentElement
  let dprDesignWidth = designWidth

  if (isSetViewport) {
    const DPR = window.devicePixelRatio || 1
    dprDesignWidth *= DPR
    const SCALE = (1 / DPR).toFixed(2)
    // Set "viewport" to HD display
    let viewport = DOM.querySelector('meta[name="viewport"]')
    if (!viewport) {
      viewport = DOM.createElement('meta')
      viewport.setAttribute('name', 'viewport')
    }
    viewport.setAttribute('content', `width=device-width, initial-scale=${SCALE}, maximum-scale=${SCALE}, minimum-scale=${SCALE}, user-scalable=0`)
    // Set "data-dpr" for css hack
    DOC_ELE.setAttribute('data-dpr', <string><any>DPR)
    // Set body's fontSize to default font normal
    DOM.body.style.fontSize = 16 * DPR + 'px'
  }

  const IDEAL_WIDTH = DOC_ELE.clientWidth > dprDesignWidth ? dprDesignWidth : DOC_ELE.clientWidth
  DOC_ELE.style.fontSize = (IDEAL_WIDTH / (designWidth / split)).toFixed(4) + 'px'

  return getPx2RemFunc(split)
}

/**
 * 生成 px2rem 函数
 * @param split 
 */
export const getPx2RemFunc = (split: number): ((pixel: number) => string) => (pixel: number) => (pixel / split).toFixed(4) + 'rem'