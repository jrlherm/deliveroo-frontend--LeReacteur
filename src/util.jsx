export function formatPrice(priceInFractional) {
  const priceInEuros = priceInFractional / 100;
  return priceInEuros.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
