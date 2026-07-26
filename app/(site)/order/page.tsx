import type { Metadata } from 'next'
import { OrderFlow } from '@/components/order-flow'

export const metadata: Metadata = {
  title: 'Order - Il Gusto',
  description: 'Review your Il Gusto panier and enter delivery details.',
}

export default function OrderPage() {
  return <OrderFlow />
}
