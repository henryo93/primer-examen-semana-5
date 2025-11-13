"use client";
import { createContext, useState, useContext } from "react";

type Gasto = {
  categoria: string;
  monto: number;
  fecha: string;
  descripcion?: string;
};

type TipoContexto = {
  presupuesto: number;
  setPresupuesto: (presupuesto: number) => void;
  gastos: Gasto[];
  agregarGasto: (gasto: Gasto) => void;
};

const ContextoAplicacion = createContext<TipoContexto | null>(null);

export function ProveedorContexto({ children }: { children: React.ReactNode }) {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const agregarGasto = (gasto: Gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <ContextoAplicacion.Provider value={{ presupuesto, setPresupuesto, gastos, agregarGasto }}>
      {children}
    </ContextoAplicacion.Provider>
  );
}

export function useContexto() {
  const ctx = useContext(ContextoAplicacion);
  if (!ctx) throw new Error("Contexto no disponible");
  return ctx;
}
