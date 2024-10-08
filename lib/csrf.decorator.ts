/*!
 * nestjs-csurf
 * Copyright(c) 2023 Chris Walker
 * MIT Licensed
 */

import { SetMetadata } from '@nestjs/common'

/**
 * True:  Performs a csrf check.
 *        Throws a Forbidden exception if the check fails.
 * False: No check is performed.
 * No @CsrfCheck reverts to the guard's default check pattern.
 */
export const CsrfCheck = (enabled?: boolean) => {
    const e = !!enabled
    return SetMetadata(e ? 'csrf-check-include' : 'csrf-check-ignore', true)
}

/**
 * True:  Generates a new csrf token.
 *        Set's the response header with `X-CSRF-Token: token`
 * False: No token is generated.
 * No @CsrfGen reverts to the interceptor's default gen pattern.
 */
export const CsrfGen = (enabled?: boolean) => {
    const e = !!enabled
    return SetMetadata(e ? 'csrf-gen-include' : 'csrf-gen-ignore', true)
}

/**
 * This decorator allows one to only generate a
 * csrf token when the user is authenticated.
 * 
 * True:  Generates a new csrf token when passport's
 *        `request.isAuthenticated()` returns true.
 * False: No token is generated.
 * No @CsrfGenAuth reverts to the interceptor's default gen pattern
 */
export const CsrfGenAuth = (enabled?: boolean) => {
    return SetMetadata('csrf-gen-auth', enabled ?? true)
}
