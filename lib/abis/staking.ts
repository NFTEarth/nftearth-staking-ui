const ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "address",
        "name": "_NfteTokenContractAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_EARTHLINGSContractAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_ROBOROVERSContractAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_NFW3CContractAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "CallerNotOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "DepositMoreThanOneNFTE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "EndNotWholeHour",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ExceededCapAmount",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ExceededStakedAmount",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "InvalidPoolId",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MainTokenNotOwnedOrPaired",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NFW3CAlreadyPaired",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NFW3CNotOwnedOrPaired",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NeitherTokenInPairOwnedByCaller",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotOwnerOfMain",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotOwnerOfNFW3C",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ProvidedTokensNotPaired",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SplitPairCantPartiallyWithdraw",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StartMustBeGreaterThanEnd",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StartMustEqualLastEnd",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StartNotWholeHour",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "UncommitWrongParameters",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "ClaimRewards",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClaimRewardsNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClaimRewardsPairNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTypePoolId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTokenId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "NFW3CTokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DepositNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DepositPairNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTypePoolId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTokenId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "NFW3CTokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UpdatePool",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "lastRewardedBlock",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "stakedAmount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "accumulatedRewardsPerShare",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "WithdrawNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "WithdrawPairNft",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTypePoolId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "mainTokenId",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "NFW3CTokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "NFW3CToMain",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint248",
        "name": "tokenId",
        "internalType": "uint248"
      },
      {
        "type": "bool",
        "name": "isPaired",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "NfteToken",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IERC20"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addTimeRange",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_startTimestamp",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_endTimeStamp",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_capPerPosition",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addressPosition",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "stakedAmount",
        "internalType": "uint256"
      },
      {
        "type": "int256",
        "name": "rewardsDebt",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "claimEARTHLINGS",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_nfts",
        "internalType": "uint256[]"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimNFW3C",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_EARTHLINGSPairs",
        "components": [
          {
            "type": "uint128",
            "name": "mainTokenId",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "NFW3CTokenId",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNft[]"
      },
      {
        "type": "tuple[]",
        "name": "_ROBOROVERSPairs",
        "components": [
          {
            "type": "uint128",
            "name": "mainTokenId",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "NFW3CTokenId",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNft[]"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimNfteToken",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimROBOROVERS",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_nfts",
        "internalType": "uint256[]"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimSelfEARTHLINGS",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_nfts",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimSelfNFW3C",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_EARTHLINGSPairs",
        "components": [
          {
            "type": "uint128",
            "name": "mainTokenId",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "NFW3CTokenId",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNft[]"
      },
      {
        "type": "tuple[]",
        "name": "_ROBOROVERSPairs",
        "components": [
          {
            "type": "uint128",
            "name": "mainTokenId",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "NFW3CTokenId",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNft[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimSelfNfteToken",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimSelfROBOROVERS",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_nfts",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositEARTHLINGS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositNFW3C",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_EARTHLINGSPairs",
        "components": [
          {
            "type": "uint32",
            "name": "mainTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint32",
            "name": "NFW3CTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint184",
            "name": "amount",
            "internalType": "uint184"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNftDepositWithAmount[]"
      },
      {
        "type": "tuple[]",
        "name": "_ROBOROVERSPairs",
        "components": [
          {
            "type": "uint32",
            "name": "mainTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint32",
            "name": "NFW3CTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint184",
            "name": "amount",
            "internalType": "uint184"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNftDepositWithAmount[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositNfteToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositROBOROVERS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositSelfNfteToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getAllStakes",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getEARTHLINGSStakes",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getNFW3CStakes",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getNfteTokenStake",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPoolsUI",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "stakedAmount",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "currentTimeRange",
            "components": [
              {
                "internalType": "uint48",
                "name": "startTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint48",
                "name": "endTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint96",
                "name": "rewardsPerHour",
                "type": "uint96"
              },
              {
                "internalType": "uint96",
                "name": "capPerPosition",
                "type": "uint96"
              }
            ],
            "internalType": "struct NFTEarthStaking.TimeRange"
          }
        ],
        "internalType": "struct NFTEarthStaking.PoolUI"
      },
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "stakedAmount",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "currentTimeRange",
            "components": [
              {
                "internalType": "uint48",
                "name": "startTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint48",
                "name": "endTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint96",
                "name": "rewardsPerHour",
                "type": "uint96"
              },
              {
                "internalType": "uint96",
                "name": "capPerPosition",
                "type": "uint96"
              }
            ],
            "internalType": "struct NFTEarthStaking.TimeRange"
          }
        ],
        "internalType": "struct NFTEarthStaking.PoolUI"
      },
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "stakedAmount",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "currentTimeRange",
            "components": [
              {
                "internalType": "uint48",
                "name": "startTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint48",
                "name": "endTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint96",
                "name": "rewardsPerHour",
                "type": "uint96"
              },
              {
                "internalType": "uint96",
                "name": "capPerPosition",
                "type": "uint96"
              }
            ],
            "internalType": "struct NFTEarthStaking.TimeRange"
          }
        ],
        "internalType": "struct NFTEarthStaking.PoolUI"
      },
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "stakedAmount",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "currentTimeRange",
            "components": [
              {
                "internalType": "uint48",
                "name": "startTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint48",
                "name": "endTimestampHour",
                "type": "uint48"
              },
              {
                "internalType": "uint96",
                "name": "rewardsPerHour",
                "type": "uint96"
              },
              {
                "internalType": "uint96",
                "name": "capPerPosition",
                "type": "uint96"
              }
            ],
            "internalType": "struct NFTEarthStaking.TimeRange"
          }
        ],
        "internalType": "struct NFTEarthStaking.PoolUI"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getROBOROVERSStakes",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSplitStakes",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "uint256",
            "name": "poolId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "tokenId",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "deposited",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "unclaimed",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "rewards24hr",
            "internalType": "uint256"
          },
          {
            "type": "tuple",
            "name": "pair",
            "components": [
              {
                "internalType": "uint256",
                "name": "mainTokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "mainTypePoolId",
                "type": "uint256"
              }
            ],
            "internalType": "struct NFTEarthStaking.DashboardPair"
          }
        ],
        "internalType": "struct NFTEarthStaking.DashboardStake[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTimeRangeBy",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint48",
            "name": "startTimestampHour",
            "internalType": "uint48"
          },
          {
            "type": "uint48",
            "name": "endTimestampHour",
            "internalType": "uint48"
          },
          {
            "type": "uint96",
            "name": "rewardsPerHour",
            "internalType": "uint96"
          },
          {
            "type": "uint96",
            "name": "capPerPosition",
            "internalType": "uint96"
          }
        ],
        "internalType": "struct NFTEarthStaking.TimeRange"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mainToNFW3C",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint248",
        "name": "tokenId",
        "internalType": "uint248"
      },
      {
        "type": "bool",
        "name": "isPaired",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nftContracts",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ERC721Enumerable"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nftPosition",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "stakedAmount",
        "internalType": "uint256"
      },
      {
        "type": "int256",
        "name": "rewardsDebt",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pendingRewards",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pools",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint48",
        "name": "lastRewardedTimestampHour",
        "internalType": "uint48"
      },
      {
        "type": "uint16",
        "name": "lastRewardsRangeIndex",
        "internalType": "uint16"
      },
      {
        "type": "uint96",
        "name": "stakedAmount",
        "internalType": "uint96"
      },
      {
        "type": "uint96",
        "name": "accumulatedRewardsPerShare",
        "internalType": "uint96"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeLastTimeRange",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rewardsBy",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_from",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_to",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stakedTotal",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updatePool",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawEARTHLINGS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawNFW3C",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_EARTHLINGSPairs",
        "components": [
          {
            "type": "uint32",
            "name": "mainTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint32",
            "name": "NFW3CTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint184",
            "name": "amount",
            "internalType": "uint184"
          },
          {
            "type": "bool",
            "name": "isUncommit",
            "internalType": "bool"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNftWithdrawWithAmount[]"
      },
      {
        "type": "tuple[]",
        "name": "_ROBOROVERSPairs",
        "components": [
          {
            "type": "uint32",
            "name": "mainTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint32",
            "name": "NFW3CTokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint184",
            "name": "amount",
            "internalType": "uint184"
          },
          {
            "type": "bool",
            "name": "isUncommit",
            "internalType": "bool"
          }
        ],
        "internalType": "struct NFTEarthStaking.PairNftWithdrawWithAmount[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawNfteToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawROBOROVERS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawSelfEARTHLINGS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawSelfNfteToken",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawSelfROBOROVERS",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_nfts",
        "components": [
          {
            "type": "uint32",
            "name": "tokenId",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "amount",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct NFTEarthStaking.SingleNft[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const;

export default ABI;
