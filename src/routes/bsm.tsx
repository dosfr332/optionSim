import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bsm')({
  component: BSM,
})

function BSM() {
  return <div className="p-2">Hello from About!</div>
}
