import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FoodData } from "../types/FoodData"
import { API_URL } from "./urls"
 
const postData = async (food: FoodData): Promise<FoodData> => {
  const url = `${API_URL}/food`
  const payload = JSON.stringify(food)

  const headers = {
    'Content-Type': 'application/json'
  } as HeadersInit
  const options = {
    headers,
    method: "POST",
    body: payload
  } as RequestInit
  
  const response = await fetch(url, options)
  const dataResponse = await response.json() as FoodData

  return dataResponse
}

export const useFoodDataMutate = () => {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['food-data'])
        .then(r => r)
        .catch(ex => { throw ex })
    }
  })

  return mutate
}