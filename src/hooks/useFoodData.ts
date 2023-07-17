import { useQuery } from "@tanstack/react-query"
import { FoodData } from "../types/FoodData"
import { API_URL } from "./urls"

const fetchData = async (): Promise<FoodData[]> => {
  const url = `${API_URL}/food`
  const response = await fetch(url)
  const data = await response.json() as FoodData[]
  return data
}

export const useFoodData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })

  const data = query.data 
    ? query.data 
    : []

  return {
    ...query,
    data
  }
}