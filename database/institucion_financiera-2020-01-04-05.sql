-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 05-01-2020 a las 04:41:08
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `institucion_financiera`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `activo_fijo`
--

CREATE TABLE `activo_fijo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `procedencia` enum('NUEVO','USADO','DONADO NUEVO','DONADO USADO') NOT NULL,
  `precio` decimal(13,2) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idTipo` int(11) NOT NULL,
  `idMarca` int(11) NOT NULL,
  `idSucursal` int(11) NOT NULL,
  `fechaAdquisicion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `activo_fijo`
--

INSERT INTO `activo_fijo` (`id`, `nombre`, `idEmpleado`, `descripcion`, `procedencia`, `precio`, `idDepartamento`, `idTipo`, `idMarca`, `idSucursal`, `fechaAdquisicion`) VALUES
(1, 'Terreno', 4, 'Terreno en Apastepeque 5 manzanas', 'NUEVO', '250000.00', 1, 1, 1, 1, '2020-01-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `activo_fijo_baja`
--

CREATE TABLE `activo_fijo_baja` (
  `idActivoFijo` int(11) NOT NULL,
  `motivo` varchar(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `activo_fijo_baja`
--

INSERT INTO `activo_fijo_baja` (`idActivoFijo`, `motivo`, `fecha`) VALUES
(1, 'Venta del activo', '2020-01-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `tipo` enum('Persona Natural','Persona Jurídica') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `clasificacion` varchar(1) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `tipo`, `clasificacion`, `idPersona`) VALUES
(17, 'Persona Natural', 'B', 49);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credito`
--

