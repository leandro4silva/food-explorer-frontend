export const priceMask = {
    mask: 'R$ value',
    blocks: {
        value: {
            mask: Number,
            signed: true,
            padFractionalZeros: true,
            thousandsSeparator: '.',
            min: 0,
            max: 10000,
            scale: 2,
            radix: ',',
            mapToRadix: ['.'],
        },
    },
}

export const quantityMask = {
  mask: Number,  
  scale: 2,  
  thousandsSeparator: '',  
  padFractionalZeros: false,  
  normalizeZeros: true,
  min: 1,
  max: 100
}