export const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ''
export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

if (!ALCHEMY_API_KEY) throw new Error('alchemy api key required')
if (!WALLETCONNECT_PROJECT_ID) throw new Error('walletconnect project id required')
