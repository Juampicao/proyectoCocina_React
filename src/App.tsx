import "./App.css";
import { ShoppingPage } from "./component/02-component-pattern/pages/ShoppingPage";
import { Navigation } from "./routes/Navigation";

const App = () => {
  return (
    <>
      <div className="bg-slate-200 p-10 min-h-full">
        {/* <h1>Proyecto Cocina</h1> */}

        <Navigation />
        <div className="">
          
          <div className=" ">
            <h1 className="text-2xl font-bold">Shopping Page</h1>
            <ShoppingPage />
          </div>

          {/* <div className="bg-green-300 border">
            <h1 className="text-2xl font-bold">Individual</h1>
            <Caja/>
            <Cocina />
            <Entregas/>
            </div> */}
        </div>
        </div>
    </>
  )
}

export default App






















// import "./App.css";
// import { ShoppingPage } from "./component/02-component-pattern/pages/ShoppingPage";
// import { Navigation } from "./routes/Navigation";

// const App = () => {
//   return (
//     <>
//       <div className="bg-slate-200 p-10 min-h-full">
//         <h1>Proyecto Cocina</h1>

//         {/* <AxiosVisualComponent1 />
//         <AxiosVisualComponent2 /> */}
//         {/* <ShoppingPage/> */}
//         {/* <ListPage/> */}
//         {/* /* <ClubsList /> */}


//         {/* <ClubProvider>
//           <ClubsList />
//         </ClubProvider> */}

        
//         {/* <PeopleList />

//         <h1> Prueba Dynamic Form json </h1> 
//         <DynamicForm customShema={formJson}  /> */}
//         {/* <UsersTable />  */}
//         {/* <TailwindTable/> */}
//         <Navigation />
//         <ShoppingPage/>
//         </div>
//     </>
//   )
// }

// export default App