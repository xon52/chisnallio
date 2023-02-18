export default (message: string, type?: 'warning' | 'error') => {
  const color = type === 'warning' ? 'yellow' : type === 'error' ? 'red' : 'green'
  const icon = type === 'warning' ? '⚠️' : type === 'error' ? '❌' : '✅'
  console.log(`%c${icon} ${message}`, `color: ${color}; font-weight: bold;`) // eslint-disable-line no-console
}
