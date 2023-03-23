const queryString = (params: { [key: string]: string | number | boolean }): string => Object.keys(params)
  .map((key) => `${key}=${params[key]}`)
  .join('&')

export default queryString
