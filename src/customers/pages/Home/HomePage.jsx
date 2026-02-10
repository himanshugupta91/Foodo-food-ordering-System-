import React, { useEffect } from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../state/customers/Restaurant/restaurant.action";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Utensils, Zap, Star, Flame, Clock, Trophy } from "lucide-react";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt));
  }, [dispatch, jwt]);

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-bg -mt-20 pt-20">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4">

          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left pt-10 lg:pt-0">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight text-neutral-900">
              Discover the best <span className="text-gradient">food & drinks</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore curated lists of top restaurants, cafes, and bars, based on trends. Fast, fresh, and delivered right to your doorstep.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-full shadow-lg border border-neutral-100 flex items-center max-w-md mx-auto lg:mx-0 transform transition-transform hover:scale-105">
              <div className="pl-6 text-neutral-400">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-neutral-900 placeholder-neutral-400 h-12 px-4 outline-none"
                onClick={() => navigate("/search")}
              />
              <button
                onClick={() => navigate("/search")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 h-12 rounded-full font-semibold transition-colors shadow-md"
              >
                Search
              </button>
            </div>

            {/* Stages/Trust */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-neutral-600">
                <span className="text-primary-600 font-bold">10k+</span> happy customers
              </div>
            </div>
          </div>

          {/* Hero Image / 3D Composition */}
          <div className="relative hidden lg:block h-full min-h-[600px] flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
              {/* Background Blobs */}
              <div className="absolute inset-0 bg-primary-100/50 rounded-full filter blur-3xl animate-pulse-glow"></div>

              {/* Main Dish (Center) */}
              <div className="relative z-10 w-96 h-96 rounded-full border-8 border-white shadow-2xl animate-float overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Burger"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Dish 1 (Top Right) */}
              <div className="absolute -top-10 -right-10 z-20 w-48 h-48 rounded-full border-8 border-white shadow-xl animate-float-delayed overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthy Bowl"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Dish 2 (Bottom Left) */}
              <div className="absolute -bottom-10 -left-10 z-20 w-40 h-40 rounded-full border-8 border-white shadow-xl animate-float-slow overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fries"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Badge 1 */}
              <div className="absolute top-20 -left-12 bg-white p-3 rounded-xl shadow-lg animate-float z-30 flex items-center gap-2">
                <span className="bg-primary-50 p-1 rounded-full"><Zap className="w-5 h-5 text-primary-500" fill="currentColor" /></span>
                <div>
                  <p className="text-xs font-bold text-neutral-800">Fast Delivery</p>
                  <p className="text-[10px] text-neutral-500">30 mins</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-900">Explore by Category</h2>
              <p className="text-neutral-500 mt-2">Discover delicious meals across various cuisines.</p>
            </div>
          </div>
          <MultipleItemsCarousel />
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container-custom relative z-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Trending Now</span>
              <h2 className="text-4xl font-display font-bold text-neutral-900 mt-2">Featured Restaurants</h2>
              <p className="text-neutral-500 mt-4 text-lg">
                Explore curated lists of top restaurants, cafes, and bars in your city, based on trends.
              </p>
            </div>
            <button
              onClick={() => navigate("/restaurants")}
              className="group flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View all restaurants
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {restaurant.restaurants && restaurant.restaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {restaurant.restaurants.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="transform transition duration-300 hover:-translate-y-2"
                >
                  <RestaurantCard data={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-neutral-100">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-neutral-400">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">No Restaurants Found</h3>
              <p className="text-neutral-500 mb-8 max-w-sm mx-auto">It seems we don't have enough data yet. Please try checking back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works (Bento Style) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">How it Works</h2>
            <p className="text-neutral-500 text-lg">Your favorite food, delivered in 3 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Select Location", desc: "Choose your destination and find restaurants near you.", icon: <MapPin className="w-8 h-8" />, color: "bg-primary-50 text-primary-600" },
              { title: "Choose Food", desc: "Browse premium menus and select your favorite meals.", icon: <Utensils className="w-8 h-8" />, color: "bg-accent-50 text-accent-600" },
              { title: "Fast Delivery", desc: "Get food delivered to your doorstep in minutes.", icon: <Zap className="w-8 h-8" />, color: "bg-green-50 text-green-600" },
            ].map((step, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-neutral-100 bg-white hover:border-primary-100 hover:shadow-xl transition-all duration-300 bento-card relative overflow-hidden">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{step.desc}</p>

                {/* Decorative number */}
                <div className="absolute -bottom-6 -right-6 text-9xl font-bold text-neutral-50 opacity-10 group-hover:text-primary-50 transition-colors pointer-events-none select-none">
                  {0 + i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Vector Background for How It Works */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none opacity-50" />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
