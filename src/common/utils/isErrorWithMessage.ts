/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(error: unknown): error is { error: string } {
  return (
    typeof error === 'object' && // Проверяем, что error – это объект
    error != null && // Убеждаемся, что это не null
    'error' in error && // Проверяем, что у объекта есть свойство 'message'
    typeof (error as any).error === 'string' // Убеждаемся, что это строка
  )
}