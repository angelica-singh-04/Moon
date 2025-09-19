"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Myths & Legends",
    href: "/docs/primitives/alert-dialog",
    description:
      "Explore ancient stories and folklore shaped by the Moon.",
  },
  {
    title: "In Literature",
    href: "/docs/primitives/hover-card",
    description:
      "See how poets and writers have portrayed the Moon in words.",
  },
  {
    title: "In Pop Culture",
    href: "/docs/primitives/progress",
    description:
      "Find the Moon’s role in movies, music, and modern art.",
  },
  {
    title: "Cultural Uses",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },

];

export function NavigationMenuDemo() {
  const location = useLocation();
  const isGalleryActive = location.pathname === '/gallery' || location.pathname === '/images' || location.pathname === '/upload';
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur border-b-[0.2px] border-neutral-800 h-22 flex items-center px-4">
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
  <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
            href="/"
          >
            <div className="mt-4 mb-2 text-lg font-medium">About</div>
            <p className="text-muted-foreground text-xs leading-tight">
A gateway to explore the Moon’s history, mysteries, and future possibilities.            </p>
          </a>
        </NavigationMenuLink>
      </li>

      <ListItem
        href="/Data"
        title="Lunar Exploration Data"
        className="text-xs"
      >
        <span className="text-xs">
          Get detailed insights from past and present lunar missions.
        </span>
      </ListItem>

      <ListItem href="/docs/Lunar Eclipses" title="Lunar Eclipses">
        <span className="text-xs">
          Learn how and why the Moon disappears during an eclipse.
        </span>
      </ListItem>

      <ListItem href="/docs/primitives/typography" title="Colonization">
        <span className="text-xs">
          Imagine the future of humans living and building on the Moon.
        </span>
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuTrigger>Culture</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[400px] text-xs gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {components.map((component) => (
        <ListItem
          key={component.title}
          title={component.title}
          href={component.href}
          className="text-xs" // ensure smaller font
        >
          {component.description}
        </ListItem>
      ))}
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>




        <NavigationMenuItem>
          <NavigationMenuTrigger>News & Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">News & Updates</div>
                    <div className="text-muted-foreground text-xs">
                      Get recent news and breakthroughs about lunar exploration.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Astronomy Tools</div>
                    <div className="text-muted-foreground text-xs">
                      Explore interactive tools to observe and study the Moon.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Trivia & Quiz</div>
                    <div className="text-muted-foreground text-xs">
                      Test your Moon knowledge with fun quizzes and facts.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={isGalleryActive ? "text-yellow-500 bg-yellow-500/10" : ""}>Gallery</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="/images">NASA Images</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">Apollo Photos</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">Wallpapers</a>
                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                  <Link to="/upload">Upload Photos</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Education</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 flex">
                    <CircleHelpIcon />
                    How Tides Happen
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 flex">
                    <CircleIcon />
                    How Eclipses Work
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 flex">
                    <CircleCheckIcon />
                    Tidal Locking
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 flex">
                    <CircleCheckIcon />
                    Infographics
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Phases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Moon Phase Calendar</div>
                    <div className="text-muted-foreground text-xs">
                      Check the Moon’s phases day by day throughout the month.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Phases Explained</div>
                    <div className="text-muted-foreground text-xs">
                      Learn why the Moon changes shape and how phases occur.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Missions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Historical Missions</div>
                    <div className="text-muted-foreground text-xs">
                      Discover past lunar missions and their achievements.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Recent Missions</div>
                    <div className="text-muted-foreground text-xs">
                      Explore current missions studying the Moon today.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Future Missions</div>
                    <div className="text-muted-foreground text-xs">
                      See upcoming missions planned for lunar exploration.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
export default NavigationMenuDemo;