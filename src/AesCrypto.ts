import crypto from 'crypto'
import { AesCryptoError } from './AesCryptoError'
import {
  validateDecryptDataKey,
  validateDecryptDataPayload,
  validateEncryptData
} from './validators'
import { jsonParse } from './utils'

/**
 * AesCrypto Class to implement AES Cryptography.
 *
 * @class
 * @typedef {AesCrypto}
 */
export class AesCrypto {
  /**
   * Function to encrypt any data using `AES-256-CBC` algorithm.
   *
   * <b>Throws :</b> {@link AesCryptoError}. Expected error codes :
   * - AesCrypto::ENCRYPT_DATA_AES_KEY_REQUIRED
   * - AesCrypto::ENCRYPT_DATA_INVALID_AES_KEY
   * - AesCrypto::ENCRYPT_DATA_INVALID_AES_KEY_LENGTH
   * - AesCrypto::ENCRYPT_DATA_UNKNOWN_ERR_CODE
   * - AesCrypto::ENCRYPT_DATA_{CRYPTO_ERROR_CODE}
   *
   * @static
   * @param data Data to be encrypted.
   * @param aesKey AES-256 key as a Base64 string.
   * @returns Encrypted data as Base64 string in the format {IV.CIPHERTEXT}.
   */
  static encryptData(data: any, aesKey: string): string {
    const keyBuffer = validateEncryptData(data, aesKey)
    const ivBuffer = crypto.randomBytes(16)
    const ivString = ivBuffer.toString('base64')
    const dataString = typeof data === 'string' ? data : JSON.stringify(data)

    try {
      const encryptor = crypto.createCipheriv(
        'aes-256-cbc',
        keyBuffer,
        ivBuffer
      )
      const cipherTextBuffer = Buffer.concat([
        encryptor.update(dataString, 'utf8'),
        encryptor.final()
      ])
      const cipherTextString = cipherTextBuffer.toString('base64')

      const payload = [ivString, cipherTextString].join('.')
      return payload
    } catch (error: any) {
      const errorCode = `AesCrypto::ENCRYPT_DATA_${
        error.code || 'UNKNOWN_ERR_CODE'
      }`
      throw new AesCryptoError(error, { errorCode })
    }
  }

  /**
   * Function to decrypt encrypted payload using `AES-256-CBC` algorithm.
   *
   * <b>Throws :</b> {@link AesCryptoError}. Expected error codes :
   * - AesCrypto::DECRYPT_DATA_PAYLOAD_REQUIRED
   * - AesCrypto::DECRYPT_DATA_INVALID_PAYLOAD
   * - AesCrypto::DECRYPT_DATA_INVALID_IV_LENGTH
   * - AesCrypto::DECRYPT_DATA_AES_KEY_REQUIRED
   * - AesCrypto::DECRYPT_DATA_INVALID_AES_KEY
   * - AesCrypto::DECRYPT_DATA_INVALID_AES_KEY_LENGTH
   * - AesCrypto::DECRYPT_DATA_UNKNOWN_ERR_CODE
   * - AesCrypto::DECRYPT_DATA_{CRYPTO_ERROR_CODE}
   *
   * @static
   * @param payload AES-256-CBC encrypted Base64 string in the format {IV.CIPHERTEXT}.
   * @param aesKey AES-256 key as a Base64 string.
   * @returns
   */
  static decryptData(payload: string, aesKey: string): any {
    const payloadPartsBuffers = validateDecryptDataPayload(payload)
    const keyBuffer = validateDecryptDataKey(aesKey)

    const [ivBuffer, cipherTextBuffer] = payloadPartsBuffers

    try {
      const decryptor = crypto.createDecipheriv(
        'aes-256-cbc',
        keyBuffer,
        ivBuffer
      )

      const plainTextBuffer = Buffer.concat([
        decryptor.update(cipherTextBuffer),
        decryptor.final()
      ])
      const plainTextString = plainTextBuffer.toString('utf8')
      const data = jsonParse(plainTextString)
      return data
    } catch (error: any) {
      const errorCode = `AesCrypto::DECRYPT_DATA_${
        error.code || 'UNKNOWN_ERR_CODE'
      }`
      throw new AesCryptoError(error, { errorCode })
    }
  }
}
