/**
 * Type defination for error map to be passed to AesCryptoErrorMap.
 *
 * @interface
 * @typedef {AesCryptoErrorMap}
 */
export interface AesCryptoErrorMap {
  /**
   * Overriding message string for AesCryptoError instance
   */
  message?: string
  /**
   * Overriding error code string for AesCryptoError instance
   */
  errorCode?: string
  /**
   * Overriding HTTP status code for AesCryptoError instance
   */
  statusCode?: number
}
