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
};