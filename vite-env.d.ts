/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_XS_BREAKPOINT: number
  readonly VITE_APP_SM_BREAKPOINT: number
  readonly VITE_APP_MD_BREAKPOINT: number
  readonly VITE_APP_LG_BREAKPOINT: number
  readonly VITE_APP_XL_BREAKPOINT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
