import { useMutation, useQueryClient } from "react-query"

const queryClient = useQueryClient()

function usePost(url: string) {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const post = (body: any) => {
    return fetch(url, { ...postOptions, body }).then((res) => res.json())
  }

  const { mutate, isSuccess, isLoading, isError } = useMutation(post)
  return { post: mutate, isSuccess, isLoading, isError }
}

function usePut(url: string) {
  const putOptions = {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const put = ({ id, body }: { id: number; body: any }) => {
    const urlID = `${url}/${id}`
    return fetch(urlID, { ...putOptions, body }).then((res) => res.json())
  }

  const { mutate, isSuccess, isLoading, isError } = useMutation(put)
  return { put: mutate, isSuccess, isLoading, isError }
}

function useDelete(url: string, key: string) {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const del = () => {
    return fetch(url, { ...deleteOptions }).then((res) => res.json())
  }

  const { mutate, isSuccess, isLoading, isError } = useMutation(del, {
    onSuccess: () => queryClient.invalidateQueries(key),
  })
  return { del: mutate, delete: mutate, isSuccess, isLoading, isError }
}

export { usePost, usePut, useDelete }
