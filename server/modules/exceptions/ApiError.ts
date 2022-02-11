class ApiError extends Error {
    error: Error[] | Error | string[];
    message: string;
    code: number;

    constructor(message: string, code: number, errors: Error[] | Error | string[] = []) {
        super();
        this.message = message;
        this.code = code;
        this.error = errors;
    }

    static UnauthorizeError() {
        return new ApiError('The user is not logged in', 401);
    }

    static BadRequest(message: string, errors?: Error[] | string[]) {
        return new ApiError(message, 400, errors);
    }
}

export default ApiError;
