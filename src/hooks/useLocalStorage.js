import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const savedValue = localStorage.getItem(key)

    if (savedValue !== null) {
      try {
        return JSON.parse(savedValue)
      } catch {
        localStorage.removeItem(key)
      }
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}