export const CONSUME_PRODUCT = 'CONSUME_PRODUCT';

export const consumeProduct = (quantity, nutriments) => ({
  type: CONSUME_PRODUCT,
  quantity,
  nutriments,
});
