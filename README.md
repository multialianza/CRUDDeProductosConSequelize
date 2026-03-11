# CRUDDeProductosConSequelize
🛠️ E5-M7 Ejercicio
CRUD de Productos con Sequelize 📦
Objetivo: Abstraer la complejidad de las sentencias SQL directas utilizando un ORM (Object-Relational Mapper). Aprenderás a usar Sequelize para definir modelos de datos, interactuar con la base de datos y realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) a través de métodos de JavaScript, lo que resulta en un código más limpio, seguro y mantenible.

Prerrequisitos:

Tener acceso a una base de datos PostgreSQL y tus credenciales de conexión. Sequelize creará la tabla por ti, así que no necesitas prepararla con SQL.

Instrucciones:

Paso 1: Instalación de Dependencias
Sequelize requiere la librería principal y un "driver" para la base de datos específica que vayas a usar.

Abre la terminal en tu proyecto e instala los paquetes necesarios:

npm install sequelize pg pg-hstore

 
sequelize: La librería ORM.

pg y pg-hstore: El driver para que Sequelize pueda comunicarse con PostgreSQL.

Paso 2: Configuración de la Conexión
Crea un archivo para tu configuración de base de datos (ej: database.js).

Importa Sequelize y crea una nueva instancia, pasándole tus credenciales de conexión.

Exporta la instancia para poder usarla en otras partes de tu aplicación. Es una buena práctica probar la conexión con el método .authenticate().

Paso 3: Definición del Modelo Producto
Un "Modelo" es una abstracción que representa una tabla en tu base de datos.

Crea un archivo para tu modelo (ej: Producto.js).

Importa la instancia de Sequelize y la clase DataTypes.

Define tu modelo Producto usando sequelize.define(). Un modelo tiene dos partes principales: el nombre ('Producto') y un objeto que define sus atributos (las columnas de la tabla).

nombre: Debe ser de tipo DataTypes.STRING y no puede ser nulo (allowNull: false).

precio: Debe ser de tipo DataTypes.FLOAT y no puede ser nulo.

Paso 4: Sincronización y Ejecución de CRUD
Ahora, en tu archivo principal (app.js), orquestarás la sincronización del modelo y las operaciones CRUD.

Importa tu instancia de Sequelize y el modelo Producto.

Crea una función async principal para contener toda la lógica.

Sincroniza el modelo: Antes de hacer cualquier operación, llama a sequelize.sync(). Esto verificará si la tabla Productos existe en la base de datos y, si no, la creará automáticamente.

Implementa las funciones CRUD utilizando los métodos de Sequelize. Llama a estas funciones dentro de tu función principal para verlas en acción.

Guía de Métodos CRUD con Sequelize:
1. Crear un Producto (.create)

Llama al método Producto.create() pasándole un objeto con los datos del nuevo producto.

Ejemplo: const nuevoProducto = await Producto.create({ nombre: 'Laptop', precio: 1200.50 });

2. Leer Productos (.findAll y .findByPk)

Para obtener todos los productos: const todosLosProductos = await Producto.findAll();.

Para obtener un producto por su clave primaria (ID): const producto = await Producto.findByPk(1);.

3. Actualizar un Producto (.update)

Llama a Producto.update(). Recibe dos argumentos: un objeto con los nuevos datos y un objeto de configuración con una cláusula where para especificar qué producto actualizar.

Ejemplo: await Producto.update({ precio: 1150.00 }, { where: { id: 1 } });

4. Eliminar un Producto (.destroy)

Llama a Producto.destroy(), pasándole un objeto de configuración con una cláusula where para especificar qué producto eliminar.

Ejemplo: await Producto.destroy({ where: { id: 2 } });

Conceptos a Aplicar:

ORM (Object-Relational Mapping): El paradigma de programar interactuando con objetos y métodos en lugar de escribir sentencias SQL en texto plano.

Sequelize: Uno de los ORMs más populares para Node.js, compatible con múltiples bases de datos.

Modelo (Model): Una clase de JavaScript que representa una tabla en la base de datos. Cada instancia de un modelo representa una fila.

Atributos (Attributes): Las propiedades de un modelo que se mapean a las columnas de la tabla, con sus tipos de datos y restricciones.

Sincronización (.sync()): El proceso mediante el cual Sequelize se asegura de que el esquema de la base de datos coincida con la definición de tus modelos.

Métodos CRUD de Sequelize:

create() para INSERT.

findAll(), findByPk(), findOne() para SELECT.

update() para UPDATE.

destroy() para DELETE.

Entrega:

El trabajo deberá ser entregado a través de un repositorio público en GitHub. No subas tus credenciales de base de datos. Utiliza variables de entorno o un archivo de configuración ignorado por Git. Por favor, comparte únicamente el enlace a dicho repositorio. 📤
