// This prevents "InvalidCharacterError: Failed to execute 'btoa' on 'Window'" errors

export function sanitizeString(str: string): string {
  if (!str) return str

  return (
    str
      // Replace smart quotes with straight quotes
      .replace(/[""]/g, '"')
      .replace(/['']/g, "'")
      // Replace em-dashes with hyphens
      .replace(/[–—]/g, "-")
      // Replace ellipsis
      .replace(/…/g, "...")
      // Replace other common problematic Unicode characters
      .replace(/[©]/g, "(c)")
      .replace(/[®]/g, "(R)")
      .replace(/[™]/g, "(TM)")
      // Remove any remaining non-ASCII characters that could cause issues
      .replace(/[^\x00-\x7F]/g, (char) => {
        const code = char.charCodeAt(0)
        return code > 127 ? "?" : char
      })
  )
}

export function sanitizeObject<T extends Record<string, any>>(obj: T): T {
  const sanitized: any = {}

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      sanitized[key] = sanitizeString(value)
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map((item) => (typeof item === "string" ? sanitizeString(item) : item))
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = sanitizeObject(value)
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}
