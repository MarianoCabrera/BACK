-- Tabla de usuarios
CREATE TABLE usuario (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabla de productos
CREATE TABLE productos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    precio DECIMAL(9,2) NOT NULL
);

-- Tabla de carrito
CREATE TABLE carrito (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_agregado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
-- Tabla de categorías
CREATE TABLE categorias (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de relación entre productos y categorías
CREATE TABLE productos_categorias (
    producto_id INT NOT NULL,
    categoria_id INT NOT NULL,
    PRIMARY KEY (producto_id, categoria_id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);



-- Agregar producto 1
INSERT INTO productos (id, nombre, descripcion, precio)
VALUES ('1','zapatillas', 'zapatillas deportivas', 19.99);

-- Agregar producto 2
INSERT INTO productos (id, nombre, descripcion, precio)
VALUES ('2','perfume', 'perfumes varios', 29.99);

-- Agregar producto 3
INSERT INTO productos (id, nombre, descripcion, precio)
VALUES ('3','relojes', 'relojes resistente al agua', 39.99);


INSERT INTO categorias (nombre)
VALUES ('indumentarias');

INSERT INTO categorias (nombre)
VALUES ('accesorios');