export function NumberValidation(value) {
    value = value.trim()
    const reg = /^[0-9]+$/
    if (!value) return false
    return reg.test(value)
}

export function VoucherCodeValidation(value) {
    const re = /^[A-Z0-9]+$/
    return re.test(value)
}

export function MobileNumberValidation(value) {
    const re = /^[0-9]{0,10}$/
    return re.test(value)
}

export function NameValidation(value) {
    const re = /^[A-Za-z\s.]+$/
    return re.test(value)
}

export function EmailValidation(data) {
    data = data.trim()
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    // const re = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/;
    return re.test(data)
}

export function PasswordValidation(data) {
    data = data.trim()
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{8,}$/
    return re.test(data)
}




export function ErrorCheck(value) {

    let err = value ? true : false
    return err
}
