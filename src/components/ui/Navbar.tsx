
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-4 sticky top-0 z-50">
      <div className="rpg-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold text-white flex items-center gap-2">
              <Icon name="Sword" className="text-rpg-primary h-6 w-6" />
              <span>RPG Мастер</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/videos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              <span className="flex items-center gap-2">
                <Icon name="Video" className="h-5 w-5" />
                Видео
              </span>
            </Link>
            <Link to="/shop" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              <span className="flex items-center gap-2">
                <Icon name="ShoppingBag" className="h-5 w-5" />
                Магазин
              </span>
            </Link>
            <Link to="/raids" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              <span className="flex items-center gap-2">
                <Icon name="Swords" className="h-5 w-5" />
                Рейды
              </span>
            </Link>
            <Link to="/clans" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              <span className="flex items-center gap-2">
                <Icon name="Users" className="h-5 w-5" />
                Кланы
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <div className="rpg-coin">
                <Icon name="Coins" className="h-5 w-5 mr-1" />
                1000
              </div>
              <div className="rpg-exp">
                <Icon name="Star" className="h-5 w-5 mr-1" />
                Ур. 5
              </div>
            </div>
            
            <Link to="/profile">
              <Avatar className="h-9 w-9 border-2 border-rpg-primary">
                <AvatarImage src="https://source.unsplash.com/random/100x100/?fantasy" />
                <AvatarFallback className="bg-rpg-primary">ГИ</AvatarFallback>
              </Avatar>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-2 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              <Link
                to="/videos"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Icon name="Video" className="h-5 w-5" />
                  Видео
                </span>
              </Link>
              <Link
                to="/shop"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Icon name="ShoppingBag" className="h-5 w-5" />
                  Магазин
                </span>
              </Link>
              <Link
                to="/raids"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Icon name="Swords" className="h-5 w-5" />
                  Рейды
                </span>
              </Link>
              <Link
                to="/clans"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Icon name="Users" className="h-5 w-5" />
                  Кланы
                </span>
              </Link>
              <div className="flex items-center gap-4 px-3 py-2">
                <div className="rpg-coin">
                  <Icon name="Coins" className="h-5 w-5 mr-1" />
                  1000
                </div>
                <div className="rpg-exp">
                  <Icon name="Star" className="h-5 w-5 mr-1" />
                  Ур. 5
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
