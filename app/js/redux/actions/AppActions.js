/*
 * action 类型
 */
export const HIDE_TABBAR = 'HIDE_TABBAR';
export const SET_NAV_TITLE = 'SET_NAV_TITLE';
export const HIDE_NAV_LEFT = 'HIDE_NAV_LEFT';
export const SET_NAV_BACK_LINK = 'SET_NAV_BACK_LINK';

/*
 * action 创建函数
 */
export function hideTabbar(bool) {
  return { type: HIDE_TABBAR, bool}
}

export function setNavTitle(title) {
  return { type: SET_NAV_TITLE, title}
}

export function hideNavLeft(bool) {
  return { type: HIDE_NAV_LEFT, bool}
}

export function setNavBackLink(link) {
  return { type: SET_NAV_BACK_LINK, link}
}
