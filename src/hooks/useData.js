import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export const useData = () => {
  const context = useContext(DataContext)

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a DataProvider")
  }

  return context
}