CREATE TABLE `credito` (
  `id` int(11) NOT NULL,
  `monto` decimal(13,2) NOT NULL,
  `fecha` date NOT NULL,
  `cobro` decimal(13,2) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idPolitica` int(11) NOT NULL,
  `estado` enum('cancelado','en cobro','incobrable') NOT NULL,
  `idCliente` int(11) NOT NULL,
  `tipoCredito` enum('PERSONAL','HIPOTECARIO','NOMINA','DE INVERSION','DE VIVIENDA','DE CONSUMO','DE ESTUDIO','DE AVIO','AGRARIO') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `credito`
--

INSERT INTO `credito` (`id`, `monto`, `fecha`, `cobro`, `idEmpleado`, `idPolitica`, `estado`, `idCliente`, `tipoCredito`) VALUES
(1, '2000.00', '2020-01-04', '200.00', 4, 2, 'cancelado', 17, 'PERSONAL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credito_fiador`
--

CREATE TABLE `credito_fiador` (
  `id` int(11) NOT NULL,
  `idFiador` int(11) NOT NULL,
  `idCredito` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `credito_fiador`
--

INSERT INTO `credito_fiador` (`id`, `idFiador`, `idCredito`, `estado`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuota`
--

CREATE TABLE `cuota` (
  `id` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `enMora` tinyint(1) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `estado` enum('cancelado','pendiente') NOT NULL,
  `idCredito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuota`
--

INSERT INTO `cuota` (`id`, `fecha`, `enMora`, `idEmpleado`, `estado`, `idCredito`) VALUES
(1, '2020-01-04', 0, 4, 'pendiente', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `codigo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id`, `nombre`, `codigo`) VALUES
(1, 'Informatica', '0001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `cargo` enum('administrador/a','empleado/a') NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `cargo`, `idPersona`) VALUES
(4, 'empleado/a', 42);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fiador`
--

CREATE TABLE `fiador` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fiador`
--

INSERT INTO `fiador` (`id`, `idPersona`) VALUES
(1, 43),
(2, 44),
(3, 45),
(4, 46);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `garantia`
--

CREATE TABLE `garantia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `valoracionReal` decimal(10,2) NOT NULL,
  `idCredito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `garantia`
--

INSERT INTO `garantia` (`id`, `nombre`, `valoracionReal`, `idCredito`) VALUES
(1, 'Automovil', '1500.00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `nombre`) VALUES
(1, 'freund');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `dui` varchar(12) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `genero` enum('masculino','femenino') NOT NULL,
  `salario` decimal(13,2) NOT NULL,
  `idProfesion` int(11) NOT NULL,
  `nit` varchar(20) NOT NULL,
  `fechaN` date NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `zona` enum('occidental','central','paracentral','oriental') NOT NULL,
  `estadoCivil` enum('soltero/a','casado/a','acompañado/a','viudo/a','divorciado/a') NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombres`, `apellidos`, `dui`, `telefono`, `genero`, `salario`, `idProfesion`, `nit`, `fechaN`, `direccion`, `zona`, `estadoCivil`, `idUsuario`) VALUES
(42, 'Kevin Eduardo', 'Durán', '04430539-7', '7777-7777', 'masculino', '300.00', 1, '0614-071096-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 43),
(43, 'Eduardo Kevin', 'Portillo', '04431539-7', '7777-7777', 'masculino', '300.00', 1, '0114-071096-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 44),
(44, 'Rosa', 'Duran', '04431539-3', '7777-7777', 'femenino', '300.00', 1, '0114-071056-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 45),
(45, 'Elsi', 'Duran', '94431539-3', '7777-7777', 'femenino', '300.00', 1, '0114-171056-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 46),
(46, 'Dina', 'Duran', '93331539-3', '7777-7777', 'femenino', '300.00', 1, '0100-171056-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 47),
(49, 'Diego', 'Palacios', '93331139-3', '7777-7777', 'masculino', '300.00', 1, '0100-171051-109-2', '1996-10-07', 'Apastepeque', 'paracentral', 'soltero/a', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `politica`
--

CREATE TABLE `politica` (
  `id` int(11) NOT NULL,
  `tasaMora` decimal(13,2) NOT NULL,
  `diasIncobrabilidad` int(11) NOT NULL,
  `montoInicial` decimal(13,2) NOT NULL,
  `montoFinal` decimal(13,2) NOT NULL,
  `diasCobro` int(11) NOT NULL,
  `tasaInteres` decimal(13,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `politica`
--

INSERT INTO `politica` (`id`, `tasaMora`, `diasIncobrabilidad`, `montoInicial`, `montoFinal`, `diasCobro`, `tasaInteres`) VALUES
(1, '13.50', 30, '100.00', '5000.00', 60, '10.35'),
(2, '30.00', 60, '5000.00', '15000.00', 30, '12.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesion`
--

CREATE TABLE `profesion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesion`
--

INSERT INTO `profesion` (`id`, `nombre`) VALUES
(1, 'Contador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`) VALUES
(1, 'Cliente'),
(2, 'Empleado'),
(3, 'Fiador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `codigo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id`, `nombre`, `codigo`) VALUES
(1, 'San Vicente', '0001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_activo`
--

CREATE TABLE `tipo_activo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `codigo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_activo`
--

INSERT INTO `tipo_activo` (`id`, `nombre`, `codigo`) VALUES
(1, 'Planta y Equipo', '0001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `username`, `password`, `idRol`) VALUES
(43, 'TepoKev', '32231231212', 2),
(44, 'TeoKev77', '32231231212', 3),
(45, 'rosa', '32231231212', 2),
(46, 'elsi', '32231231212', 2),
(47, 'dina', '32231231212', 2),
(50, 'diego', '32231231212', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `activo_fijo`
--
ALTER TABLE `activo_fijo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDepartamento` (`idDepartamento`),
  ADD KEY `idEmpleado` (`idEmpleado`),
  ADD KEY `idMarca` (`idMarca`),
  ADD KEY `idSucursal` (`idSucursal`),
  ADD KEY `idTipo` (`idTipo`);

--
-- Indices de la tabla `activo_fijo_baja`
--
ALTER TABLE `activo_fijo_baja`
  ADD PRIMARY KEY (`idActivoFijo`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `credito`
--
ALTER TABLE `credito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCliente` (`idCliente`),
  ADD KEY `idEmpleado` (`idEmpleado`),
  ADD KEY `idPolitica` (`idPolitica`);

--
-- Indices de la tabla `credito_fiador`
--
ALTER TABLE `credito_fiador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCredito` (`idCredito`),
  ADD KEY `idFiador` (`idFiador`);

--
-- Indices de la tabla `cuota`
--
ALTER TABLE `cuota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEmpleado` (`idEmpleado`),
  ADD KEY `idCredito` (`idCredito`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `fiador`
--
ALTER TABLE `fiador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idPersona_2` (`idPersona`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `garantia`
--
ALTER TABLE `garantia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCredito` (`idCredito`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dui` (`dui`),
  ADD UNIQUE KEY `nit` (`nit`),
  ADD UNIQUE KEY `idUsuario` (`idUsuario`),
  ADD KEY `idProfesion` (`idProfesion`);

--
-- Indices de la tabla `politica`
--
ALTER TABLE `politica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesion`
--
ALTER TABLE `profesion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_activo`
--
ALTER TABLE `tipo_activo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `idRol` (`idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `activo_fijo`
--
ALTER TABLE `activo_fijo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `credito`
--
ALTER TABLE `credito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `credito_fiador`
--
ALTER TABLE `credito_fiador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cuota`
--
ALTER TABLE `cuota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `fiador`
--
ALTER TABLE `fiador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `garantia`
--
ALTER TABLE `garantia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `politica`
--
ALTER TABLE `politica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `profesion`
--
ALTER TABLE `profesion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_activo`
--
ALTER TABLE `tipo_activo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `activo_fijo`
--
ALTER TABLE `activo_fijo`
  ADD CONSTRAINT `activo_fijo_ibfk_1` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`id`),
  ADD CONSTRAINT `activo_fijo_ibfk_2` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`id`),
  ADD CONSTRAINT `activo_fijo_ibfk_3` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `activo_fijo_ibfk_4` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`id`),
  ADD CONSTRAINT `activo_fijo_ibfk_5` FOREIGN KEY (`idTipo`) REFERENCES `tipo_activo` (`id`);

--
-- Filtros para la tabla `activo_fijo_baja`
--
ALTER TABLE `activo_fijo_baja`
  ADD CONSTRAINT `activo_fijo_baja_ibfk_1` FOREIGN KEY (`idActivoFijo`) REFERENCES `activo_fijo` (`id`);

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `credito`
--
ALTER TABLE `credito`
  ADD CONSTRAINT `credito_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `credito_ibfk_2` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`id`),
  ADD CONSTRAINT `credito_ibfk_3` FOREIGN KEY (`idPolitica`) REFERENCES `politica` (`id`);

--
-- Filtros para la tabla `credito_fiador`
--
ALTER TABLE `credito_fiador`
  ADD CONSTRAINT `credito_fiador_ibfk_1` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`id`),
  ADD CONSTRAINT `credito_fiador_ibfk_2` FOREIGN KEY (`idFiador`) REFERENCES `fiador` (`id`);

--
-- Filtros para la tabla `cuota`
--
ALTER TABLE `cuota`
  ADD CONSTRAINT `cuota_ibfk_1` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`id`),
  ADD CONSTRAINT `cuota_ibfk_2` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `fiador`
--
ALTER TABLE `fiador`
  ADD CONSTRAINT `fiador_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `garantia`
--
ALTER TABLE `garantia`
  ADD CONSTRAINT `garantia_ibfk_1` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`idProfesion`) REFERENCES `profesion` (`id`),
  ADD CONSTRAINT `persona_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
