const Form = () => {
  return (
    <form className="w-full flex flex-col items-start gap-2">
      <h3 className="font-semibold">Hable con nosotros</h3>

      <div className="bg-white p-2 w-full rounded-md border-b border-gray-400">
        <legend className="text-sm text-gray-600">Nombre</legend>
        <input
          className="w-full py-1 outline-none"
          placeholder="Ingrese nombre"
          type="text"
        />
      </div>
      <div className="bg-white p-2 w-full rounded-md border-b border-gray-400">
        <textarea
          rows={4}
          className="w-full outline-none"
          placeholder="Ingrese tu mensaje"
        />
      </div>
      <button className="px-6 py-2 bg-[#2A7AE4] text-white">Enviar mensaje</button>
    </form>
  );
};

export default Form;
