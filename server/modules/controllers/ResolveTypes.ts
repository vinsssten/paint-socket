export interface RegistrationResolve {
    code: 200 | 400 | 401
    message: any,
    isError: boolean
}

//200 - Succeed
//400 - Error in databse
//401 - Not unique login
