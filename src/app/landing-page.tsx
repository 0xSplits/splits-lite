'use client'

import React, { useEffect } from 'react'

import { CreateSplit } from '@0xsplits/splits-kit'
import { AddressInput } from '@0xsplits/splits-kit/inputs'
import { useSplitsClient } from '@0xsplits/splits-sdk-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { isAddress, zeroAddress } from 'viem'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi'

import LoadingIndicator from '~/components/LoadingIndicator'
import { Tabs, TabsContent } from '~/components/ui/tabs'

export default function Home() {
  const { address, isConnecting } = useAccount()

  if (isConnecting) return <LoadingIndicator />

  return (
    <div className="p-4">
      <div className="flex items-end justify-end">
        <ConnectButton showBalance={false} chainStatus={'icon'} />
      </div>
      <div className="items-center justify-items-center p-8 pb-20 sm:p-20">
        {address ? <ConnectedPage /> : <LandingPage />}
      </div>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 sm:items-start">
      <div className="text-xl">Splits Lite</div>
      <div className="text-md">
        A minimal app for creating and distributing Splits. Connect your wallet
        to continue.
      </div>
    </div>
  )
}

const ConnectedPage = () => {
  const { chain, chainId } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()

  useSplitsClient({ chainId: chainId ?? 1, publicClient, walletClient })

  if (!chain || !chainId) return <UnsupportedNetwork />

  return (
    <Tabs
      defaultValue="create"
      options={[
        { value: 'create', display: 'Create' },
        { value: 'search', display: 'Search' },
      ]}
    >
      <TabsContent value="create">
        <CreateSplit
          chainId={chainId}
          type={'v2Push'}
          defaultOwner={zeroAddress}
          defaultDistributorFeeOptions={[]}
          linkToApp={false}
          supportsEns={false}
          width={'xl'}
          onError={(error) => {
            // eslint-disable-next-line no-console
            console.error(error)
          }}
          onSuccess={() => {
            // TODO: go to search/view split once we get address back
          }}
        />
      </TabsContent>
      <TabsContent value="search">
        <SearchSplit />
      </TabsContent>
    </Tabs>
  )

  return <div>You are connected!</div>
}

const SearchSplit = () => {
  const { chain } = useAccount()
  const { control, watch, setValue, setError } = useForm<{
    address: string
  }>({
    mode: 'onChange',
    defaultValues: {
      address: '',
    },
  })

  const splitAddress = watch('address')
  useEffect(() => {
    if (splitAddress && isAddress(splitAddress)) {
      // TODO: search/display split
    }
  }, [splitAddress])

  const isAddressValid = (address: string) => {
    if (!address) return 'Required'
    return isAddress(address) || 'Invalid address'
  }

  return (
    <form style={{ width: '36rem' }}>
      <label>Split address on {chain?.name}</label>
      <AddressInput
        control={control}
        inputName={'address'}
        placeholder={'0x'}
        setValue={setValue}
        setError={setError}
        validationFunc={isAddressValid}
        autoFocus={true}
        supportsEns={false}
      />
    </form>
  )
}

const UnsupportedNetwork = () => {
  return (
    <div className="flex flex-col items-center space-y-4 sm:items-start">
      <div className="text-xl">This chain isn&apos;t supported.</div>
      <div className="text-md">
        <Link
          href="https://docs.splits.org"
          target="_blank"
          className="text-blue-400 underline hover:text-blue-700"
        >
          Here
        </Link>{' '}
        is a list of supported chains
      </div>
      <div className="text-md">
        Email us at support@splits.org to request support for a new chain.
      </div>
    </div>
  )
}
