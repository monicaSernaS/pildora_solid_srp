//Creamos una clase, donde le daremos unas funciones

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    saveToDatabase() {
      console.log(`Saving ${this.name} to the database`);
      //Guarda al usuario en la base de datos
    }
  
    sendEmail() {
      console.log(`Sending email to ${this.email}`);
      // Para enviar un email
    }
  }

  const newUser = new User('Ratón Pérez', 'sr_perez_raton@example.com');
  newUser.saveToDatabase();
  newUser.sendEmail