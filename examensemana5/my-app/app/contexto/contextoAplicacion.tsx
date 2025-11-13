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
  setPresupuesto: (v: number) => void;
  gastos: Gasto[];
  agregarGasto: (g: Gasto) => void;
};

const ContextoAplicacion = createContext<TipoContexto | null>(null);

export function ProveedorContexto({ children }: { children: React.ReactNode }) {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const agregarGasto = (g: Gasto) => {
    setGastos([...gastos, g]);
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
