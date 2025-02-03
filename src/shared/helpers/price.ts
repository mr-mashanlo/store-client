export function calculatePrice( price: number, discount: number = 0 ) {
  return price - price * discount / 100;
}