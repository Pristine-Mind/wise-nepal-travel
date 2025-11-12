import * as React from "react"
import { useContext, createContext } from "react"
import { ToastProvider } from "./toast"

const ToastContext = createContext<{
  show: (content: React.ReactNode) => void
} | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export function ToastProviderWrapper({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<React.ReactNode[]>([])

  const show = (content: React.ReactNode) => {
    setToasts((prev) => [...prev, content])
  }

  return (
    <ToastContext.Provider value={{ show }}>
      <ToastProvider />
      {children}
      {toasts.map((toast, idx) => (
        <React.Fragment key={idx}>{toast}</React.Fragment>
      ))}
    </ToastContext.Provider>
  )
}
