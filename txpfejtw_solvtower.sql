-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-10-2023 a las 15:01:49
-- Versión del servidor: 5.7.34-cll-lve
-- Versión de PHP: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `txpfejtw_solvtower`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `id_group` int(11) UNSIGNED NOT NULL,
  `name_group` varchar(50) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`id_group`, `name_group`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 1685984389, NULL),
(2, 'User', 1685984389, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(1, '2021-02-14-061644', 'App\\Database\\Migrations\\Users', 'default', 'App', 1685984380, 1),
(2, '2021-02-14-061739', 'App\\Database\\Migrations\\Groups', 'default', 'App', 1685984380, 1),
(3, '2021-03-10-203942', 'App\\Database\\Migrations\\Sliders', 'default', 'App', 1685984380, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(150) NOT NULL,
  `subtitle` varchar(200) NOT NULL,
  `link` varchar(350) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `status` int(1) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `deleted_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_notificacion`
--

CREATE TABLE `tipo_notificacion` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_notificacion`
--

INSERT INTO `tipo_notificacion` (`id`, `titulo`, `elim_log`) VALUES
(1, 'SISTEMA DE GESTIÓN DE CALIDAD', 1),
(2, 'SISTEMA DE GESTIÓN DE SST', 1),
(3, 'SISTEMA DE GESTIÓN AMBIENTAL', 1),
(4, 'SISTEMA INTEGRADO DE GESTIÓN', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_notificacion_categoria`
--

CREATE TABLE `tipo_notificacion_categoria` (
  `id` int(11) NOT NULL,
  `tipo_notificacion_id` int(11) NOT NULL,
  `tipo_notificacion` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_notificacion_categoria`
--

INSERT INTO `tipo_notificacion_categoria` (`id`, `tipo_notificacion_id`, `tipo_notificacion`, `titulo`, `elim_log`) VALUES
(1, 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 'NO CONFORMIDAD', 1),
(2, 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 'OPORTUNIDAD DE MEJORA', 1),
(3, 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 'SERVICIO NO CONFORME', 1),
(4, 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 'OBSERVACIÓN', 1),
(5, 2, 'SISTEMA DE GESTIÓN DE SST', 'NO CONFORMIDAD', 1),
(6, 2, 'SISTEMA DE GESTIÓN DE SST', 'OPORTUNIDAD DE MEJORA', 1),
(7, 2, 'SISTEMA DE GESTIÓN DE SST', 'ACCIDENTES', 1),
(8, 2, 'SISTEMA DE GESTIÓN DE SST', 'INCIDENTES/INCIDENTES PELIGROSOS', 1),
(9, 2, 'SISTEMA DE GESTIÓN DE SST', 'ACTO SUB ESTÁNDAR', 1),
(10, 2, 'SISTEMA DE GESTIÓN DE SST', 'CONDICIÓN SUB ESTÁNDAR', 1),
(11, 2, 'SISTEMA DE GESTIÓN DE SST', 'OBSERVACIÓN', 1),
(12, 3, 'SISTEMA DE GESTIÓN AMBIENTAL', 'NO CONFORMIDAD', 1),
(13, 3, 'SISTEMA DE GESTIÓN AMBIENTAL', 'OPORTUNIDAD DE MEJORA', 1),
(14, 3, 'SISTEMA DE GESTIÓN AMBIENTAL', 'OBSERVACIÓN', 1),
(15, 4, 'SISTEMA INTEGRADO DE GESTIÓN', 'NO COFORMIDAD', 1),
(16, 4, 'SISTEMA INTEGRADO DE GESTIÓN', 'OBSERVACIÓN', 1),
(17, 4, 'SISTEMA INTEGRADO DE GESTIÓN', 'OPORTUNIDAD DE MEJORA', 1),
(18, 4, 'SISTEMA INTEGRADO DE GESTIÓN', 'SERVICIO NO CONFORME', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `empresa` varchar(150) NOT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(170) NOT NULL,
  `group_id` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `deleted_at` int(11) DEFAULT NULL,
  `elim_log` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `empresa_id`, `empresa`, `photo`, `email`, `user`, `password`, `group_id`, `created_at`, `updated_at`, `deleted_at`, `elim_log`) VALUES
(1, 'BORIS ALBERTO', 'ESTRADA SANGAMA', 4, 'LABORATORIO DE INSTRUMENTOS AMBIENTALES SOCIEDAD ANONIMA CERRADA', 'boris-estrada.jpg', 'bstrada4@gmail.com', 'bestradas', '$2y$10$SbiA.y77/3aLilC1/NXlguONFjzuKDWVQkHS.yFk/aLVfyYzBb/py', 1, 1685984389, NULL, NULL, 1),
(2, 'DIEGO ARMANDO', 'DIAZ GONZALES', 4, 'LABORATORIO DE INSTRUMENTOS AMBIENTALES SOCIEDAD A...', 'boris-estrada.jpg', 'diegodgonzales3@gmail.com', 'ddiazg', '$2y$10$SbiA.y77/3aLilC1/NXlguONFjzuKDWVQkHS.yFk/aLVfyYzBb/py', 2, 1685984389, NULL, NULL, 1),
(3, 'BERNARDETTE MARIELLA', 'SENCEBE BASTANTE DE GARCIA', 1, 'TOWER AND TOWER S.A.', 'mariella-sencebe.jpg', '', 'bsencebeg', '$2y$10$SbiA.y77/3aLilC1/NXlguONFjzuKDWVQkHS.yFk/aLVfyYzBb/py', 1, 1685984389, NULL, NULL, 1),
(4, 'MARIA YSABEL', 'CRUZ LLOCCLLA', 1, 'TOWER AND TOWER S.A.', 'boris-estrada.jpg', 'proyectos@towerandtower.com.pe', 'mcruzl', '$2y$10$SbiA.y77/3aLilC1/NXlguONFjzuKDWVQkHS.yFk/aLVfyYzBb/py', 2, 1685984389, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_area`
--

CREATE TABLE `web_area` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_area`
--

INSERT INTO `web_area` (`id`, `titulo`, `elim_log`) VALUES
(1, 'SISTEMAS', 1),
(2, 'CONTABILIDAD', 1),
(3, 'LOGISTICA', 1),
(4, 'COMERCIAL', 1),
(5, 'ALMACEN', 1),
(6, 'FINANZAS', 1),
(7, 'PROYECTOS', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_empresas`
--

CREATE TABLE `web_empresas` (
  `id` int(11) NOT NULL,
  `ruc` varchar(50) NOT NULL,
  `razon_social` varchar(250) NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `web_representante_id` int(11) NOT NULL,
  `representante` varchar(250) NOT NULL,
  `logo` varchar(500) NOT NULL,
  `registrado` varchar(250) NOT NULL,
  `fecha_registro` int(11) NOT NULL,
  `modificado` varchar(250) NOT NULL,
  `fecha_modificacion` int(11) NOT NULL,
  `denegado` varchar(250) NOT NULL,
  `fecha_denegado` int(11) NOT NULL,
  `permitido` varchar(250) NOT NULL,
  `fecha_permitido` int(11) NOT NULL,
  `estado` varchar(250) NOT NULL,
  `eliminacion_logica` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `web_empresas`
--

INSERT INTO `web_empresas` (`id`, `ruc`, `razon_social`, `direccion`, `web_representante_id`, `representante`, `logo`, `registrado`, `fecha_registro`, `modificado`, `fecha_modificacion`, `denegado`, `fecha_denegado`, `permitido`, `fecha_permitido`, `estado`, `eliminacion_logica`) VALUES
(1, '20380618797', 'TOWER AND TOWER S.A.', 'CAL. MANUEL AUGUSTO GONZALES OLAECHEA NRO 462 URB. LIMATAMBO  LIMA - LIMA - SAN ISIDRO', 1, 'ALVARO SANZ MONTERDE', 'logo_towerandtower_1659376586.png', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1659472277, '', 0, '', 0, 'ACTIVO', 1),
(2, '20524844991', 'CORPORACION DE EMPRESAS DE SERVICIOS SOCIEDAD ANONIMA CERRADA - CORPEMSE S.A.C.', 'CAL. MALBEC NRO 922 URB. TOCHE  ICA - CHINCHA - CHINCHA ALTA', 1, 'ALVARO SANZ MONTERDE', 'logo_corpemse_1659376944.jpg', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1659472328, '', 0, '', 0, 'ACTIVO', 1),
(3, '20507751866', 'INVERSIONES LURIN S.A.C.', 'MZA. G LOTE 10 URB. SANTA GENOVEVA  LIMA - LIMA - LURIN', 1, 'ALVARO SANZ MONTERDE', 'logo_lurin_1659376955.jpg', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1659472337, '', 0, '', 0, 'ACTIVO', 1),
(4, '20608268724', 'LABORATORIO DE INSTRUMENTOS AMBIENTALES SOCIEDAD ANONIMA CERRADA', 'Calle CARLOS VILLARAN 1087 URB.  PALOMAR NORTE, distrito de la Victoria, provincia y departamento de Lima', 2, 'PAULO SANZ MONTENEGRO', 'logo_ladiamb_1659376968.jpg', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1659472347, '', 0, '', 0, 'ACTIVO', 1),
(5, '20379251103', 'ECOLOGY, RESEARCH AND MENTORING SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA - ER & M SRL', 'CAL. MANUEL AUGUSTO GONZALES OLAECHEA NRO 0462 URB. LIMATAMBO  LIMA - LIMA - SAN ISIDRO', 1, 'ALVARO SANZ MONTERDE', 'logo_ecology_1659376977.jpg', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1659472355, '', 0, '', 0, 'ACTIVO', 1),
(6, '20100496527', 'TAPONES ESPECIALES S A', 'JR. ALBILLA NRO S/N DEP. 201 URB. LAS VIÑAS  ICA - CHINCHA - CHINCHA ALTA', 1, 'ALVARO SANZ MONTERDE', '', 'BORIS ALBERTO ESTRADA SANGAMA', 1655825741, 'BORIS ALBERTO ESTRADA SANGAMA', 1656608736, 'BORIS ALBERTO ESTRADA SANGAMA', 1656608743, 'BORIS ALBERTO ESTRADA SANGAMA', 1656608721, 'INACTIVO', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_gestionmejora_accion`
--

CREATE TABLE `web_gestionmejora_accion` (
  `id` int(11) NOT NULL,
  `web_notificacion_id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `descrip` longtext NOT NULL,
  `estado` varchar(30) NOT NULL,
  `web_colaborador_id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `email` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `archivo` varchar(250) NOT NULL,
  `registra_id` int(11) NOT NULL,
  `registra` varchar(250) NOT NULL,
  `modifica_id` int(11) NOT NULL,
  `modifica` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_gestionmejora_accion`
--

INSERT INTO `web_gestionmejora_accion` (`id`, `web_notificacion_id`, `tipo`, `descrip`, `estado`, `web_colaborador_id`, `nombre`, `email`, `fecha`, `archivo`, `registra_id`, `registra`, `modifica_id`, `modifica`, `elim_log`) VALUES
(1, 1, 'INMEDIATA', 'PRUEBA', 'PENDIENTE', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 'bstrada4@gmail.com', '2023-08-19', '1692462433_613c8e17bd7a06652702.docx', 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', 0, '', 1),
(2, 1, 'INMEDIATA', 'PRUEBA', 'PENDIENTE', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 'bstrada4@gmail.com', '2023-08-18', '1692462433_5e4afa2c7ed971419b5a.docx', 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', 1),
(3, 1, 'PLAN', 'PRUEBA', 'PENDIENTE', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 'bstrada4@gmail.com', '2023-08-23', '1692462560_f6cc0077262937bed47e.docx', 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', 0, '', 1),
(4, 2, 'INMEDIATA', 'implementar la descarga de reportes', 'PENDIENTE', 4, 'BORIS ALBERTO ESTRADA SANGAMA', 'bstrada4@gmail.com', '2023-09-05', '1693516537_49894ad24c5451077880.pdf', 4, 'MARIA YSABEL CRUZ LLOCCLLA', 0, '', 1),
(5, 2, 'PLAN', 'XXX', 'PENDIENTE', 4, 'BORIS ALBERTO ESTRADA SANGAMA', 'bstrada4@gmail.com', '2023-09-05', '1693516724_4fa06478cf2977d75402.pdf', 4, 'MARIA YSABEL CRUZ LLOCCLLA', 0, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_gestionmejora_notificacion`
--

CREATE TABLE `web_gestionmejora_notificacion` (
  `id` int(11) NOT NULL,
  `serie` int(5) NOT NULL,
  `fecha_operacion` date NOT NULL,
  `colaborador` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `noti_correo` varchar(100) NOT NULL,
  `area_id` int(11) NOT NULL,
  `area` varchar(100) NOT NULL,
  `noti_sistema_gestion_id` int(11) NOT NULL,
  `noti_sistema_gestion` varchar(100) NOT NULL,
  `noti_categoria_id` int(11) NOT NULL,
  `noti_categoria` varchar(50) NOT NULL,
  `noti_requisito_norma` varchar(100) NOT NULL,
  `noti_descripcion` longtext NOT NULL,
  `noti_descripcion_final` longtext NOT NULL,
  `noti_causa_raiz` longtext NOT NULL,
  `efic_causa_raiz` longtext NOT NULL,
  `efic_fecha` date NOT NULL,
  `efic_estado` varchar(30) NOT NULL,
  `colaborador_asignado_id` int(11) NOT NULL,
  `colaborador_asignado` varchar(250) NOT NULL,
  `colaborador_asigna_id` int(11) NOT NULL,
  `colaborador_asigna` varchar(250) NOT NULL,
  `modifica_id` int(11) NOT NULL,
  `modifica` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_gestionmejora_notificacion`
--

INSERT INTO `web_gestionmejora_notificacion` (`id`, `serie`, `fecha_operacion`, `colaborador`, `titulo`, `noti_correo`, `area_id`, `area`, `noti_sistema_gestion_id`, `noti_sistema_gestion`, `noti_categoria_id`, `noti_categoria`, `noti_requisito_norma`, `noti_descripcion`, `noti_descripcion_final`, `noti_causa_raiz`, `efic_causa_raiz`, `efic_fecha`, `efic_estado`, `colaborador_asignado_id`, `colaborador_asignado`, `colaborador_asigna_id`, `colaborador_asigna`, `modifica_id`, `modifica`, `elim_log`) VALUES
(1, 2023, '2023-08-18', 'bernardette sencebe', 'Prueba', 'msencebe@towerandtower.com.pe', 1, 'SISTEMAS', 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 1, 'NO CONFORMIDAD', '', 'prueba', 'prueba', 'prueba', 'prueba', '0000-00-00', 'prueba', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 1, 'BORIS ALBERTO ESTRADA SANGAMA', 1),
(2, 2023, '2023-08-31', 'MARIA YSABEL', 'hallazgo en el software', 'proyectos@towerandtower.com.pe', 1, 'SISTEMAS', 1, 'SISTEMA DE GESTIÓN DE CALIDAD', 3, 'OPORTUNIDAD DE MEJORA', '', 'En el sistema de seguimiento de registros no se encuentra implementado la opción de reportes.', 'En el sistema de seguimiento de registros no se encuentra implementado la opción de reportes.', '¿?', '¿?', '0000-00-00', '¿?', 4, 'MARIA YSABEL CRUZ LLOCCLLA', 4, 'MARIA YSABEL CRUZ LLOCCLLA', 4, 'MARIA YSABEL CRUZ LLOCCLLA', 1),
(3, 2023, '2023-09-07', 'MARIA YSABEL', '2DA AUDITORIA INTERNA 2022', 'proyectos@towerandtower.com.pe', 7, 'PROYECTOS', 1, 'NO CONFORMIDAD', 1, 'NO CONFORMIDAD', '4.4', 'El procedimiento \"P-SIG-0056\" estable que, el Coordinador SIG actualiza la Lista Maestra con la modificaciónaprobada; asimismo, comunica y/o envía la Lista Maestra en formato no editable actualizada a todas las gerenciaspara su respectivo reemplazo. Sin embargo, en la revisión efectuada no se evidenció lo establecido en elprocedimiento.', '', '', '', '0000-00-00', 'EN PROCESO', 0, '', 0, '', 0, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_notificacion_archivo_asignado`
--

CREATE TABLE `web_notificacion_archivo_asignado` (
  `id` int(11) NOT NULL,
  `notificacion_id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_notificacion_archivo_notificador`
--

CREATE TABLE `web_notificacion_archivo_notificador` (
  `id` int(11) NOT NULL,
  `notificacion_id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_notificacion_archivo_notificador`
--

INSERT INTO `web_notificacion_archivo_notificador` (`id`, `notificacion_id`, `image`, `elim_log`) VALUES
(1, 1, '1692381401_61765f38f916be61a756.docx', 1),
(2, 2, '1693514765_c538b5b4ecb78c41e76f.jpeg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_notificacion_categoria`
--

CREATE TABLE `web_notificacion_categoria` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_notificacion_categoria`
--

INSERT INTO `web_notificacion_categoria` (`id`, `titulo`, `elim_log`) VALUES
(1, 'NO CONFORMIDAD', 1),
(2, 'OBSERVACIÓN', 1),
(3, 'OPORTUNIDAD DE MEJORA', 1),
(4, 'SERVICIO NO CONFORME', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_permisos`
--

CREATE TABLE `web_permisos` (
  `id` int(11) NOT NULL,
  `web_usuario_id` int(5) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `web_modulo_id` varchar(250) NOT NULL,
  `modulo` varchar(50) NOT NULL,
  `web_submodulo_id` int(5) NOT NULL,
  `submodulo` varchar(50) NOT NULL,
  `atributos` varchar(250) NOT NULL,
  `fecha_registro` int(11) NOT NULL,
  `fecha_modificacion` int(11) NOT NULL,
  `eliminacion_logica` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `web_permisos`
--

INSERT INTO `web_permisos` (`id`, `web_usuario_id`, `usuario`, `web_modulo_id`, `modulo`, `web_submodulo_id`, `submodulo`, `atributos`, `fecha_registro`, `fecha_modificacion`, `eliminacion_logica`) VALUES
(1, 1, 'BORIS ALBERTO ESTRADA SANGAMA', '1', 'GESTION DE MEJORAS', 1, 'Notification', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1),
(2, 1, 'BORIS ALBERTO ESTRADA SANGAMA', '1', 'GESTION DE MEJORAS', 2, 'Reportes', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1),
(3, 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', '1', 'GESTION DE MEJORAS', 1, 'Notification', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1),
(4, 3, 'BERNARDETTE MARIELLA SENCEBE BASTANTE DE GARCIA', '1', 'GESTION DE MEJORAS', 2, 'Reportes', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1),
(5, 4, 'MARIA YSABEL CRUZ LLOCCLLA', '1', 'GESTION DE MEJORAS', 1, 'Notification', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1),
(6, 4, 'MARIA YSABEL CRUZ LLOCCLLA', '1', 'GESTION DE MEJORAS', 2, 'Reportes', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]', 1614871359, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_permisos_acciones`
--

CREATE TABLE `web_permisos_acciones` (
  `id` int(11) NOT NULL,
  `accion` varchar(500) NOT NULL,
  `eliminacion_logica` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `web_permisos_acciones`
--

INSERT INTO `web_permisos_acciones` (`id`, `accion`, `eliminacion_logica`) VALUES
(1, 'Agregar', 1),
(2, 'Listar', 1),
(3, 'Salida', 1),
(4, 'Editar', 1),
(5, 'Observar', 1),
(6, 'Permitir', 1),
(7, 'Denegar', 1),
(8, 'Anular', 1),
(9, 'Aprobar', 1),
(10, 'Remover', 1),
(11, 'Eliminar', 1),
(12, 'Imprimir', 1),
(13, 'Exportar', 1),
(14, 'Reporte', 1),
(15, 'Enviar', 1),
(16, 'Liberar', 1),
(17, 'Importar', 1),
(18, 'Adjuntar', 1),
(19, 'Cierre', 1),
(20, 'Recalculo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_permisos_modulos`
--

CREATE TABLE `web_permisos_modulos` (
  `id` int(11) NOT NULL,
  `inicial` varchar(2) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `icono` varchar(100) NOT NULL,
  `fecha_registro` int(11) NOT NULL,
  `fecha_modificacion` int(11) NOT NULL,
  `eliminacion_logica` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `web_permisos_modulos`
--

INSERT INTO `web_permisos_modulos` (`id`, `inicial`, `titulo`, `icono`, `fecha_registro`, `fecha_modificacion`, `eliminacion_logica`) VALUES
(1, 'GM', 'Gestion de Mejoras', '<i class=\"fal fa-chart-line\"></i>', 1613497274, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_permisos_submodulos`
--

CREATE TABLE `web_permisos_submodulos` (
  `id` int(11) NOT NULL,
  `web_modulo_id` varchar(250) NOT NULL,
  `submodulo` varchar(250) NOT NULL,
  `slug` varchar(250) NOT NULL,
  `icono` varchar(200) NOT NULL,
  `fecha_registro` int(11) NOT NULL,
  `fecha_modificacion` int(11) NOT NULL,
  `eliminacion_logica` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `web_permisos_submodulos`
--

INSERT INTO `web_permisos_submodulos` (`id`, `web_modulo_id`, `submodulo`, `slug`, `icono`, `fecha_registro`, `fecha_modificacion`, `eliminacion_logica`) VALUES
(1, '1', 'Notificacion', 'gestionmejora/notification', '<i class=\"fad fa-truck\"></i>', 1614870954, 0, 1),
(2, '1', 'Reportes', 'gestionmejora/reportes', '<i class=\"fad fa-truck\"></i>', 1614870954, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `web_sistema_gestion`
--

CREATE TABLE `web_sistema_gestion` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `elim_log` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `web_sistema_gestion`
--

INSERT INTO `web_sistema_gestion` (`id`, `titulo`, `elim_log`) VALUES
(1, 'SISTEMA DE GESTIÓN DE CALIDAD', 1),
(2, 'SISTEMA DE GESTIÓN DE SST', 1),
(3, 'SISTEMA DE GESTIÓN AMBIENTAL', 1),
(4, 'SISTEMA INTEGRADO DE GESTIÓN', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id_group`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_notificacion`
--
ALTER TABLE `tipo_notificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_notificacion_categoria`
--
ALTER TABLE `tipo_notificacion_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `web_area`
--
ALTER TABLE `web_area`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_empresas`
--
ALTER TABLE `web_empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_gestionmejora_accion`
--
ALTER TABLE `web_gestionmejora_accion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_gestionmejora_notificacion`
--
ALTER TABLE `web_gestionmejora_notificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_notificacion_archivo_asignado`
--
ALTER TABLE `web_notificacion_archivo_asignado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_notificacion_archivo_notificador`
--
ALTER TABLE `web_notificacion_archivo_notificador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_notificacion_categoria`
--
ALTER TABLE `web_notificacion_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_permisos`
--
ALTER TABLE `web_permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_permisos_acciones`
--
ALTER TABLE `web_permisos_acciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_permisos_modulos`
--
ALTER TABLE `web_permisos_modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_permisos_submodulos`
--
ALTER TABLE `web_permisos_submodulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `web_sistema_gestion`
--
ALTER TABLE `web_sistema_gestion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `id_group` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_notificacion`
--
ALTER TABLE `tipo_notificacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_notificacion_categoria`
--
ALTER TABLE `tipo_notificacion_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `web_area`
--
ALTER TABLE `web_area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `web_empresas`
--
ALTER TABLE `web_empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `web_gestionmejora_accion`
--
ALTER TABLE `web_gestionmejora_accion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `web_gestionmejora_notificacion`
--
ALTER TABLE `web_gestionmejora_notificacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `web_notificacion_archivo_asignado`
--
ALTER TABLE `web_notificacion_archivo_asignado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `web_notificacion_archivo_notificador`
--
ALTER TABLE `web_notificacion_archivo_notificador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `web_notificacion_categoria`
--
ALTER TABLE `web_notificacion_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `web_permisos`
--
ALTER TABLE `web_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `web_permisos_acciones`
--
ALTER TABLE `web_permisos_acciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `web_permisos_modulos`
--
ALTER TABLE `web_permisos_modulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `web_permisos_submodulos`
--
ALTER TABLE `web_permisos_submodulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `web_sistema_gestion`
--
ALTER TABLE `web_sistema_gestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
