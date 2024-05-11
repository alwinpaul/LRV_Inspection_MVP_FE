const domain = 'http://lrv-be.eba-wpukgu5n.us-east-2.elasticbeanstalk.com'

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