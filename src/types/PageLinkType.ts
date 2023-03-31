import { DefineComponent } from 'vue'

export type PageLinkType = {
  label: string
  anchor: string
  icon?: string
  showInNav?: boolean
  component?: DefineComponent<{}, {}, any>
}
