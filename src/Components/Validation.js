export default function Validation(values) {
    const errors = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  
    if (values.user_name === '') {
      errors.user_name = 'El nombre es requerido!';
    }
    if (values.message === '') {
      errors.message = 'El mensaje es requerido!';
    }
    if (values.user_email === '') {
      errors.user_email = 'El email es requerido!';
    } else if (!email_pattern.test(values.user_email)) {
      errors.user_email = "El Email no tiene formato correcto";
    }
  
    return errors;
  }