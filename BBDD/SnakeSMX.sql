CREATE TABLE Mapas (
    IDMapa INT AUTO_INCREMENT,
    NombreMapa VARCHAR(20) NOT NULL,
    DiseñoMapa BLOB NOT NULL,
    PRIMARY KEY (IDMapa)
);
CREATE TABLE Usuarios (
     Usuario VARCHAR(10),
     Password VARBINARY(30) NOT NULL,
     FotoPerfil MEDIUMBLOB,
     PRIMARY KEY (Usuario)
);
CREATE TABLE Partida_1J (
       IDPartida INT AUTO_INCREMENT,
       Puntos INT NOT NULL,
       Usuario VARCHAR(20) NOT NULL,
       IDMapa INT NOT NULL,
       ColorSerpiente VARCHAR(10),
       Dificultad INT NOT NULL,
       Fecha DATE,
       PRIMARY KEY (IDPartida),
       FOREIGN KEY (Usuario) REFERENCES Usuarios(Usuario) ON UPDATE CASCADE,
       FOREIGN KEY (IDMapa) REFERENCES Mapas(IDMapa) ON UPDATE CASCADE
);
CREATE TABLE Partida_2J (
       IDPartida INT AUTO_INCREMENT,
       Puntos INT NOT NULL,
       Usuario1 VARCHAR(20) NOT NULL,
       Usuario2 VARCHAR(20) NOT NULL,
       IDMapa INT NOT NULL,
       ColorSerpiente VARCHAR(10),
       Fecha DATE,
       PRIMARY KEY (IDPartida),
       FOREIGN KEY (Usuario1) REFERENCES Usuarios (Usuario),
       FOREIGN KEY (Usuario2) REFERENCES Usuarios (Usuario),
       FOREIGN KEY (IDMapa) REFERENCES Mapas (IDMapa)
);
