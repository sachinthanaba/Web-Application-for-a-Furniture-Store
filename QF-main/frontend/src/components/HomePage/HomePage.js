import { Link } from "react-router-dom";
import HomeCategories from "./HomeCategories";
import HomeProductTrending from "./HomeProductTrending";
import Footer from "../Footer/Footer";
import heroImage from './heroImage.jpg'
import ChatBot from "../ChatBot/ChatBot";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import './HomePage.css'
import chatBotIcon from './chatbot.png'
import closeIcon from './closeIcon.png'
import { Canvas } from "@react-three/fiber";
import { useGLTF , PresentationControls , Stage} from "@react-three/drei";
import ThreeDView from "../3dView/ThreeDView";

const offers = [
  {
    name: "Free Interior Design Consultation",
    description: "Professional's Interior design consultation",
    href: "#",
  },
  {
    name: "Limited-Time Sales",
    description: "Save up to 40% on selected furniture items",
    href: "#",
  },
  {
    name: "Custom Furniture Orders",
    description: "Order custom-made furniture items",
    href: "#",
  },
];

const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Seven day delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within 7 days.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "customizable products",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve offer customizable products as a your perference.",
  },
];
export default function Example() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const openChatbot = () => {
    setIsChatbotOpen(true);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div  className="home-page-content">
    <div className="bg-white">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
              >
                {offers.map((offer) => (
                  <li key={offer.name} className="flex flex-col">
                    <a
                      href={offer.href}
                      className="relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                    >
                      <p className="text-sm text-gray-500">{offer.name}</p>
                      <p className="font-semibold text-gray-900">
                        {offer.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>


          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Shop with Queens Furniture
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      New products are added every day. Stay with Queens Furniture
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                src={heroImage}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>


        <div className="relative overflow-hidden">
          <section
              aria-labelledby="sale-heading"
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="services">
                {/*<div className="titile">*/}
                {/*  <span>Experience</span> In 3D*/}
                {/*</div>*/}

                <div className="column" style={{display:"flex" , justifyContent:"space-around"}}>
                  <div>
                    <label htmlFor="">
                      Material
                    </label>
                    <select style={{width:"20vw"}}
                            name="Material"
                    >
                      <option value="m1">Material 1</option>
                      <option value="m2">Material 2</option>
                      <option value="m3">Material 3</option>
                      <option value="m4">Material 4</option>
                      <option value="m5">Material 5</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">
                      Color
                    </label>
                    <select style={{width:"20vw"}}
                            name="Color"
                    >
                      <option value="c1">Color 1</option>
                      <option value="c2">Color 2</option>
                      <option value="c3">Color 3</option>
                      <option value="c4">Color 4</option>
                      <option value="c5">Color 5</option>
                    </select>
                  </div>
                </div>


                <div className="row" style={{display:"flex" , justifyContent:"space-between", width:"70vw"}}>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%" , paddingBottom:"0"}}>

                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/dining_table.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>

                  </div>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%", paddingBottom:"0"}}>
                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/old_leather_sofa.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>
                  </div>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%" , paddingBottom:"0"}}>

                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/victorian_wooden_table.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>

                  </div>
                </div>

                <div className="row" style={{display:"flex" , justifyContent:"space-between", width:"70vw"}}>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%", paddingBottom:"0"}}>
                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/wooden_bookcases_with_books.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>
                  </div>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%" , paddingBottom:"0"}}>

                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/wooden_desk_chair.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>

                  </div>
                  <div className="col" style={{width: "30%"}}>
                    <div className="ServiceCard" style={{width: "100%", paddingBottom:"0"}}>
                      <Canvas
                          dpr={[1, 2]}
                          shadows
                          camera={{ fov: 45 }}
                          style={{ height: "30vh" }}
                      >
                        <color attach="background" args={["#101010"]} />
                        <PresentationControls
                            speed={1.5}
                            global
                            zoom={0.5}
                            polar={[-0.1, Math.PI / 4]}
                        >
                          <Stage environment={"sunset"}>
                            <ThreeDView modelPath="3dobj/wooden_english_antique_chair_lowpoly.glb" scale={0.01}  />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>
                  </div>
                </div>

                <div className="row" style={{display:"flex" , justifyContent:"space-between", width:"70vw"}}>

                </div>


              </div>
            </div>
          </section>

        </div>



        <div className="relative overflow-hidden">
          {/* Sale */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Save up to 40% on selected furniture items throughout the year.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                Most of our products are limited releases that won't come back.
                Get your favorite items while they're in stock.
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >
               Begin Your Shopping Adventure
              </a>
            </div>
          </section>
        </div>
      </main>
      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Shop by Category
            </h2>
            <Link
              to="/all-categories"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          {/* home categories */}
          <HomeCategories />
        </section>
        {/* Home trending trending */}
        <HomeProductTrending />

        {/* info */}
        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />



      </main>
     

    </div>
    <div>
        {/* Chatbot open button (circular icon) */}
        <div className="chatbot-open-button" onClick={openChatbot}>
          <img src={chatBotIcon}></img>

        </div>

        {/* Chatbot popup */}
        {isChatbotOpen && (
          <div className="chatbot-popup">
            <div className={`overlay ${isChatbotOpen ? 'active' : ''}`} onClick={closeChatbot}></div>
            <ChatBot closeChatbot={closeChatbot} />
            <button className="close-chatbot-button" onClick={closeChatbot}>
              <img src={closeIcon} alt="Close ChatBot" />
            </button>
          </div>
        )}
      </div>

    </div>
    
  );
}
