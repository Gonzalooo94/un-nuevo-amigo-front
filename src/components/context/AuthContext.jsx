import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export function AuthProvider ({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const sessionStart = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  const sessionClear = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        sessionStart,
        sessionClear
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
