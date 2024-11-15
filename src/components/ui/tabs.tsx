'use client'

import * as React from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '~/utils/tailwind-utils'

type TabOption = {
  value: string
  display: JSX.Element | string
  isDisabled?: boolean
}
type ITabs = TabsPrimitive.TabsProps & {
  options: TabOption[]
}
const Tabs = ({ children, options = [], ...props }: ITabs) => (
  <TabsPrimitive.Root {...props} className="space-y-6">
    <TabsList>
      {options.map(({ value, display, isDisabled }) => (
        <TabsTrigger key={value} value={value} isDisabled={isDisabled}>
          {display}
        </TabsTrigger>
      ))}
    </TabsList>
    <div>{children}</div>
  </TabsPrimitive.Root>
)

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex items-center space-x-6 border-b border-gray-200 dark:border-gray-700',
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  Omit<
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    'disabled'
  > & {
    isDisabled?: boolean
  }
>(({ isDisabled, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    disabled={isDisabled}
    className={cn(
      '-mb-px border-b-2 px-2 pb-2 text-2xl outline-none data-[state=active]:border-black data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500 data-[state=active]:dark:border-white data-[state=inactive]:dark:text-gray-500',
      {
        'data-[state=inactive]:hover:text-black data-[state=inactive]:dark:hover:text-white':
          !isDisabled,
      },
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => <TabsPrimitive.Content ref={ref} {...props} />)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
