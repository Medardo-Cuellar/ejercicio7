const users = [
  {
    name: "Alice",
    lastname: "Johnson",
    age: 28,
    gender: "Female",
    country: "USA",
  },
  {
    name: "Bob",
    lastname: "Smith",
    age: 32,
    gender: "Male",
    country: "Canada",
  },
  {
    name: "Carlos",
    lastname: "Gomez",
    age: 24,
    gender: "Male",
    country: "Mexico",
  },
  {
    name: "Daniela",
    lastname: "Martinez",
    age: 30,
    gender: "Female",
    country: "Colombia",
  },
  {
    name: "Erik",
    lastname: "Svensson",
    age: 29,
    gender: "Male",
    country: "Sweden",
  },
  {
    name: "Fiona",
    lastname: "O'Donnell",
    age: 35,
    gender: "Female",
    country: "Ireland",
  },
  {
    name: "Gautam",
    lastname: "Patel",
    age: 27,
    gender: "Male",
    country: "India",
  },
  {
    name: "Hana",
    lastname: "Kim",
    age: 22,
    gender: "Female",
    country: "South Korea",
  },
  {
    name: "Ivan",
    lastname: "Petrov",
    age: 34,
    gender: "Male",
    country: "Russia",
  },
  {
    name: "Julia",
    lastname: "Santos",
    age: 25,
    gender: "Female",
    country: "Brazil",
  },
];

/*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario

      Comienzo contando la lista de nombres
      creo una nueva lista para los puros nombres completos
      Tomo un nombre y le sumo un apellido para hacer un nombre completo
      repito por el total de objetos de la lista
      
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */

const listaNombres = (lista) => {
  let nuevalista = [];

  for (let i = 0; i < lista.length; i++) {
    const nombre = lista[i].name;
    const apellido = lista[i].lastname;
    nuevalista[i] = i + 1 + " " + nombre + " " + apellido;
  }
  return nuevalista;
};

/* 
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"

      filtrar hombres
      Contamos lista de nombres
      creo una nueva lista para los puros usuarios con genero masculino
      tomo un usuario
      su genero es masculino
      lo agrego a nueva lista
      su genero es femenino
      lo omito
      repito por le total de objetos de la lista

      */

const filtrarHombres = (lista) => {
  let nuevalista = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].gender == "Male") {
      nuevalista.push(lista[i].name + " " + lista[i].lastname);
    }
  }
  return nuevalista;
};

/* 
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"

      filtrar mujeres
      Contamos lista de nombres
      creo una nueva lista para los puros usuarios con genero masculino
      tomo un usuario
      su genero es femenino
      lo agrego a nueva lista
      su genero es masculino
      lo omito
      repito por le total de objetos de la lista

      */
const filtrarMujeres = (lista) => {
  let nuevalista = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].gender == "Female") {
      nuevalista.push(lista[i].name + " " + lista[i].lastname);
    }
  }
  return nuevalista;
};

/*  4.- Necesitamos saber la edad promedio de los usuarios

      Contamos lista de nombres
      Sumo la edad que llevo al total
      repito hasta terminar la lista
      divido el total entre la cuenta de la lista




*/

const promediarEdad = (lista) => {
  let sumaEdad = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaEdad += lista[i].age;
  }
  return sumaEdad / lista.length;
};

/*       5.- Necesitamos saber la mayor edad

        Contamos la lista de nombres
        Establecemos el mayor como 0
        La edad actual es mayor a la edad mayor?
            si: pasa a ser la nueva edad mayor
            no: se omite
        Se repite mientras tengamos nombres


*/

const saberMayor = (lista) => {
  let edadMayor = lista[0].age;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].age > edadMayor) {
      edadMayor = lista[i].age;
    }
  }
  return edadMayor;
};

/*       5.- Necesitamos saber la menor edad

        Contamos la lista de nombres
        Establecemos el menor como 0
        La edad actual es menor a la edad menor?
            si: pasa a ser la nueva edad menor
            no: se omite
        Se repite mientras tengamos nombres


*/

const saberMenor = (lista) => {
  let edadMenor = lista[0].age;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].age < edadMenor) {
      edadMenor = lista[i].age;
    }
  }
  return edadMenor;
};
console.log("la lista de nombres es: " + listaNombres(users));
console.log("la lista de hombres es: " + filtrarHombres(users));
console.log("la lista de mujeres es: " + filtrarMujeres(users));
console.log("la edad promedio es: " + promediarEdad(users));
console.log("la mayor edad es: " + saberMayor(users));
console.log("la menor edad es: " + saberMenor(users));
