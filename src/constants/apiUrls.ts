const domain = 'https://api.benchfix.com'

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