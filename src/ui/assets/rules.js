const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&/=]*)/
const emailPattern = /^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$/
const phonePattern = /^0[0-9]{9}?$/
const namePattern = /^([a-zA-Z]+([a-zA-Z -])+([a-zA-Z]))?$/
const currencyPattern = /^(\d{0,}.\d{0,2})?$/

const testPostCode = (v) => {
	// NOTE: https://postcodes-australia.com/
	// Check value
	if (!v) return false
	// Check length
	if (v.toString().length !== 4) return false
	// Check is number
	let n = Number(v)
	if (Number.isNaN(Number(v))) return false
	// Check range is real
	if (n < 800 || n > 7999) return false
	if (n > 999 && n < 2000) return false
	return true
}

export default {
	required: (v) => !!v || 'Required.',
	arrayRequired: (v) => v.length > 0 || 'Required.',
	len: (v, l) => !v || v.length === l || `This field requires exactly ${l} characters.`,
	min: (v, l) => !v || v.length >= l || `Minimum of ${l} characters is required.`,
	max: (v, l) => !v || v.length <= l || `Maximum of ${l} characters is required.`,
	min3: (v) => !v || v.length >= 3 || 'Minimum of 3 characters is required.',
	min20: (v) => !v || v.length >= 20 || 'Minimum of 20 characters is required.',
	max20: (v) => !v || v.length <= 20 || 'Maximum of 20 characters is allowed.',
	max40: (v) => !v || v.length <= 40 || 'Maximum of 40 characters is allowed.',
	max200: (v) => !v || v.length <= 200 || 'Maximum of 200 characters is allowed.',
	email: (v) => !v || emailPattern.test(v) || 'Invalid e-mail.',
	phone: (v) => !v || phonePattern.test(v) || 'e.g. 0412345678 / 0740001234',
	name: (v) => !v || namePattern.test(v) || 'A name must only contain English letters and numbers, and begin with a letter.',
	currency: (v) => !v || currencyPattern.text(v) || 'Amount must be only numbers. e.g. 14.35',
	website: (v) => !v || urlPattern.text(v) || 'Invalid website address.',
	postcode: (v) => !v || testPostCode(v) || 'Invalid Australia post code.',
}
