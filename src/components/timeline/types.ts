export type TimelineBlockType = {
  type: 'ITEM' | 'RIGHT' | 'LEFT' | 'RIGHT-DOWN' | 'DOWN-LEFT' | 'LEFT-DOWN' | 'DOWN-RIGHT' | 'START' | 'END'
  content?: any
  tooltip?: string
}

export type TimelineItemWrapper = {
  _item: any
  _class: string
}
