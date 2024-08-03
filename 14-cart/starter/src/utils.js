export const getTotal = (cart) => {
  let totalItems = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalItems += amount;
    totalCost += price * amount;
  }
  return { totalItems, totalCost };
};
