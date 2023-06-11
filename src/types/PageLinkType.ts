import { DefineComponent } from 'vue'

export type PageLinkType = {
  label: string
  anchor: string
  icon?: string
  showInWebNav?: boolean
  showInMobNav?: boolean
  component?: DefineComponent<{}, {}, any>
}
