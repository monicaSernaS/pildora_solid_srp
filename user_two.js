// Refactorización del código
// Clase User: Solo guarda la información básica del usuario.

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  //Clase UserDatabase: Se encarga de guardar el usuario en la base de datos.
  class UserDatabase {
    save(user) {
      console.log(`Saving ${user.name} to the database`);
    }
  }
  
  //Clase EmailService: Se encarga de enviar un correo electrónico.
  class EmailService {
    sendEmail(user) {
      console.log(`Sending email to ${user.email}`);
    }
  }
  
  // Paso 1: Crear un usuario
  const user = new User("Mónica", "monica@example.com");
  
  // Paso 2: Guardar al usuario en la base de datos
  const userDatabase = new UserDatabase();
  userDatabase.save(user);
  
  // Paso 3: Enviar un correo electrónico
  const emailService = new EmailService();
  emailService.sendEmail(user);

  // De esta manera, seguimos el principio de Responsabilidad Única porque cada clase se ocupa solo de una cosa.
  