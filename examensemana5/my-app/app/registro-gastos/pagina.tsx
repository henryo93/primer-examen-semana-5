"use client";
import { useState, useEffect } from "react";
import { useContexto } from "@/contexto/ContextoAplicacion";

export default function PaginaGastos() {
  const { agregarGasto, gastos, presupuesto } = useContexto();
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setLista] = useState<any[]>([]);

  const guardar = async () => {
    const data = { categoria, monto: Number(monto), fecha };
    await fetch("http://localhost:5000/gasto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    agregarGasto({ categoria, monto: Number(monto), fecha, descripcion });
  };

  const cargar = async () => {
    const r = await fetch("http://localhost:5000/gasto");
    const j = await r.json();
    setLista(j);
  };

  useEffect(() => { cargar(); }, []);

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col gap-4">
      <div>Presupuesto: L {presupuesto}</div>

      <input className="border p-2" placeholder="Categoría" value={categoria} onChange={e => setCategoria(e.target.value)} />
      <input className="border p-2" placeholder="Monto" value={monto} onChange={e => setMonto(e.target.value)} />
      <input className="border p-2" type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
      <input className="border p-2" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />

      <button className="bg-blue-600 text-white p-2" onClick={guardar}>Guardar gasto</button>

      <h2 className="text-lg font-bold">Gastos registrados</h2>
      <div className="flex flex-col gap-2">
        {lista.map((g, i) => (
          <div key={i} className="border p-2 bg-gray-100">
            <div>{g.categoria}</div>
            <div>L {g.monto}</div>
            <div>{g.fecha}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
