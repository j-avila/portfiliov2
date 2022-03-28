import { useEffect, useState } from "react"

export const useData = (API, options = {}) => {
  const [data, setdata] = useState()
  const [loading, setloading] = useState(false)

  const fetchData = async (API) => {
    setloading(true)
    const response = await fetch(API, options)
    const json = await response.json()
    setdata(json)
    setloading(false)
  }

  useEffect(() => {
    fetchData(API)
  }, [])

  return { loading, data }
}
