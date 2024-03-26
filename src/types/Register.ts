interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  const register = (formData: FormData) => {
    // Perform validation on formData
    if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Trigger registerClient action
    // Example: registerClient(formData);
  };
  
  export default register;
  