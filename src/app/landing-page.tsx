'use client'

import React, { useState } from 'react'

import {
  CreateSplit,
  DisplaySplitViaProvider,
  useSplitsClient,
} from '@0xsplits/splits-kit'
import { AddressInput } from '@0xsplits/splits-kit/inputs'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import {
  Control,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'
import { isAddress, zeroAddress } from 'viem'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi'

import LoadingIndicator from '~/components/LoadingIndicator'
import { Tabs, TabsContent } from '~/components/ui/tabs'
import { ERC_20_TOKEN_LIST_BY_CHAIN } from '~/constants/erc20'

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

type SearchSplitForm = {
  address: string
}

const ConnectedPage = () => {
  const { chain, chainId } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()

  const [tab, setTab] = useState('create')
  const onTabChange = (value: string) => {
    setTab(value)
  }

  const { control, watch, setValue, setError } = useForm<SearchSplitForm>({
    mode: 'onChange',
    defaultValues: {
      address: '',
    },
  })
  const searchSplitAddress = watch('address')

  useSplitsClient({ chainId: chainId ?? 1, publicClient, walletClient })

  if (!chain || !chainId) return <UnsupportedNetwork />

  return (
    <Tabs
      value={tab}
      onValueChange={onTabChange}
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
          onSuccess={({ address }) => {
            // TODO: delay first?
            setValue('address', address)
            setTab('search')
          }}
        />
      </TabsContent>
      <TabsContent value="search">
        <SearchSplit
          splitAddress={searchSplitAddress}
          control={control}
          setValue={setValue}
          setError={setError}
        />
      </TabsContent>
    </Tabs>
  )
}

const SearchSplit = ({
  splitAddress,
  control,
  setValue,
  setError,
}: {
  splitAddress: string
  control: Control<SearchSplitForm>
  setValue: UseFormSetValue<SearchSplitForm>
  setError: UseFormSetError<SearchSplitForm>
}) => {
  const { chain, chainId } = useAccount()

  const isAddressValid = (address: string) => {
    if (!address) return 'Required'
    return isAddress(address) || 'Invalid address'
  }

  const erc20TokenList = ERC_20_TOKEN_LIST_BY_CHAIN[chainId!]

  return (
    <form style={{ width: '36rem' }}>
      <div className="flex flex-col space-y-4">
        <div className="w-full">
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
        </div>
        {isAddress(splitAddress) && (
          <DisplaySplitViaProvider
            chainId={chainId!}
            address={splitAddress}
            erc20TokenList={erc20TokenList}
            displayBalances={true}
            displayChain={false}
            linkToApp={false}
            shouldWithdrawOnDistribute={true}
            useCache={true}
            width={'xl'}
          />
        )}
      </div>
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
