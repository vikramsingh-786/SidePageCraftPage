import barrelAssault from "../assets/barrel-assault.png";
import ironPortAssault from "../assets/iron-port-assault.png";
import barrelP from "../assets/barrel-p.png";
import pistolSuppressor from "../assets/pistol-suppressor.png";

const TableView = () => {
 const inventoryItems = [
    {
      id: 1,
      name: "Barrel Assault Rifle",
      quantity: 2,
      image: barrelAssault,
    },
    {
      id: 2,
      name: "Front Port Assault Rifle",
      quantity: 2,
      image: ironPortAssault,
    },
    { id: 3, name: "Barrel P", quantity: 2, image: barrelP },
    {
      id: 4,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
    {
      id: 5,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
    {
      id: 6,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
    {
      id: 7,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
    {
      id: 8,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
    {
      id: 9,
      name: "Pistol Suppressor",
      quantity: 2,
      image: pistolSuppressor,
    },
  ];

  const craftingItems = [
    {
      id: 1,
      name: "Barrel Assault Rifle",
      quantity: 2,
      image: barrelAssault,
    },
    {
      id: 2,
      name: "Front Port Assault Rifle",
      quantity: 2,
      image: ironPortAssault,
    },
    { id: 3, name: "Barrel P", quantity: 2, image: barrelP },
  ];


const ItemCard = ({ item }) => (
  <div className="relative flex h-[100px] w-[100px] flex-none flex-row items-center justify-center rounded-[20px] bg-gradient-to-br from-white/40 via-transparent to-transparent p-0">
    <div className="flex h-full w-full flex-col items-center justify-center p-0">
      <div className="flex h-[10px] w-[80px] flex-none flex-row items-center justify-center p-0">
        <span className="h-[10px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-center font-inter text-[8px] font-normal leading-[10px] text-white opacity-60">
          {item.name}
        </span>
      </div>
      <img
        src={item.image}
        alt={item.name}
        className="my-[-4px] h-[75px] w-[75px] flex-none object-contain"
      />
      {/* Quantity Indicator - Optimized */}
      <div className="absolute bottom-1 right-1 flex h-[14px] w-[21px] flex-none flex-row items-center p-[2px] mr-8">
        {/* Circle with arrow icon */}
        <div className="relative isolate flex h-[9.56px] w-[10px] flex-col items-center justify-center gap-[10px] p-0">
          {/* Outer circle (black background) */}
          <div className="absolute inset-0 z-0 rounded-full bg-black"></div>
          {/* White circle border */}
          <div className="absolute inset-0 z-10 rounded-full border border-white"></div>
          {/* Arrow icon */}
          <div 
            className="relative z-20 h-[9.54px] w-[9.93px] bg-white"
            style={{ 
              clipPath: 'polygon(0 0, 70% 50%, 0 100%)',
              left: '0.33%',
              right: '0.33%',
              top: '0.1%',
              bottom: '0.1%'
            }}
          ></div>
        </div>
        {/* Quantity number */}
        <span className="ml-[3px] h-[10px] w-[5px] font-inter text-[8px] font-semibold leading-[10px] text-white">
          {item.quantity}
        </span>
      </div>
    </div>
  </div>
);
  return (
    <div className="min-h-screen text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <h2 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base md:mb-4">
        Inventory
      </h2>
      <div className="mb-3 rounded-xl border border-white/10 p-3 sm:mb-4 sm:rounded-2xl sm:p-4">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
          {inventoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <h2 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base md:mb-4">
        Crafting Table
      </h2>
       <div className="mb-3 rounded-xl border border-white/10 p-3 sm:mb-4 sm:rounded-2xl sm:p-4">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
            {craftingItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableView;
