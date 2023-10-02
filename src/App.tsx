import { AllUsersProvider } from "./contexts/AllUsersContext"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <AllUsersProvider>
      <HomePage />
    </AllUsersProvider>
  )
}

export default App
