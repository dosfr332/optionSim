import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/limits/call')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex-1">
      <iframe
        src="https://www.desmos.com/calculator/et4hlukxnm"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
