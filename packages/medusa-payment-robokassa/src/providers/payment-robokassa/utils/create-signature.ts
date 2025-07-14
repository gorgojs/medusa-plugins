import { createHash } from "crypto";
import { HashAlgorithms } from "../types";

export function createSignature(raw: [string], hashAlgorithm: (typeof HashAlgorithms)[number]): string {
  //raw.filter(v => v).join(":")
  // TODO: finish
  return "string"
}
