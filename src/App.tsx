import { useEffect } from "react"
import { useAuth } from "./hooks/auth"
import { useTheme } from "./hooks/theme"
import { lightTheme } from "./themes/lightTheme"
import { darkTheme } from "./themes/darkTheme"
import { ThemeProvider } from "styled-components"


const App = () => {
  const { handleAuthenticateUser } = useAuth()
  const { handleInitTheme, theme } = useTheme()

  useEffect(() => {
    // Authenticate user using token saved in local storage
    handleAuthenticateUser()

    // Apply theme saved by user to local storage
    handleInitTheme()
  }, [])

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      Meu texto qualquer...  Agora sim
    </ThemeProvider>
  )
}

export default App

