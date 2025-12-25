"use client"
import Link from "next/link";
import Image from "next/image";
import { Search, User, Home, Info, Users, Briefcase, Phone, Image as ImageIcon, Menu, ChevronDown, LogOut, Settings, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/common/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Our Clients", href: "/clients", icon: Users },
  { name: "Service & Practices", href: "/services", icon: Briefcase },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Left: LOGO */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
               <SheetHeader className="p-6 border-b flex-shrink-0">
                 <SheetTitle className="text-left font-bold text-primary">MENTOR IP</SheetTitle>
               </SheetHeader>
               <ScrollArea className="flex-1">
                 <div className="p-4 space-y-6">
                    <nav className="flex flex-col space-y-1">
                        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Menu</p>
                        {navLinks.map((link) => {
                          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                          return (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                                  isActive 
                                    ? "bg-primary/5 text-primary" 
                                    : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-900"
                                }`}
                            >
                                <link.icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                                {link.name}
                            </Link>
                          );
                        })}
                    </nav>
                    <div className="border-t pt-6">
                        <ScrollArea className="h-[400px]">
                            <Sidebar />
                        </ScrollArea>
                    </div>
                 </div>
               </ScrollArea>
            </SheetContent>
          </Sheet>

          <Link href="/" className="hidden lg:flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="MENTOR IP" 
              width={180} 
              height={50} 
              priority
              className="h-10 w-auto dark:brightness-200"
            />
          </Link>
        </div>

        {/* Center: Navigation Menu (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
             const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
             return (
               <Link 
                 key={link.name} 
                 href={link.href} 
                 className={`text-sm font-medium flex items-center gap-1.5 px-3 py-2 rounded-md transition-all relative ${
                   isActive 
                    ? "bg-primary/5 text-primary" 
                    : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-900"
                 }`}
               >
                 <link.icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                 <span className="hidden xl:inline">{link.name}</span>
               </Link>
             );
          })}
        </nav>

        {/* Right: Search & User */}
        <div className="flex items-center justify-end space-x-2">
           <div className="hidden md:flex relative w-full max-w-[180px] xl:max-w-[240px]">
             <Input 
                type="search" 
                placeholder="Search..." 
                className="h-9 w-full rounded-full bg-slate-100 border-none pl-9 focus-visible:ring-1" 
             />
             <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-600 focus-visible:ring-0">
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center transition-colors">
                    <User className="h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Mentor IP User</p>
                  <p className="text-xs leading-none text-muted-foreground">user@mentorip.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="flex items-center justify-between px-2 py-1.5 focus:bg-accent focus:text-accent-foreground select-none">
                <div className="flex items-center gap-2">
                    {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    <span className="text-sm">Dark Mode</span>
                </div>
                {mounted && (
                  <Switch 
                    checked={theme === "dark"} 
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} 
                  />
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
