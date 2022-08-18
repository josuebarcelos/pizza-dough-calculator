export const toPercentString = (value, precision) => {
    return toValuePrecisionAndSuffix(value*100, precision, '%')
}

export const toWeightString = (value, precision) => {
    return toValuePrecisionAndSuffix(value, precision, 'g')
}

export const toValuePrecisionAndSuffix = (value, precision, suffix) => {
    return `${value.toFixed(precision)}${suffix}`
}