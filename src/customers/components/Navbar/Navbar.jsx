import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../state/authentication/Action";
import { ShoppingCart, User, Menu, X, Search, Heart, Package, LogOut, ChevronDown, Home, Compass } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToProfile = () => {
    if (auth.user?.role === "ROLE_ADMIN" || auth.user?.role === "ROLE_RESTAURANT_OWNER") {
      navigate("/admin/restaurant");
    } else {
      navigate("/my-profile");
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
    navigate("/");
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-md shadow-md border-b border-neutral-100"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={navigateToHome}
            className="cursor-pointer flex items-center gap-3"
          >
            <div className="w-10 h-10 overflow-hidden bg-white/10 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Foodo Logo"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <img
              src="https://fontmeme.com/permalink/240211/3a8c3e8c7c3e8c7c3e8c7c3e8c7c3e8c.png"
              alt="Foodo Text"
              className="h-8 hidden" // Placeholder for potential text logo image if needed, but sticking to text for now if user wants image text too.
            />
            <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Foodo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              <Home className="w-5 h-5" />
              Home
            </button>

            <button
              onClick={() => navigate("/restaurants")}
              className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              <Compass className="w-5 h-5" />
              Restaurants
            </button>

            {auth.user && (
              <button
                onClick={() => navigate("/my-profile/favorites")}
                className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 font-medium transition-colors"
              >
                <Heart className="w-5 h-5" />
                Favorites
              </button>
            )}

            {/* Cart */}
            <button
              onClick={navigateToCart}
              className="relative p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-primary-600 transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cart.cartItems.length}
                </span>
              )}
            </button>

            {/* User Menu */}
            {auth.user?.fullName ? (
              <div className="relative">
                <button
                  onClick={handleOpenMenu}
                  className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-neutral-200 hover:border-primary-200 bg-white hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-primary-100 text-primary-700">
                    {auth.user.fullName[0].toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-700 max-w-[100px] truncate">
                    {auth.user.fullName.split(" ")[0]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {open && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={handleCloseMenu}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-2 z-20 border border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-5 py-3 border-b border-neutral-50 mb-1">
                        <p className="font-semibold text-neutral-900 truncate">
                          {auth.user.fullName}
                        </p>
                        <p className="text-xs text-neutral-500 truncate">{auth.user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          navigateToProfile();
                          handleCloseMenu();
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-primary-50 transition-colors text-neutral-600 hover:text-primary-600 flex items-center gap-3"
                      >
                        <User className="w-4 h-4" /> Profile
                      </button>
                      <button
                        onClick={() => {
                          navigate("/my-profile/orders");
                          handleCloseMenu();
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-primary-50 transition-colors text-neutral-600 hover:text-primary-600 flex items-center gap-3"
                      >
                        <Package className="w-4 h-4" /> Orders
                      </button>
                      <div className="border-t border-neutral-50 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-5 py-2.5 hover:bg-red-50 transition-colors text-red-500 font-medium flex items-center gap-3"
                        >
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/account/login")}
                className="px-8 py-3 rounded-full font-bold transition-all bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 py-4 space-y-2 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-5 fade-in duration-300 shadow-xl rounded-b-2xl">
            <button
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-3"
            >
              <span className="w-5 flex justify-center"><Search className="w-4 h-4" /></span> Home
            </button>
            <button
              onClick={() => {
                navigate("/search");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-3"
            >
              <span className="w-5 flex justify-center"><Search className="w-4 h-4" /></span> Search
            </button>
            {auth.user && (
              <>
                <button
                  onClick={() => {
                    navigate("/my-profile/favorites");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-3"
                >
                  <span className="w-5 flex justify-center"><Heart className="w-4 h-4" /></span> Favorites
                </button>
                <button
                  onClick={() => {
                    navigateToCart();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-3"
                >
                  <span className="w-5 flex justify-center"><ShoppingCart className="w-4 h-4" /></span> Cart ({cart.cartItems.length})
                </button>
                <button
                  onClick={() => {
                    navigateToProfile();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 flex items-center gap-3"
                >
                  <span className="w-5 flex justify-center"><User className="w-4 h-4" /></span> Profile
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 flex items-center gap-3"
                >
                  <span className="w-5 flex justify-center"><LogOut className="w-4 h-4" /></span> Logout
                </button>
              </>
            )}
            {!auth.user && (
              <button
                onClick={() => {
                  navigate("/account/login");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-semibold"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
