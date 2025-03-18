import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "./ui/button.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu.js"

function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="text-xl font-bold">Hotel Management</div>
        <NavigationMenu className="mx-6 flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <RouterLink to="/">Home</RouterLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <RouterLink to="/rooms">Rooms</RouterLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <RouterLink to="/login">Login</RouterLink>
          </Button>
          <Button variant="default" asChild>
            <RouterLink to="/register">Register</RouterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 