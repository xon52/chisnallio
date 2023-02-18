export default (obj: Record<string, any>, prop: string) => Object.prototype.hasOwnProperty.call(obj, prop)
