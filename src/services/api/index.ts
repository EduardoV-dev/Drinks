interface IApi {
  get: () => Promise<any>
}

export const createClient = (baseURL: string) => (endpoint: string): IApi => {
  const path: string = `${baseURL}/${endpoint}`;
  return {
    get: () =>
      fetch(path).then(res => res.json()).then(res => res)
  }
}