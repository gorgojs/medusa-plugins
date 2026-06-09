import crypto from "crypto"

const ALGO = "aes-256-gcm"
const TAG_LEN = 16
const IV_LEN = 12

export function isValidKey(keyB64?: string): boolean {
  if (!keyB64) return false
  try {
    return Buffer.from(keyB64, "base64").length === 32
  } catch {
    return false
  }
}

/** Encrypt a JSON-serializable object. Returns base64 ciphertext (authTag||data) + base64 iv. */
export function encryptSecrets(
  secrets: Record<string, unknown>,
  keyB64: string
): { ciphertext: string; iv: string } {
  const key = Buffer.from(keyB64, "base64")
  const iv = crypto.randomBytes(IV_LEN)
  const cipher = crypto.createCipheriv(ALGO, key, iv)
  const plaintext = Buffer.from(JSON.stringify(secrets), "utf8")
  const enc = Buffer.concat([cipher.update(plaintext), cipher.final()])
  const tag = cipher.getAuthTag()
  return {
    ciphertext: Buffer.concat([tag, enc]).toString("base64"),
    iv: iv.toString("base64"),
  }
}

export function decryptSecrets(
  ciphertextB64: string,
  ivB64: string,
  keyB64: string
): Record<string, unknown> {
  const key = Buffer.from(keyB64, "base64")
  const iv = Buffer.from(ivB64, "base64")
  const raw = Buffer.from(ciphertextB64, "base64")
  const tag = raw.subarray(0, TAG_LEN)
  const enc = raw.subarray(TAG_LEN)
  const decipher = crypto.createDecipheriv(ALGO, key, iv)
  decipher.setAuthTag(tag)
  const dec = Buffer.concat([decipher.update(enc), decipher.final()])
  return JSON.parse(dec.toString("utf8"))
}
