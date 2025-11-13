
import Link from "next/link";
import { use } from "react";

export default function Inicio() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido</h1>
      <p>Selecciona una opción:</p>

      <div className="flex flex-col gap-3 mt-4">
        <Link href="/iniciar-sesion" className="underline">Iniciar Sesión</Link>
        <Link href="/presupuesto-mensual" className="underline">Presupuesto Mensual</Link>
        <Link href="/registro-gastos" className="underline">Registro de Gastos</Link>
      </div>
    </div>
  );
}
