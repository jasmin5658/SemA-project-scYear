interface FormData {
    email: string;
    password: string;
  }
  
  const login = (formData: FormData) => {
    // Perform validation on formData
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Trigger loginClient action
    // Example: loginClient(formData);
  };
  
  export default login;
  