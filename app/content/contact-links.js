export function getPhoneTelLink(phoneDisplay) {
  return `tel:${phoneDisplay.replace(/\D/g, "")}`;
}

export function getWhatsAppLink(phoneDisplay) {
  const digits = phoneDisplay.replace(/\D/g, "");
  const internationalNumber = digits.startsWith("0") ? `60${digits.slice(1)}` : digits;

  return `https://wa.me/${internationalNumber}`;
}
