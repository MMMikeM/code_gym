import { useQuery } from "react-query"

export default function useGet<T>(
  url: string,
  resourceKey: string,
  cacheTime = 60
): {
  data: T | undefined
  isSuccess: boolean
  isLoading: boolean
  isError: boolean
} {
  const { data, isSuccess, isLoading, isError } = useQuery<T, Error>(
    resourceKey,
    () => fetch(url).then((res) => res.json()),
    { cacheTime }
  )
  return { data, isSuccess, isLoading, isError }
}
