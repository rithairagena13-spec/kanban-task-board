
import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    const savedValue = localStorage.getItem(key)

    if (savedValue !== null) {
      try {
        setStoredValue(JSON.parse(savedValue))
      } catch {
        localStorage.removeItem(key)
      }
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}