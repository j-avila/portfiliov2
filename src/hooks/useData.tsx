/* eslint-disable react-hooks/exhaustive-deps */
import { PromiseWithChild } from "child_process"
import { useEffect, useState } from "react"

export const useData = (
  API: string,
  options = {}
): { loading: boolean; data: any } => {
  const [data, setdata] = useState()
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

  return { loading, data }
}
