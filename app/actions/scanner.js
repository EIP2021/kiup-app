export const SCAN_REQUEST = 'SCAN_REQUEST';

export const scan = barcode => ({
  type: SCAN_REQUEST,
  barcode,
});
