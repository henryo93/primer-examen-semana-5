"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaginaLogin() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const entrar = () => {
    if (usuario === "admin" && clave === "admin123") {
      router.push("/presupuesto-mensual");
      setError("");
      return;
    }
    setError("Usuario o clave inválidos");
  };

  return (
    <div className="p-6 max-w-sm mx-auto flex flex-col gap-4">
      <input className="border p-2" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input className="border p-2" type="password" placeholder="Clave" value={clave} onChange={e => setClave(e.target.value)} />
      <button className="bg-blue-600 text-white p-2" onClick={entrar}>Ingresar</button>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
}
