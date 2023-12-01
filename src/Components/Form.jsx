import React, { useState }  from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "", 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (formData.fullName.length <= 5) {
      setErrors({
        ...errors,
        fullName: "El nombre completo debe tener más de 5 caracteres",
      });
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: "El formato del correo electrónico no es válido",
      });
      return;
    }

    // Simulo envio de datos al servidor (muestro por consola)
    console.log("Formulario enviado:", formData);

 
    alert(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`);
 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="fullName">Nombre completo:</label>
          <input 
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      
    </div>
  );
};

export default Form;
