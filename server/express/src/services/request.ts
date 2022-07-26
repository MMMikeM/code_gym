import { ICoinData } from "../models/coindata"

const fetchCoinData = async (): Promise<ICoinData[]> => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&"
    )
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export default fetchCoinData
