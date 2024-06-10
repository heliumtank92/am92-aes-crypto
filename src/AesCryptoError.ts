import { SERVICE } from './CONFIG'
import { AesCryptoErrorMap } from './TYPES'

/** @ignore */
const DEFAULT_ERROR_MSG = 'Aes Crypto Error'
/** @ignore */
const DEFAULT_ERROR_STATUS_CODE = 500
/** @ignore */
const DEFAULT_ERROR_CODE = 'AesCrypto::GENERIC'

/**
 * Error class whose instance is thrown in case of any error.
 *
 * @class
 * @typedef {AesCryptoError}
 * @extends {Error}
 */
export class AesCryptoError extends Error {
  /**
   * Flag to identify if error is a custom error.
   */
  readonly _isCustomError = true
  /**
   * Flag to identify if error is a AesCryptoError.
   */
  readonly _isAesCryptoError = true
  /**
   * Node project from which Error is thrown.
   */
  readonly service: string
  /**
   * Error's message string.
   */
  message: string
  /**
   * HTTP status code associated with the error.
   */
  statusCode: number
  /**
   * Error Code.
   */
  errorCode: string
  /**
   * Error object.
   */
  error?: any
  /**
   * Creates an instance of AesCryptoError.
   *
   * @constructor
   * @param [e] Any Error instance to wrap with AesCryptoError.
   * @param [eMap] AesCryptoErrorMap to rewrap error for better understanding.
   */
  constructor(e?: any, eMap?: AesCryptoErrorMap) {
    super()

    this.service = SERVICE
    this.message = eMap?.message || e?.message || DEFAULT_ERROR_MSG
    this.statusCode = eMap?.statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = eMap?.errorCode || e?.code || DEFAULT_ERROR_CODE
    this.error = e
  }
}
