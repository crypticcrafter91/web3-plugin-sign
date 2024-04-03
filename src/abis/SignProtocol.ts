const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [],
    name: "AttestationAlreadyRevoked",
    type: "error"
  },
  {
    inputs: [],
    name: "AttestationInvalidDuration",
    type: "error"
  },
  {
    inputs: [],
    name: "AttestationIrrevocable",
    type: "error"
  },
  {
    inputs: [],
    name: "AttestationNonexistent",
    type: "error"
  },
  {
    inputs: [],
    name: "AttestationWrongAttester",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidDelegateSignature",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "LegacySPRequired",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "OffchainAttestationAlreadyRevoked",
    type: "error"
  },
  {
    inputs: [],
    name: "OffchainAttestationExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OffchainAttestationNonexistent",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "SchemaNonexistent",
    type: "error"
  },
  {
    inputs: [],
    name: "SchemaWrongRegistrant",
    type: "error"
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32"
      }
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "string",
        name: "indexingKey",
        type: "string"
      }
    ],
    name: "AttestationMade",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    name: "AttestationRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "attestationId",
        type: "string"
      }
    ],
    name: "OffchainAttestationMade",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "attestationId",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    name: "OffchainAttestationRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "schemaId",
        type: "uint64"
      }
    ],
    name: "SchemaRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple"
      },
      {
        internalType: "string",
        name: "indexingKey",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attest",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple"
      },
      {
        internalType: "contract IERC20",
        name: "resolverFeesERC20Token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "resolverFeesERC20Amount",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "indexingKey",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attest",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "resolverFeesETH",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "indexingKey",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attest",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]"
      },
      {
        internalType: "uint256[]",
        name: "resolverFeesETH",
        type: "uint256[]"
      },
      {
        internalType: "string[]",
        name: "indexingKeys",
        type: "string[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attestBatch",
    outputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]"
      },
      {
        internalType: "contract IERC20[]",
        name: "resolverFeesERC20Tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "resolverFeesERC20Amount",
        type: "uint256[]"
      },
      {
        internalType: "string[]",
        name: "indexingKeys",
        type: "string[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attestBatch",
    outputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]"
      },
      {
        internalType: "string[]",
        name: "indexingKeys",
        type: "string[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "attestBatch",
    outputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "offchainAttestationId",
        type: "string"
      },
      {
        internalType: "address",
        name: "delegateAttester",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "attestOffchain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "attestationIds",
        type: "string[]"
      },
      {
        internalType: "address",
        name: "delegateAttester",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "attestOffchainBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "attestationCounter",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      }
    ],
    name: "getAttestation",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation[]",
        name: "attestations",
        type: "tuple[]"
      }
    ],
    name: "getDelegatedAttestBatchHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "schemaId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "linkedAttestationId",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "attestTimestamp",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "revokeTimestamp",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "validUntil",
            type: "uint64"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool"
          },
          {
            internalType: "bytes[]",
            name: "recipients",
            type: "bytes[]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Attestation",
        name: "attestation",
        type: "tuple"
      }
    ],
    name: "getDelegatedAttestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "offchainAttestationIds",
        type: "string[]"
      }
    ],
    name: "getDelegatedOffchainAttestBatchHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "offchainAttestationId",
        type: "string"
      }
    ],
    name: "getDelegatedOffchainAttestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "offchainAttestationIds",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      }
    ],
    name: "getDelegatedOffchainRevokeBatchHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "offchainAttestationId",
        type: "string"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    name: "getDelegatedOffchainRevokeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "registrant",
            type: "address"
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "uint64",
            name: "maxValidFor",
            type: "uint64"
          },
          {
            internalType: "contract ISPHook",
            name: "hook",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          },
          {
            internalType: "string",
            name: "data",
            type: "string"
          }
        ],
        internalType: "struct Schema[]",
        name: "schemas",
        type: "tuple[]"
      }
    ],
    name: "getDelegatedRegisterBatchHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "registrant",
            type: "address"
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "uint64",
            name: "maxValidFor",
            type: "uint64"
          },
          {
            internalType: "contract ISPHook",
            name: "hook",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          },
          {
            internalType: "string",
            name: "data",
            type: "string"
          }
        ],
        internalType: "struct Schema",
        name: "schema",
        type: "tuple"
      }
    ],
    name: "getDelegatedRegisterHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      }
    ],
    name: "getDelegatedRevokeBatchHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      }
    ],
    name: "getDelegatedRevokeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "offchainAttestationId",
        type: "string"
      }
    ],
    name: "getOffchainAttestation",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "attester",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          }
        ],
        internalType: "struct OffchainAttestation",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64"
      }
    ],
    name: "getSchema",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "registrant",
            type: "address"
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "uint64",
            name: "maxValidFor",
            type: "uint64"
          },
          {
            internalType: "contract ISPHook",
            name: "hook",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          },
          {
            internalType: "string",
            name: "data",
            type: "string"
          }
        ],
        internalType: "struct Schema",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "schemaCounter_",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "attestationCounter_",
        type: "uint64"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "registrant",
            type: "address"
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "uint64",
            name: "maxValidFor",
            type: "uint64"
          },
          {
            internalType: "contract ISPHook",
            name: "hook",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          },
          {
            internalType: "string",
            name: "data",
            type: "string"
          }
        ],
        internalType: "struct Schema",
        name: "schema",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint64",
        name: "schemaId",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "registrant",
            type: "address"
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool"
          },
          {
            internalType: "enum DataLocation",
            name: "dataLocation",
            type: "uint8"
          },
          {
            internalType: "uint64",
            name: "maxValidFor",
            type: "uint64"
          },
          {
            internalType: "contract ISPHook",
            name: "hook",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64"
          },
          {
            internalType: "string",
            name: "data",
            type: "string"
          }
        ],
        internalType: "struct Schema[]",
        name: "schemas",
        type: "tuple[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "registerBatch",
    outputs: [
      {
        internalType: "uint64[]",
        name: "schemaIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      },
      {
        internalType: "contract IERC20",
        name: "resolverFeesERC20Token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "resolverFeesERC20Amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "attestationId",
        type: "uint64"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "resolverFeesETH",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      },
      {
        internalType: "uint256[]",
        name: "resolverFeesETH",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "attestationIds",
        type: "uint64[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      },
      {
        internalType: "contract IERC20[]",
        name: "resolverFeesERC20Tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "resolverFeesERC20Amount",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes"
      }
    ],
    name: "revokeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "offchainAttestationId",
        type: "string"
      },
      {
        internalType: "string",
        name: "reason",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "revokeOffchain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "offchainAttestationIds",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "reasons",
        type: "string[]"
      },
      {
        internalType: "bytes",
        name: "delegateSignature",
        type: "bytes"
      }
    ],
    name: "revokeOffchainBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "schemaCounter",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hook",
        type: "address"
      }
    ],
    name: "setGlobalHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
] as const;

export default abi;
