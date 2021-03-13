var common = {
    name: 'HomeCoin',
    isProofOfStake: true
  }
  
  var main = Object.assign({}, {
    unit: 'HOME',
    hashGenesisBlock: '00000ae66e376bf115b9440f03a520bd88d28624ec6f13606b0d72051e56e635',
    port: 33331,
    portRpc: 33332,
    protocol: {
      magic: 0x484e4d45
    },
    seedsDns: [
      'seed.homecoin.ru',
      'seed2.homecoin.ru',
      'seed3.homecoin.ru',
      'seed4.homecoin.ru'
    ],
    versions: {
      bip32: {
        private: 0x0488ade4,
        public: 0x0488b21e
      },
      bip44: 100500,
      private: 0xa0,
      public: 0x28,
      scripthash: 0x64
    }
  }, common)
  
  var test = Object.assign({}, {
    unit: 'THOME',
    hashGenesisBlock: '0008c7ff991b012b8dc06bd91165b64b307e53f183d070850d8381f238c672df',
    port: 53331,
    portRpc: 53332,
    protocol: {
      magic: 0x484e4d45
    },
    seedsDns: [
      'testseed.homecoin.ru',
      'testseed2.homecoin.ru'
    ],
    versions: {
      bip32: {
        private: 0x0488ade4,
        public: 0x0488b21e
      },
      bip44: 100500,
      private: 0xef,
      public: 0x6f,
      scripthash: 0xc4
    }
  }, common)
  
  module.exports = {
    main: main,
    test: test
  }
  