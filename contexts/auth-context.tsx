'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há um usuário salvo no localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Aqui você implementaria a chamada real para sua API
      // Por enquanto, vamos simular um login bem-sucedido
      if (email === 'teste@teste.com' && password === '123456') {
        const user = {
          id: '1',
          name: 'Usuário Teste',
          email: email,
        }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        throw new Error('Email ou senha inválidos')
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Aqui você implementaria a chamada real para sua API
      // Por enquanto, vamos simular um registro bem-sucedido
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
      }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 