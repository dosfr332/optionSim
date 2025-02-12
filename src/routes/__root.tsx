import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import React from "react";
type component = {
  title: string;
  key: string;
  href: string;
  description: string;
  childern?: component[];
};

const components: component[] = [
  {
    title: "Option Limits",
    key: "option-limits",
    href: "./#/limits",
    description: "Calculate option limits",
    childern: [
      {
        title: "Call Option Limits",
        key: "call-option-limits",
        href: "./#/limits/call",
        description: "Visualise how call options prices are bounded",
      },
      {
        title: "Put Option Limits",
        key: "put-option-limits",
        href: "./#/limits/put",
        description: "Visualise how put options prices are bounded",
      },
    ],
  },
  {
    title: "Simulate",
    key: "simulate",
    href: "./#/simulate",
    description: "Simulate option prices",
    childern: [
      {
        title: "Black-Scholes Model",
        key: "black-scholes-model",
        href: "./#/simulation/bsm",
        description: "Simulate option prices using the Black-Scholes model",
      },
      {
        title: "Heston Model",
        key: "heston-model",
        href: "./#/simulation/heston",
        description: "Simulate option prices using the Heston model",
      },
    ],
  },
  {
    title: "BSM Calculator",
    key: "bsm-calculator",
    href: "./#/bsm",
    description: "Calculate option prices",
  },
];

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full text-lg flex-col">
        <div className="flex w-full px-2 justify-between items-center">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="mr-5" key="home">
                  <Link to="/">
                    <Logo size={72} />
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem></NavigationMenuItem> */}
                {components.map((component) => {
                  if (component.childern) {
                    return (
                      <NavigationMenuItem
                        className="mr-5"
                        key={component.title}
                      >
                        <NavigationMenuTrigger className="font-light text-lg">
                          {component.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                            {component.childern.map((child) => (
                              <ListItem
                                key={child.title}
                                title={child.title}
                                href={child.href}
                              >
                                {child.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  } else {
                    return (
                      <NavigationMenuItem
                        key={component.title}
                      >
                        <NavigationMenuLink
                          className="mx-5 font-light"
                          href={component.href}
                        >
                          {component.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center ">
            <ModeToggle />
          </div>
        </div>
        <hr />
        <Outlet />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </div>
    </ThemeProvider>
  ),
});

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
