"use client";

import { useEffect, useState } from "react";
import { Book, Menu, Sunset, Trees, X, Zap } from "lucide-react";
import { RiArrowRightLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Sign in", url: "#waitlist" },
    signup: { title: "Get Started", url: "/book" },
  },
  className,
}: Navbar1Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      {/* Navbar bar */}
      <div className={cn("relative z-10 py-4 px-10 sm:px-16 lg:px-32 transition-all duration-300", mobileOpen ? "bg-background" : "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/20")}>
        {/* Desktop Menu */}
        <nav className="pointer-events-none hidden items-center justify-between lg:pointer-events-auto lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              {logo.src && (
                <img
                  src={logo.src}
                  className="max-h-8 dark:invert"
                  alt={logo.alt}
                />
              )}
              <span className="font-editorial text-lg font-normal tracking-tight">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="lg" className="group px-5 py-2.5 text-sm font-medium">
              <a href={auth.signup.url}>
                {auth.signup.title}
                <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between lg:hidden">
          <a href={logo.url} className="flex items-center gap-2">
            {logo.src && (
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            )}
            <span className="font-editorial text-lg font-normal tracking-tight">
              {logo.title}
            </span>
          </a>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="relative size-4">
                <Menu className={cn("absolute inset-0 size-4 transition-all duration-300", mobileOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
                <X className={cn("absolute inset-0 size-4 transition-all duration-300", mobileOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu — same stacking context, renders below navbar bar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-background animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex h-full flex-col items-center justify-center px-10 sm:px-16 pb-10">
            {menu.length > 0 && (
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4 mb-6"
              >
                {menu.map((item) => renderMobileMenuItem(item))}
              </Accordion>
            )}

            <Button asChild className="group w-full" size="lg">
              <a href={auth.signup.url}>
                {auth.signup.title}
                <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
