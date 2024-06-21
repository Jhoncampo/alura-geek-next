
const Banner = () => {
  return (
    <div className="bg-green-600 min-h-[192px] max-h-[450px] flex items-end">
        <div className="px-4 py-6 text-white flex flex-col items-start gap-2">
            <h1 className="text-xl font-semibold">Junio Promocional</h1>
            <h2 className="text-sm">Productos selecionados con 33% de descuento</h2>
            <button className="text-sm bg-sky-600 px-6 py-2">Ver Consolas</button>
        </div>
    </div>
  )
}

export default Banner