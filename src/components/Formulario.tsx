import { useForm } from "../hooks/useForm";


export const Formulario = () => {

    const { email, nombre, formulario, handleInput} = useForm({
        email: '',
        nombre: '',
    });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          placeholder="Introduce tu email"
          className="form-control"
          name="email"
          value={ email }
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          placeholder="Introduce tu nombre"
          className="form-control"
          name="nombre"
          value={ nombre }
          onChange={handleInput}
        />
      </div>

      <pre> {JSON.stringify(formulario)} </pre>
    </form>
  );
}