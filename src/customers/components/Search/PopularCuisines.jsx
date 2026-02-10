export const PopularCuisines = ({ image, title }) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-white hover:bg-neutral-50 
                      transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden 
                        ring-2 ring-neutral-100 group-hover:ring-primary-200 transition-all">
          <img
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
            src={image}
            alt={title}
          />
        </div>
        <span className="font-medium text-sm lg:text-base text-neutral-700 group-hover:text-primary-600 
                         transition-colors text-center">
          {title.length > 10 ? title.substring(0, 9) + "..." : title}
        </span>
      </div>
    </div>
  );
};

