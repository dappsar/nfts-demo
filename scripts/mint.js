let art = await EtmCollectible.deployed()

// pass the correct metadata address
await art.claimItem('https://ipfs.io/ipfs/QmNk8Y7sc43yyVsSEJq89LRGcin81iAV7XPb2iDSjj74xq')
art.address

// image: QmVEAhFdoDNjyh1Fp9YhAUHt4VqEpdL9CBhWNKQfAts1FN
// metadata: QmNk8Y7sc43yyVsSEJq89LRGcin81iAV7XPb2iDSjj74xq
// contract address: 0x69bbf0c5Ac4e5a07166dDE87C22d1d53ce9B7538
