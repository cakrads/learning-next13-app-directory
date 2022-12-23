export const FOLDER_APP = {
  LAYOUT: "app/layout",
  PAGE: "app/layout",
  SIMPLE: {
    LAYOUT: "app/1-simple/layout",
    PAGE: "app/1-simple/page",
    TEMPLATE: "app/1-simple/template",
  },
  NESTED: {
    DYNAMIC: {
      LAYOUT: "app/2-nested/[1-dynamic]/layout",
      PAGE: "app/2-nested/[1-dynamic]/page",
      TEMPLATE: "app/2-nested/[1-dynamic]/template",
    },
    STATIC: {
      LAYOUT: "app/2-nested/1-static/layout",
      PAGE: "app/2-nested/1-static/page",
      TEMPLATE: "app/2-nested/1-static/template",
    },
    LAYOUT: "app/2-nested/layout",
    PAGE: "app/2-nested/page",
    TEMPLATE: "app/2-nested/template",
  },
  LOADING: {
    DYNAMIC: {
      PAGE: "app/3-loading/[dynamic]/page",
    },
    LAYOUT: "app/3-loading/layout",
    LOADING: "app/3-loading/loading",
    PAGE: "app/3-loading/page",
    TEMPLATE: "app/3-loading/template",
  },
  LOADING_DEEPER: {
    CASE1: {
      LOADING: "app/3-loading-deeper/case-1/loading",
      PAGE: "app/3-loading-deeper/case-1/page",
    },
    CASE2: {
      LAYOUT: "app/3-loading-deeper/case-2/layout",
      PAGE: "app/3-loading-deeper/case-2/page",
    },
    CASE3: {
      LAYOUT: "app/3-loading-deeper/case-3/layout",
      PAGE: "app/3-loading-deeper/case-3/page",
    },
    LAYOUT: "app/3-loading-deeper/layout",
    LOADING: "app/3-loading-deeper/loading",
    PAGE: "app/3-loading-deeper/page",
    TEMPLATE: "app/3-loading-deeper/template",
  },
  NOT_FOUND: {
    LAYOUT: "app/4-not-found/layout",
    NOT_FOUND: "app/4-not-found/not-found",
    PAGE: "app/4-not-found/page",
    TEMPLATE: "app/4-not-found/template",
  },
  NOT_FOUND_DEEPER: {
    CASE1: {
      LAYOUT: "app/4-not-found-deeper/case-1/layout",
      NOT_FOUND: "app/4-not-found-deeper/case-1/not-found",
      PAGE: "app/4-not-found-deeper/case-1/page",
      TEMPLATE: "app/4-not-found-deeper/case-1/template",
    },
    CASE2: {
      LAYOUT: "app/4-not-found-deeper/case-2/layout",
      NOT_FOUND: "app/4-not-found-deeper/case-2/not-found",
      PAGE: "app/4-not-found-deeper/case-2/page",
    },
    CASE3: {
      LAYOUT: "app/4-not-found-deeper/case-3/layout",
      NOT_FOUND: "app/4-not-found-deeper/case-3/not-found",
      PAGE: "app/4-not-found-deeper/case-3/page",
      TEMPLATE: "app/4-not-found-deeper/case-3/template",
    },
    LAYOUT: "app/4-not-found-deeper/layout",
    NOT_FOUND: "app/4-not-found-deeper/not-found",
    PAGE: "app/4-not-found-deeper/page",
    TEMPLATE: "app/4-not-found-deeper/template",
  },
  ERROR: {
    CASE1: {
      LAYOUT: "app/5-error/case-1/layout",
      ERROR: "app/5-error/case-1/error",
      PAGE: "app/5-error/case-1/page",
      TEMPLATE: "app/5-error/case-1/template",
    },
    CASE2: {
      LAYOUT: "app/5-error/case-2/layout",
      PAGE: "app/5-error/case-2/page",
      TEMPLATE: "app/5-error/case-2/template",
    },
    CASE3: {
      LAYOUT: "app/5-error/case-3/layout",
      ERROR: "app/5-error/case-3/error",
      LOADING: "app/5-error/case-3/lading",
      PAGE: "app/5-error/case-3/page",
      TEMPLATE: "app/5-error/case-3/template",
    },
    CASE4: {
      DYNAMIC: {
        LAYOUT: "app/5-error/case-4/dynamic/layout",
        ERROR: "app/5-error/case-4/dynamic/error",
        LOADING: "app/5-error/case-4/dynamic/lading",
        PAGE: "app/5-error/case-4/dynamic/page",
        TEMPLATE: "app/5-error/case-4/dynamic/template",
      },
      LAYOUT: "app/5-error/case-4/layout",
      PAGE: "app/5-error/case-4/page",
      TEMPLATE: "app/5-error/case-4/template",
    },
    LAYOUT: "app/5-error/layout",
    ERROR: "app/5-error/error",
    PAGE: "app/5-error/page",
    TEMPLATE: "app/5-error/template",
  },
  FETCH: {
    CASE1: {
      PAGE: "app/6-fetch/case-1/page",
      LOADING: "app/6-fetch/case-1/loading",
      TEMPLATE: "app/6-fetch/case-1/template",
    },
    CASE2: {
      LAYOUT: "app/6-fetch/case-2/layout",
      LOADING: "app/6-fetch/case-2/loading",
      PAGE: "app/6-fetch/case-2/page",
      TEMPLATE: "app/6-fetch/case-2/template",
    },
    CASE3: {
      LAYOUT: "app/6-fetch/case-3/layout",
      LOADING: "app/6-fetch/case-3/lading",
      PAGE: "app/6-fetch/case-3/page",
    },
    CASE4: {
      LAYOUT: "app/6-fetch/case-4/layout",
      PAGE: "app/6-fetch/case-4/page",
      TEMPLATE: "app/6-fetch/case-4/template",
    },
    LAYOUT: "app/6-fetch/layout",
    LOADING: "app/6-fetch/loading",
    PAGE: "app/6-fetch/page",
    TEMPLATE: "app/6-fetch/template",
  },
};

export const API_URL = "http://localhost:3000/api";