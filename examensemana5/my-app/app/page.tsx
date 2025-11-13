export default function Inicio() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido</h1>
      <p>Selecciona una opción:</p>

      <div className="flex flex-col gap-3 mt-4">
        <a className="underline" href="/iniciar-sesion">Iniciar Sesión</a>
        <a className="underline" href="/presupuesto-mensual">Presupuesto Mensual</a>
        <a className="underline" href="/registro-gastos">Registro de Gastos</a>
      </div>
    </div>
  );
}
