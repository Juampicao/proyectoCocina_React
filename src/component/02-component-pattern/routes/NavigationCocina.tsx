import { BrowserRouter, Route, Routes } from "react-router-dom";
import Caja from "../pages/Caja";
import Cocina from "../pages/Cocina";
import Entregas from "../pages/Entregas";
import Layout from "../pages/Layout";
import Pedidos from "../pages/Pedidos";
import { ShoppingPage } from "../pages/ShoppingPage";


export const NavigationCocina = () => {
  return (
    <>
      <BrowserRouter>
        
        {/* <Routes>
            <Route path="/" element={<Layout />}>
              
              <Route path="/general" element={<ShoppingPage />}/>                

            </Route>
            
        </Routes> */}
        

        {/* <KitchenProvider> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              
                <Route path="/general" element={<ShoppingPage />}/>                
                
                <Route path="/pedidos" element={<Pedidos />}/>                
                <Route path="/cocina" element={<Cocina />}/>                
                <Route path="/entregas" element={<Entregas />}/>
                <Route path="/caja" element={<Caja />}/>
              
              
                <Route path="*" element={<h1> Pagina no encontrada. </h1>} />   

            </Route>
          </Routes>


        {/* </KitchenProvider>   */}
          
      </BrowserRouter>
    </>
  );
}