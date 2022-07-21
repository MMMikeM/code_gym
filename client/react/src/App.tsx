import useFetch from "./hooks/useGet"
import { useDelete, usePost, usePut } from "./hooks/usePost"
import { IRepo } from "./models/repo"

function App() {
  // const { data, isSuccess } = useFetch<IRepo[]>(
  //   "https://api.github.com/users/facebook/repos",
  //   "repos"
  // );

  const repo = {
    name: "test",
    description: "test",
    homepage: "test",
  }

  const url = "https://api.github.com/users/facebook/repos"

  const { post, isError, isLoading, isSuccess } = usePost(url)
  const { put } = usePut(url)
  const { del } = useDelete(url)

  post(repo)

  put({ id: 55, body: repo })

  useDelete(`${url}/69`).delete()

  // if (isSuccess)
  //   return (
  //     <>
  //       {data?.map((item) => (
  //         <p>{JSON.stringify(item)}</p>
  //       ))}
  //     </>
  //   );
  // else
  return <button onClick={handleDelete}>Post something</button>
}

export default App
