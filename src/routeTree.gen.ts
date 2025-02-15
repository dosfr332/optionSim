/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BsmImport } from './routes/bsm'
import { Route as IndexImport } from './routes/index'
import { Route as SimulationHestonImport } from './routes/simulation/heston'
import { Route as SimulationBsmImport } from './routes/simulation/bsm'
import { Route as LimitsPutImport } from './routes/limits/put'
import { Route as LimitsCallImport } from './routes/limits/call'

// Create/Update Routes

const BsmRoute = BsmImport.update({
  id: '/bsm',
  path: '/bsm',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SimulationHestonRoute = SimulationHestonImport.update({
  id: '/simulation/heston',
  path: '/simulation/heston',
  getParentRoute: () => rootRoute,
} as any)

const SimulationBsmRoute = SimulationBsmImport.update({
  id: '/simulation/bsm',
  path: '/simulation/bsm',
  getParentRoute: () => rootRoute,
} as any)

const LimitsPutRoute = LimitsPutImport.update({
  id: '/limits/put',
  path: '/limits/put',
  getParentRoute: () => rootRoute,
} as any)

const LimitsCallRoute = LimitsCallImport.update({
  id: '/limits/call',
  path: '/limits/call',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/bsm': {
      id: '/bsm'
      path: '/bsm'
      fullPath: '/bsm'
      preLoaderRoute: typeof BsmImport
      parentRoute: typeof rootRoute
    }
    '/limits/call': {
      id: '/limits/call'
      path: '/limits/call'
      fullPath: '/limits/call'
      preLoaderRoute: typeof LimitsCallImport
      parentRoute: typeof rootRoute
    }
    '/limits/put': {
      id: '/limits/put'
      path: '/limits/put'
      fullPath: '/limits/put'
      preLoaderRoute: typeof LimitsPutImport
      parentRoute: typeof rootRoute
    }
    '/simulation/bsm': {
      id: '/simulation/bsm'
      path: '/simulation/bsm'
      fullPath: '/simulation/bsm'
      preLoaderRoute: typeof SimulationBsmImport
      parentRoute: typeof rootRoute
    }
    '/simulation/heston': {
      id: '/simulation/heston'
      path: '/simulation/heston'
      fullPath: '/simulation/heston'
      preLoaderRoute: typeof SimulationHestonImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/bsm': typeof BsmRoute
  '/limits/call': typeof LimitsCallRoute
  '/limits/put': typeof LimitsPutRoute
  '/simulation/bsm': typeof SimulationBsmRoute
  '/simulation/heston': typeof SimulationHestonRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/bsm': typeof BsmRoute
  '/limits/call': typeof LimitsCallRoute
  '/limits/put': typeof LimitsPutRoute
  '/simulation/bsm': typeof SimulationBsmRoute
  '/simulation/heston': typeof SimulationHestonRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/bsm': typeof BsmRoute
  '/limits/call': typeof LimitsCallRoute
  '/limits/put': typeof LimitsPutRoute
  '/simulation/bsm': typeof SimulationBsmRoute
  '/simulation/heston': typeof SimulationHestonRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/bsm'
    | '/limits/call'
    | '/limits/put'
    | '/simulation/bsm'
    | '/simulation/heston'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/bsm'
    | '/limits/call'
    | '/limits/put'
    | '/simulation/bsm'
    | '/simulation/heston'
  id:
    | '__root__'
    | '/'
    | '/bsm'
    | '/limits/call'
    | '/limits/put'
    | '/simulation/bsm'
    | '/simulation/heston'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BsmRoute: typeof BsmRoute
  LimitsCallRoute: typeof LimitsCallRoute
  LimitsPutRoute: typeof LimitsPutRoute
  SimulationBsmRoute: typeof SimulationBsmRoute
  SimulationHestonRoute: typeof SimulationHestonRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BsmRoute: BsmRoute,
  LimitsCallRoute: LimitsCallRoute,
  LimitsPutRoute: LimitsPutRoute,
  SimulationBsmRoute: SimulationBsmRoute,
  SimulationHestonRoute: SimulationHestonRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/bsm",
        "/limits/call",
        "/limits/put",
        "/simulation/bsm",
        "/simulation/heston"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/bsm": {
      "filePath": "bsm.tsx"
    },
    "/limits/call": {
      "filePath": "limits/call.tsx"
    },
    "/limits/put": {
      "filePath": "limits/put.tsx"
    },
    "/simulation/bsm": {
      "filePath": "simulation/bsm.tsx"
    },
    "/simulation/heston": {
      "filePath": "simulation/heston.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
