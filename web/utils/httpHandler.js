const apiBase = "/api"

export const setRequestUrl = (url, query) => {
  if (!query) return `${apiBase}/${url}`
  return `${apiBase}/${url}?${query}`
}

export const GET_TYPE = "GET"
export const POST_TYPE = "POST"

const fetchRespHandler = (fetchResponse, options) => {
  const { onError, onSuccess } = options
  return fetchResponse
    .then((data) => {
      if (onSuccess) {
        onSuccess(data)
      }
      return data
    })
    .catch((err) => {
      console.log("err", err)
      if (onError) {
        return onError(err)
      }
      return err
    })
}

export const httpHandler = (request = {}, dispatch) => {
  const { type, url, body = {}, onSuccess, onError } = request
  if (type === "GET") {
    return fetchRespHandler(
      fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return response
      }),
      { onSuccess, onError }
    )
  }

  if (type === "POST") {
    const postOptions = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    }

    return fetchRespHandler(
      fetch(url, postOptions).then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return response
      }),
      {onSuccess, onError}
    )
  }
}
