const API_KEY = 'WONGAMES'

export const getStorageItem = (key: string) => {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${API_KEY}_${key}`)

  return JSON.parse(data!)
}

export const setStorageItem = (key: string, value: string[]) => {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${API_KEY}_${key}`, data)
}
