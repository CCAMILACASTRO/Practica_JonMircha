/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, 
director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance,
 Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

 class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
       this.id = id;
       this.titulo = titulo;
       this.director = director;
       this.estreno = estreno;
       this.pais = pais;
       this.generos = generos;
       this.calificacion = calificacion

       this.validarIMBD(id);
       this.validarTitulo(titulo);
       this.validarDirector(director);    //METODOS INVOCADOS QUE VALIDAN LOS DATOS RECIBIDOS
       this.validarEstreno(estreno);
       this.validarPais(pais);
       this.validarGeneros(generos);
       this.validarCalificacion(calificacion);
    }

    // MÉTODO ESTATICO DE GENEROS:

    static get listaGeneros(){   //- Valida que los géneros sean introducidos en forma de arreglo.
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance','Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    static generosAceptados(){ //- Valida que los géneros introducidos esten dentro de los géneros aceptados 
        return `Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`
    }

    //VALIDACIONES GENERALES DE DATOS:

    validarCadena(propiedad, valor){
        if(!valor) return `${propiedad} '${valor}' esta vacio`;
        if(typeof valor !== 'string') return `${propiedad} '${valor}' ingresado NO es un string`;
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return `${propiedad} '${valor}' excede el numero de caracteres permitidos`;
        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return `${propiedad} '${valor}' esta vacio`;
        if(typeof valor !== 'snumber') return `${propiedad} '${valor}' ingresado NO es un numero`;
        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return `${propiedad} '${valor}' esta vacio`;
        if(!(valor instanceof Array)) return `${propiedad} '${valor}' no es un arreglo`;
        if(valor.length === 0) return `${propiedad} '${valor}' no tiene datos`;
        for(let cadena of valor){
            if(typeof valor !== 'string') return `${propiedad} '${valor}' ingresado NO es un string`;
        }
        return true;
    }

    // VALIDACIONES ESPECIFICAS DE LAS PROPIEDADES (se colocan dentro del constructor de la clase Pelicula)

    validarIMBD(id){  //- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
        if(this.validarCadena('IMBD', id))
        if(!(/^([a-z]{2})([0-9]{7})$/.test(id)))
        return `IMBD '${id} no es valido, debe tener 9 caracteres, 2 letras y 7 numeros`;
    }

    validarTitulo(titulo){  //- Valida que el título no rebase los 100 caracteres.
        if(this.validarCadena('Titulo', titulo))
        this.validarCadena('Titulo',titulo, 100);
    }

    validarDirector(director){ //- Valida que el director no rebase los 50 caracteres.
        if(this.validarCadena('Director', director))
        this.validarCadena('Director', director, 50);
    }

    validarEstreno(estreno){  //- Valida que el año de estreno sea un número entero de 4 dígitos.
        if(this.validarNumero('Año de estreno', estreno))
        if(!(/^([0-9]{4})$/.test(estreno)))
        return `Año de estreno '${estreno}' no es valido, debe ser un numero de 4 digitos`;
    }

    validarPais(pais){   // -Valida que el país o paises sea introducidos en forma de arreglo.
        this.validarArreglo('Pais', pais)
    }

    validarGeneros(generos){  //- Valida que los géneros introducidos esten dentro de los géneros aceptados.
        if(this.validarArreglo('Generos', generos)){
            for(let genero of generos){
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.log(`Genero/s incorrectos '${generos.join(', ')}'`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){  //- Valida que la calificación sea un número entre 0 y 10 pudiendo con 1 decimal.
        if(this.validarNumero('Calificacion', calificacion))
        return (calificacion < 0 || calificacion > 10)
        ? console.log(`La calificacion tiene que ser entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
    }

    //METODO QUE IMPRIMA LA FICHA TECNICA: - Crea un método que devuelva toda la ficha técnica de la película.

    fichaTecnica(){
        console.log (`Ficha Tecnica: 
        Titulo: ${this.titulo}, 
        Director: ${this.director}, 
        Año: ${this.estreno}, 
        Pais: ${this.pais.join(' - ')}, 
        Genero: ${this.generos.join(', ')}, 
        Calificacion: ${this.calificacion}, 
        IMBD: ${this.id}`);
    }
 }

 const misPelis = [
    {
        id: 'tt0241527', 
        titulo:'Harry Potter y la piedra filosofal',
        director:'J.K. Rowling',
        estreno: 2001,
        pais: ['USA'],
        generos: ['Adventure'],
        calificacion: 7.6,
        
    },
    {
        id: 'tt0468569', 
        titulo:'The Dark Knight',
        director:'Christopher Nolan',
        estreno: 2008,
        pais: ['USA', 'UK'],
        generos: ['Action', 'Crime', 'Drama'],
        calificacion: 9.0,
        
    }
 ];

// console.log(misPelis)

 misPelis.forEach(el => new Pelicula(el).fichaTecnica());





