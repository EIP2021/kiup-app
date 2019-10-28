export const CONSUME_PRODUCT = 'CONSUME_PRODUCT';

export const consumeProduct = quantity => ({
  type: CONSUME_PRODUCT,
  quantity,
});
