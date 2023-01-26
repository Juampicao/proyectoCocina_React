
export const Contenedor = ({children, className}: {children: any, className?: string}) => {
  return (
      <>
        <div className={`${className} p-5 m-5`}>
            {children}  
        </div>
      </>
  )
}
