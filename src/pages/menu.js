import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from "../components/Layout";

const MENU_TYPES = {
   DINNER: 'dinner',
   LUNCH: 'lunch',
   BRUNCH: 'brunch',
   COCKTAILS: 'cocktails'
};

const CATEGORIES = {
   STARTERS: 'Starters',
   VEGGIES: 'Veggies',
   STARCHES: 'Starches',
   PROTEINS: 'Proteins',
   DESSERTS: 'Desserts',
   SANDWICHES: 'Sandwiches',
   SIDES: 'Sides',
   MAINS: 'Mains',
   ADD_ONS: 'Add-ons',
};

function Menu(props) {
   const [menu, setMenu] = useState(MENU_TYPES.LUNCH);
   // pulling out data via nested destructuring and renaming them for legibility sake
   const {
      allGoogleSheetDinnerRow: {nodes: dinner},
      allGoogleSheetLunchRow: {nodes: lunch},
      allGoogleSheetBrunchRow: {nodes: brunch},
      allGoogleSheetCocktailsRow: {nodes: cocktails},
   } = props.data;

   const renderCocktails = () => (
      <div className="d-flex flex-column flex-md-row w-100 mb-3 darkGreen">
         <div className="w-100">
            {cocktails.filter((cocktail, i) => i <= 18)
            .map((cocktail, index) => (
            <div className="d-flex mb-3">
               <div>
                  <h4 className="brown mr-3">{`${index +=1}.`}</h4>
               </div>
               <div>
                  <h4>{`${cocktail.name} — $${cocktail.price}`}</h4>
                  <span>{cocktail.description}</span>
               </div>
            </div>)
            )}
         </div>
         <div className="w-100">
            {cocktails.filter((cocktail, i) => i > 18)
            .map((cocktail, index) => (
            <div className="d-flex mb-3">
               <div>
                  <h4 className="brown mr-3">{`${index +=18}.`}</h4>
               </div>
               <div>
                  <h4>{`${cocktail.name} — $${cocktail.price}`}</h4>
                  <span>{cocktail.description}</span>
               </div>
            </div>)
            )}
            <div className="d-flex mb-3">
               <div>
                  <h4 className="brown mr-3">36.</h4>
               </div>
               <div>
                  <h4>Bartender's Choice</h4>
               </div>
            </div>
            <div className="d-flex mb-3">
               <div>
                  <h4 className="brown mr-3">0.</h4>
               </div>
               <div>
                  <h4>Bartender's Choice</h4>
               </div>
            </div>
            <div className="d-flex mb-3">
               <div>
                  <h4 className="brown mr-3">00.</h4>
               </div>
               <div>
                  <h4>Bartender's Choice</h4>
               </div>
            </div>
         </div>
      </div>
   );

   const renderBrunchItems = () => (
      <div>
         <div className="mb-5" id="brunch-sammies">
            <h3 className="brown">Sandwiches</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  brunch.filter((item) => item.category === CATEGORIES.SANDWICHES)
                  .map((menuItem, index) => (
                     <div key={`brunch-sammie-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="brunch-mains">
            <h3 className="brown">Mains</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  brunch.filter((item) => item.category === CATEGORIES.MAINS)
                  .map((menuItem, index) => (
                     <div key={`brunch-sammie-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="brunch-addons">
            <h3 className="brown">Add-ons</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  brunch.filter((item) => item.category === CATEGORIES.ADD_ONS)
                  .map((menuItem, index) => (
                     <div key={`brunch-addons-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $4`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="brunch-desserts">
            <h3 className="brown">Desserts</h3>
            <div className="d-flex flex-wrap mx-auto">
               {brunch.find((item) => item.category === CATEGORIES.DESSERTS)
               ? brunch.filter((item) => item.category === CATEGORIES.DESSERTS)
                  .map((menuItem, index) => (
                     <div key={`brunch-desserts-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
                  : <div className="w-100 mb-3 darkGreen">
                        <div className="d-flex">
                           <h4>Ask about our rotating selections</h4>
                        </div>
                     </div>
                  }
            </div>
         </div>
      </div>
   );

   const renderLunchItems = () => (
      <div>
         <div className="mb-5" id="lunch-starters">
            <h3 className="brown">Starters</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  lunch.filter((item) => item.category === CATEGORIES.STARTERS)
                  .map((menuItem, index) => (
                     <div key={`lunch-starter-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="lunch-sammies">
            <h3 className="brown">Sandwiches</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  lunch.filter((item) => item.category === CATEGORIES.SANDWICHES)
                  .map((menuItem, index) => (
                     <div key={`lunch-sammie-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="lunch-sides">
            <h3 className="brown">Sides</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  lunch.filter((item) => item.category === CATEGORIES.SIDES)
                  .map((menuItem, index) => (
                     <div key={`lunch-sides-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{menuItem.name}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="lunch-desserts">
            <h3 className="brown">Desserts</h3>
            <div className="d-flex flex-wrap mx-auto">
               {lunch.find((item) => item.category === CATEGORIES.DESSERTS)
               ? lunch.filter((item) => item.category === CATEGORIES.DESSERTS)
                  .map((menuItem, index) => (
                     <div key={`lunch-desserts-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
                  : <div className="w-100 mb-3 darkGreen">
                        <div className="d-flex">
                           <h4>Ask about our rotating selections</h4>
                        </div>
                     </div>
                  }
            </div>
         </div>
      </div>
   );

   const renderDinnerItems = () => (
      <div>
         <div className="mb-5" id="dinner-starters">
            <h3 className="brown">Starters</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  dinner.filter((item) => item.category === CATEGORIES.STARTERS)
                  .map((menuItem, index) => (
                     <div key={`dinner-starter-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="dinner-veggies">
            <h3 className="brown">Veggies</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  dinner.filter((item) => item.category === CATEGORIES.VEGGIES)
                  .map((menuItem, index) => (
                     <div key={`dinner-veg-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="dinner-starches">
            <h3 className="brown">Starches</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  dinner.filter((item) => item.category === CATEGORIES.STARCHES)
                  .map((menuItem, index) => (
                     <div key={`dinner-starch-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="dinner-proteins">
            <h3 className="brown">Proteins</h3>
            <div className="d-flex flex-wrap mx-auto">
               {
                  dinner.filter((item) => item.category === CATEGORIES.PROTEINS)
                  .map((menuItem, index) => (
                     <div key={`dinner-protein-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>
                           {
                              menuItem.price ? `${menuItem.name} — $${menuItem.price}`
                              : `${menuItem.name} — MP`
                           }</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
               }
            </div>
         </div>
         <div className="mb-5" id="dinner-desserts">
            <h3 className="brown">Desserts</h3>
            <div className="d-flex flex-wrap mx-auto">
               {dinner.find((item) => item.category === CATEGORIES.DESSERTS)
               ? dinner.filter((item) => item.category === CATEGORIES.DESSERTS)
                  .map((menuItem, index) => (
                     <div key={`dinner-desserts-${index}`} className="w-100 w-md-50 mb-3 darkGreen pr-md-3">
                        <div className="d-flex">
                           <h4>{`${menuItem.name} — $${menuItem.price}`}</h4>
                        </div>
                        <div>{menuItem.description}</div>
                        <small>{menuItem.code}</small>
                     </div>
                  ))
                  : <div className="w-100 mb-3 darkGreen">
                        <div className="d-flex">
                           <h4>Ask about our rotating selections</h4>
                        </div>
                     </div>
                  }
            </div>
         </div>
      </div>
   );

   return (
      <Layout>
         <div className="container">
            <Seo title="Menu | Scuffletown Garden"/>
            <div className="w-100 w-lg-50 mx-auto d-flex justify-content-around py-5 flex-wrap">
               <button
                  className={`menu-btn pt-3 ${menu === MENU_TYPES.LUNCH ? 'selected-menu' : ''}`}
                  onClick={() => setMenu(MENU_TYPES.LUNCH)}>
                  Lunch
               </button>
               <button
                  className={`menu-btn pt-3 ${menu === MENU_TYPES.DINNER ? 'selected-menu' : ''}`}
                  onClick={() => setMenu(MENU_TYPES.DINNER)}>
                  Dinner
               </button>
               <button
                  className={`menu-btn pt-3 ${menu === MENU_TYPES.BRUNCH ? 'selected-menu' : ''}`}
                  onClick={() => setMenu(MENU_TYPES.BRUNCH)}>
                  Brunch
               </button>
               <button
                  className={`menu-btn pt-3 ${menu === MENU_TYPES.COCKTAILS ? 'selected-menu' : ''}`}
                  onClick={() => setMenu(MENU_TYPES.COCKTAILS)}>
                  Cocktails
               </button>
            </div>
            <div id="menu-items">
               {menu === MENU_TYPES.DINNER && renderDinnerItems()}
               {menu === MENU_TYPES.LUNCH && renderLunchItems()}
               {menu === MENU_TYPES.BRUNCH && renderBrunchItems()}
               {menu === MENU_TYPES.COCKTAILS && renderCocktails()}
            </div>
            {[MENU_TYPES.LUNCH, MENU_TYPES.DINNER].includes(menu)
            && <div className="d-flex flex-wrap justify-content-around mb-5" id="codes">
                  <div className="mr-3">GF: Gluten Free</div>
                  <div className="mr-3">V: Vegetarian</div>
                  <div className="mr-3">VV: Vegan</div>
                  <div className="mr-3">VVO: Vegan Option</div>
                  <div>P: Pesco-vegetarian</div>
               </div>}
         </div>
      </Layout>
   )
};

export default Menu;

export const query = graphql`
{
   allGoogleSheetDinnerRow {
     nodes {
       price
       name
       description
       category
       code
     }
   }
   allGoogleSheetCocktailsRow {
     nodes {
       name
       price
       description
     }
   }
   allGoogleSheetBrunchRow {
     nodes {
       category
       description
       name
       price
     }
   }
   allGoogleSheetLunchRow {
     nodes {
       category
       code
       description
       name
       price
     }
   }
 }
`;