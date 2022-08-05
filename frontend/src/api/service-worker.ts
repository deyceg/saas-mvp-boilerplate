import { setupWorker } from "msw"
import { getAuthMSW } from "./endpoints/auth/auth.msw"

export const serviceWorker = setupWorker(
    ...getAuthMSW()
)