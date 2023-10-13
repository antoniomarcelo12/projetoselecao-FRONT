export interface User {
    user_id?: string,
    user_fullname: string,
    user_name: string,
    user_age: number,
    user_email: email,
    user_ocupation: string,
    user_phone: string,
}

export interface UserUnmatched {
    user_id: string,
    user_fullname?: string,
    user_name?: string,
    user_age?: number,
    user_email?: string,
    user_ocupation?: string,
    user_phone?: string,
}

