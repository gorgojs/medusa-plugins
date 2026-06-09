import crypto from "crypto"
import { describe, expect, it } from "@jest/globals"
import { encryptSecrets, decryptSecrets, isValidKey } from "../crypto"

const key = crypto.randomBytes(32).toString("base64")

describe("crypto", () => {
  it("round-trips an object", () => {
    const obj = { password: "s3cr3t", token: "abc" }
    const { ciphertext, iv } = encryptSecrets(obj, key)
    expect(ciphertext).toBeTruthy()
    expect(iv).toBeTruthy()
    expect(decryptSecrets(ciphertext, iv, key)).toEqual(obj)
  })

  it("fails to decrypt with a wrong key", () => {
    const { ciphertext, iv } = encryptSecrets({ a: 1 }, key)
    const wrong = crypto.randomBytes(32).toString("base64")
    expect(() => decryptSecrets(ciphertext, iv, wrong)).toThrow()
  })

  it("produces a fresh iv each call", () => {
    const a = encryptSecrets({ a: 1 }, key)
    const b = encryptSecrets({ a: 1 }, key)
    expect(a.iv).not.toEqual(b.iv)
  })

  it("validates 32-byte base64 keys", () => {
    expect(isValidKey(key)).toBe(true)
    expect(isValidKey("short")).toBe(false)
    expect(isValidKey(undefined)).toBe(false)
  })
})
