import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <ul className="bg-black text-white text-xl p-2 text-center space-x-20 top-0 fixed w-full">
                {/* <Link to="/general"> General </Link> */}
                <Link to="/pedidos"> Pedidos </Link>
                <Link to="/caja"> Caja </Link>
                <Link to="/cocina"> Cocina </Link>
                <Link to="/entregas"> Entregas </Link>
            </ul>
            <Outlet/>
        </>
  )
}
