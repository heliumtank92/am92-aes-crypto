/** @ignore */
export function jsonParse(string: any): any {
  try {
    return JSON.parse(string)
  } catch (error) {
    return string
  }
}
