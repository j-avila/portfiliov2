/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const useData = (
  API: string,
  options = {}
): { loading: boolean; data: any; reFetch: boolean; setRefetch: any } => {
  const [data, setdata] = useState()
  const [reFetch, setRefetch] = useState(false)
  const [loading, setloading] = useState(false)

  const fetchData = async (API: string, options: any) => {
    setloading(true)
    const response = await fetch(API, options)
    const json = await response.json()
    setdata(json)
    setloading(false)
  }

  useEffect(() => {
    fetchData(API, options)
  }, [])

  useEffect(() => {
    if (reFetch) {
      console.log("refetching")
      fetchData(API, options)
      setRefetch(false)
    }
  }, [reFetch])

  return { loading, data, reFetch, setRefetch }
}
