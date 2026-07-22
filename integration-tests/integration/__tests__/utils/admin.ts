import { Modules } from "@medusajs/framework/utils"

/**
 * Authenticate as an admin over HTTP. `createAdminUser` isn't shipped by @medusajs/test-utils,
 * so: register an emailpass identity via HTTP (the provider hashes the password correctly),
 * create the user via the USER module, associate the two via the AUTH module (app_metadata.user_id),
 * then log in for a bearer token. Returns axios-style `{ headers }` for admin requests.
 */
export async function createAdminHeaders(
  api: any,
  container: any,
  email = "admin@it.test",
  password = "supersecret123"
): Promise<{ headers: { authorization: string } }> {
  const reg = await api.post("/auth/user/emailpass/register", { email, password })
  const regToken: string = reg.data.token
  const payload = JSON.parse(Buffer.from(regToken.split(".")[1], "base64url").toString("utf8"))
  const authIdentityId: string = payload.auth_identity_id

  const user = await container.resolve(Modules.USER).createUsers({ email })

  await container
    .resolve(Modules.AUTH)
    .updateAuthIdentities({ id: authIdentityId, app_metadata: { user_id: user.id } })

  const login = await api.post("/auth/user/emailpass", { email, password })
  return { headers: { authorization: `Bearer ${login.data.token}` } }
}
