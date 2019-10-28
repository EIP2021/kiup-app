export const SCAN_REQUEST = 'SCAN_REQUEST';
export const SCAN_SUCCESS = 'SCAN_SUCCESS';

export const scan = barcode => ({
  type: SCAN_REQUEST,
  barcode,
});

export const scanSuccess = product => ({
  type: SCAN_SUCCESS,
  product,
});
