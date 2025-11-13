"use client";
import { useState } from "react";
import { useContexto } from "@/contexto/ContextoAplicacion";
import Link from "next/link";

export default function PaginaPresupuesto() {
  const { presupuesto, setPresupuesto, gastos } = useContexto();
  const [valor, setValor] = useState("");

  const porcentaje = presupuesto > 0 ? gastos.reduce((a, b) => a + b.monto, 0) / presupuesto : 0;

  return (
    <div className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <input className="border p-2" placeholder="Presupuesto mensual" value={valor} onChange={e => setValor(e.target.value)} />
      <button className="bg-green-600 text-white p-2" onClick={() => setPresupuesto(Number(valor))}>Guardar</button>

      {presupuesto > 0 && porcentaje >= 0.8 && porcentaje < 1 && (
        <div className="p-2 bg-yellow-300">Has alcanzado el 80% del presupuesto</div>
      )}

      {presupuesto > 0 && porcentaje >= 1 && (
        <div className="p-2 bg-red-500 text-white">Has superado el límite del presupuesto, debes ajustar gastos</div>
      )}

      <Link className="underline" href="/registro-gastos">Ir a gastos</Link>
    </div>
  );
}
