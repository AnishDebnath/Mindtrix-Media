// ponytail: centralized form validation & phone sanitizer
export const sanitizePhone = (val: string) => val.replace(/[^0-9+]/g, '');
export const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
export const isValidPhone = (phone: string) => phone.replace(/\D/g, '').length >= 10;
export const isContactValid = (email: string, phone: string) => isValidEmail(email) && isValidPhone(phone);
