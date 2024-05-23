
const domain = 'http://localhost:3000'

export const getLoginUrl = () => {
    return `${domain}/auth/login`
}

export const getAuthVerifyUrl = () => {
    return `${domain}/auth/verify`
}

export const submitFormUrl = () => {
    return `${domain}/dmi/save`
}

export const getDmiListingUrl = () => {
    return `${domain}/dmi/`
}