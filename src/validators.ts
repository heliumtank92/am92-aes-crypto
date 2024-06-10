import { AesCryptoError } from './AesCryptoError'
import {
  DECRYPT_DATA_AES_KEY_REQUIRED_ERROR,
  DECRYPT_DATA_INVALID_AES_KEY_ERROR,
  DECRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR,
  DECRYPT_DATA_INVALID_IV_LENGTH_ERROR,
  DECRYPT_DATA_INVALID_PAYLOAD_ERROR,
  DECRYPT_DATA_PAYLOAD_REQUIRED_ERROR,
  ENCRYPT_DATA_AES_KEY_REQUIRED_ERROR,
  ENCRYPT_DATA_INVALID_AES_KEY_ERROR,
  ENCRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR
} from './ERRORS'

/** @ignore */
export function validateEncryptData(data: any, aesKey: string): Buffer {
  if (!aesKey) {
    throw new AesCryptoError(undefined, ENCRYPT_DATA_AES_KEY_REQUIRED_ERROR)
  }

  if (typeof aesKey !== 'string') {
    throw new AesCryptoError(undefined, ENCRYPT_DATA_INVALID_AES_KEY_ERROR)
  }

  const buffer = Buffer.from(aesKey, 'base64')

  if (buffer.length !== 32) {
    throw new AesCryptoError(
      undefined,
      ENCRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR
    )
  }

  return buffer
}

/** @ignore */
export function validateDecryptDataPayload(payload: string): Array<Buffer> {
  if (!payload) {
    throw new AesCryptoError(undefined, DECRYPT_DATA_PAYLOAD_REQUIRED_ERROR)
  }

  if (typeof payload !== 'string') {
    throw new AesCryptoError(undefined, DECRYPT_DATA_INVALID_PAYLOAD_ERROR)
  }

  const [ivString, cipherTextString] = payload.split('.')

  const ivBuffer = Buffer.from(ivString, 'base64')
  const cipherTextBuffer = Buffer.from(cipherTextString, 'base64')

  if (ivBuffer.length !== 16) {
    throw new AesCryptoError(undefined, DECRYPT_DATA_INVALID_IV_LENGTH_ERROR)
  }

  return [ivBuffer, cipherTextBuffer]
}

/** @ignore */
export function validateDecryptDataKey(aesKey: string): Buffer {
  if (!aesKey) {
    throw new AesCryptoError(undefined, DECRYPT_DATA_AES_KEY_REQUIRED_ERROR)
  }

  if (typeof aesKey !== 'string') {
    throw new AesCryptoError(undefined, DECRYPT_DATA_INVALID_AES_KEY_ERROR)
  }

  const buffer = Buffer.from(aesKey, 'base64')

  if (buffer.length !== 32) {
    throw new AesCryptoError(
      undefined,
      DECRYPT_DATA_INVALID_AES_KEY_LENGTH_ERROR
    )
  }

  return buffer
}
