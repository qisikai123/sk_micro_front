// 这里放置希望主应用和子应用共同使用的工具函数

export function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date)
  const y = d.getFullYear()
  const m = `${d.getMonth() + 1}`.padStart(2, '0')
  const day = `${d.getDate()}`.padStart(2, '0')
  const h = `${d.getHours()}`.padStart(2, '0')
  const mi = `${d.getMinutes()}`.padStart(2, '0')
  const s = `${d.getSeconds()}`.padStart(2, '0')
  return `${y}-${m}-${day} ${h}:${mi}:${s}`
}

export function logWithPrefix(msg, prefix = 'MASTER') {
  // 在主应用和子应用中统一的日志输出函数
  // 子应用通过 shared.utils.logWithPrefix 使用
  // eslint-disable-next-line no-console
  console.log(`[${prefix}]`, msg)
}
