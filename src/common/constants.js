/**
 * 고유의 상수 키값을 관리합니다.
 * 만약, ENUM키나 관리되는 상수값이 많아지는 경우
 * 폴더로 분리하여 모듈화 하여 관리할 필요가 있습니다.
 */

/**
 * Store Mutations Keys
 */
export const MUTATIONS = {
  AUTH: {
    TOKEN: 'auth/token',
    CLEAR_TOKEN: 'auth/clearToken',
    IS_SAVE: 'auth/isSave',
    SESSION: 'auth/session',
  },
  BOARD: {
    APPEND: 'board/append',
    SET: 'board/set',
    INIT: 'board/init',
    DETAIL: 'board/detail',
  },
  TODO: {
    LIST: 'todos/list',
  },
};
/**
 * Store Actions Keys
 */
export const ACTIONS = {
  AUTH: {
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    SESSION: 'auth/session',
    REFRESH_ACCESS: 'auth/refresh',
  },
  BOARD: {
    APPEND: 'board/append',
    DETAIL: 'board/detail',
  },
  TODO: {
    LIST: 'todos/list',
    DELETE: 'todos/delete',
    DONE: 'todos/done',
    REGIST: 'todos/regist',
  },
};
/**
 * Store Getters Keys
 */
export const GETTERS = {
  AUTH: {
    TOKENS: 'auth/token',
    IS_ANONYMOUS: 'auth/isAnonymous',
    SESSION: 'auth/session',
    IS_SAVE: 'auth/isSave',
  },
  BOARD: {
    LIST: 'board/list',
    DETAIL: 'board/detail',
  },
  TODO: {
    LIST: 'todo/list',
  },
};

/**
 * Layout Enum
 * @description /layout 폴더 내 vue 파일명
 */
export const ENUM_LAYOUT = {
  NONE: 'none',
  DEFAULT: 'default',
  SIMPLE: 'simple',
};

/**
 * App Route Names for Navigation
 */
export const VIEW_NAVI = {
  INTRO: 'intro',
  LOGIN: 'login',
  HOME: 'home',
  TODOS: 'todos',
  BOARD_DETAIL: 'board-id',
  BOARD_REGIST: 'board-regist',
  USER_REGIST: 'regist',
  USER_PROFILE: 'profile',
};

/**
 * App Constans Storage Keys
 */
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  IS_SAVE: 'saveAuth',
};

export const STATUS_CODE = {
  UNAUTHORIZED: 401,
};
