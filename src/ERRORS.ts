import { AesCryptoErrorMap } from './TYPES'

/** =============== Encrypt Data Errors =============== */
/** @ignore */
export const ENCRYPT_DATA_AES_KEY_REQUIRED_ERROR: AesCryptoErrorMap = {
  message: 'aesKey is required',
  errorCode: 'AesCrypto::ENCRYPT_DATA_AES_KEY_REQUIRED'
}

/** @ignore */
export const ENCRYPT_DATA_INVALID_AES_KEY_ERROR: AesCryptoErrorMap = {
  message: 'Invalid aesKey type. Must be a string',
  errorCode: 'AesCrypto::ENCRYPT_DATA_INVALID_AES_KEY'
}

/** @ignore */
export const ENCRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR: AesCryptoErrorMap = {
  message: 'Invalid aesKey length',
  errorCode: 'AesCrypto::ENCRYPT_DATA_INVALID_AES_KEY_LENGTH'
}
/** =================================================== */

/** =============== Decrypt Data Errors =============== */
/** @ignore */
export const DECRYPT_DATA_PAYLOAD_REQUIRED_ERROR: AesCryptoErrorMap = {
  message: 'payload is required',
  errorCode: 'AesCrypto::DECRYPT_DATA_PAYLOAD_REQUIRED'
}

/** @ignore */
export const DECRYPT_DATA_INVALID_PAYLOAD_ERROR: AesCryptoErrorMap = {
  message:
    'Invalid payload. Must be a string of format {IV.AUTH_TAG.CIPHERTEXT}',
  errorCode: 'AesCrypto::DECRYPT_DATA_INVALID_PAYLOAD'
}

/** @ignore */
export const DECRYPT_DATA_INVALID_IV_LENGTH_ERROR: AesCryptoErrorMap = {
  message: 'Invalid IV length in payload',
  errorCode: 'AesCrypto::DECRYPT_DATA_INVALID_IV_LENGTH'
}

/** @ignore */
export const DECRYPT_DATA_AES_KEY_REQUIRED_ERROR: AesCryptoErrorMap = {
  message: 'aesKey is required',
  errorCode: 'AesCrypto::DECRYPT_DATA_AES_KEY_REQUIRED'
}

/** @ignore */
export const DECRYPT_DATA_INVALID_AES_KEY_ERROR: AesCryptoErrorMap = {
  message: 'Invalid aesKey type. Must be a string',
  errorCode: 'AesCrypto::DECRYPT_DATA_INVALID_AES_KEY'
}

/** @ignore */
export const DECRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR: AesCryptoErrorMap = {
  message: 'Invalid aesKey length',
  errorCode: 'AesCrypto::DECRYPT_DATA_INVALID_AES_KEY_LENGTH'
}
/** =================================================== */
