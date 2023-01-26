import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import KitchenProvider from "../context/KitchenProvider";
import { Caja, Cocina, Entregas, Layout, Pedidos } from "../pages";


export const NavigationCocina = () => {
  return (
    <>
      <BrowserRouter>
        
        <KitchenProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                              
                <Route path="/pedidos" index element={<Pedidos />}/>                
                <Route path="/cocina" element={<Cocina />}/>                
                <Route path="/entregas" element={<Entregas />}/>
                <Route path="/caja" element={<Caja />} />
                
                {/* Pagina Desconocida */}               
                <Route path="*" element={<Navigate to="/pedidos" />} />
            </Route>
          </Routes>
        </KitchenProvider>  
        

          {/* <Routes>
           
            <Route path="/general" element={<Layout />}>
              <Route path="/general" index element={<ShoppingPage />}/>                      
            </Route>
          </Routes>
         */}
      </BrowserRouter>
    </>
  );
}