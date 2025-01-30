import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { NavigationMenuContent, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full px-2 gap-2 text-lg items-center justify-between">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="mr-5">
                <Link to="/">
                  <Logo size={72} />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="mr-5" href="/bsm">
                  BSM Calculator
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="mr-5">
                <NavigationMenuTrigger>Simulate</NavigationMenuTrigger>
                <NavigationMenuContent>

                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center ">
          <ModeToggle />
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  ),
});
