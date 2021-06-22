export default function formatNumber(value, prefix='', fixed_amount=2, thousands_separator=',') {
    const newValue = normalizeValue(value);

    if (isNaN(value)) {
        return 'NaN';
    }

    return prefix + separateThousands(newValue.toFixed(fixed_amount), thousands_separator)
}

function normalizeValue(value) {
    if (typeof value === 'string') {
        return parseFloat(value)
    }

    return value;
}

function separateThousands(x, s) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, s);
}

export function formatBlockchainAddress(address, precision=4, precisionEnd) {
    if (!address) {
        return ''
    }

    return `${address.slice(0, precision+2)}...${address.slice(precisionEnd ? -precisionEnd : -precision)}`
}

