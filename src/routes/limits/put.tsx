import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/limits/put')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex-1">
      <iframe
        src="https://www.desmos.com/calculator/oighbgmv2p"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

