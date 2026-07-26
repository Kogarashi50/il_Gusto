'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockIcon, UserRoundIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    if (!email || !password) {
      setError('Enter an email and password to continue.')
      return
    }

    window.localStorage.setItem(
      'il-gusto-demo-session',
      JSON.stringify({ email, signedInAt: new Date().toISOString() }),
    )
    router.push('/screens')
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2 text-sm">
        Email
        <span className="relative">
          <UserRoundIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-11 pl-10"
            name="email"
            placeholder="staff@ilgusto.ma"
            type="email"
          />
        </span>
      </label>
      <label className="flex flex-col gap-2 text-sm">
        Password
        <span className="relative">
          <LockIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-11 pl-10"
            name="password"
            placeholder="Password"
            type="password"
          />
        </span>
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button className="h-11 px-6" type="submit">
        Sign in
      </Button>
    </form>
  )
}
