## Sobre el Alcance del Proyecto.
* ¿Cuáles son las prioridades clave de las funcionalidades descritas?
	- _Registro y Login: Los donantes pueden crear una cuenta y acceder a la aplicación de manera segura._
		- _Sección para empresas._
		- _Sección para DI_
	- _Gestión de Datos Personales:_
		- _ACTUALIZAR NUMERO DE CONTACTO_
		- _CORREO ELECTRONICO_
		- _FOTO DE PERFIL_
	- _Gestión de Donaciones_
		- _Ver y Descargar Recibos Los donantes pueden acceder a sus recibos de donación y descargarlos en formato PDF._
		- _Modificar Montos de Donación: Flexibilidad para ajustar el monto de sus donaciones según sus preferencias._
		- _Cambiar Métodos de Pago: Posibilidad de actualizar la información de pago._
		- _Posibilidad de donación “adicional/esporádica/por campaña”_
	- _Información y Transparencia: _
		- _Programas: contenido multimedia sobre programas de Aldeas Infantiles._
		- _Noticias: Actualización semanal de acciones o información general_
		- _Sección crianza positiva_
		- _Sección anuario_
		- _LINKS A:  RRSS, WHATSAPPS, TIENDA VIRTUAL, SITIO WEB_
	- _Beneficios Amigo SOS: Descuentos de nuestros socios, Stickers Compartibles_
	- _Notificaciones generales: pop-up y push. Ej.: “tu donación este mes, cubrió 5 desayunos...”_
	- _Sistema de gamificación/puntos_

* ¿Hay algún "must-have" frente a un "nice-to-have"? 

	- _LOGIN DE USUARIO Y CONTRASENA_
		- _DONANTES INDIVIDUALES_
		- _EMPRESAS AMIGAS_
	- _DATOS PERSONALES_
	- _Gestión de Datos Personales:_
		- _ACTUALIZAR NUMERO DE CONTACTO_
		- _CORREO ELECTRONICO_
	- _GESTION DE DONACION:_
		- _DESCARGAR RECIBOS DE DONACION_
		- _AUMENTAR EL APORTE_
		- _CAMBIAR MEDIO DE PAGO_
		- _DONACION ESPORADICA_
	- _SECCION DE INFORMACION, NOTICIAS, FINANCIEMIENTO Y TRANSPARENCIA_

* ¿Qué tan alineada debe estar la estética de la aplicación con la página web actual? 
	- _Todos los diseños de AISOS deben respetar el manual de marca y las consideraciones de aplicación, indistintamente de quién lo ejecute._
* ¿Hay un manual de marca o pautas de diseño disponibles?  
	- _Sí. En caso de necesitar el mismo, y/o editables, logos, u otros elementos gráficos debemos enviarlos como archivos adjuntos. facilitarlos_
* ¿Existen otras funcionalidades o características que no se mencionaron pero que consideran importantes? 
	- _BOT_
	- _Mapa de AISOS GLOBAL_

## Sobre los Usuarios. 
* ¿Tienen identificados perfiles específicos de usuarios para la plataforma? La pregunta está orientada a la distinción entre distintos roles dentro de la plataforma. Las divisiones que tenemos son: donantes recurrentes, nuevos donantes, padrinos, quizás cuentas empresariales. 
	- _DONANTES INDIVIDUALES “soy amigo SOS/amiga SOS”_
	- _PADRINZAGO INDIVIDUAL “soy padrino/madrina”_
	- _EMPRESAS AMIGAS: Acceso para la empresa y colaboradores_
	- _ADMINISTRADORES DE AISOS_
* ¿Cuántos usuarios iniciales estiman que usarán la aplicación?
	- _1 a 5% DE LA BASE DE DONANTES ACTIVOS (48.000 + 50 empresas): 500 personas como mínimo._ 
* ¿Hay alguna necesidad especial de accesibilidad para la plataforma? 
	- _TELEFONO MOVIL_
* Además de las divisiones entre clientes, ¿Deben contar con roles administrativos de distinto tipo?
	- _Para la sección de empresas, deben tener un acceso como de “usuario A” y otro para “Usuario B”_ 
	- _ROL(ES) DE ADMINISTRADOR(ES) AISOS_  

## Sobre la Infraestructura Técnica. 
* ¿Qué tecnología y sistema de gestión están utilizando actualmente en su sitio web? (Ej.: CMS, frameworks).
	- _Kentico CMS utiliza la tecnología ASP.NET y Microsoft SQL Server_
	- _Desde <https://soscv.sharepoint.com/sites/WS_000002/Wiki/kentico.aspx> _
	- _Corre/Lenguaje sobre stack c# mvc net core y SQL_
* Cual es el stack de tecnologias que maneja el equipo local o que estaria dispuesto a manejar para el mantenimiento de esta pagina?
* ¿Cuentan con servidores propios o tienen preferencia por servicios en la nube para el hosting de la aplicación? 
	- **(Queda pendiente ver cómo hostean desde nuestra oficina regional quienes desarrollan y administran la página)**
	- **Usamos Azure (Cloud) y contamos con servidores propios (on premise) dentro de la ON (ON: Oficina Nacional Argentina)**
	- **pero lo ideal sería unirlo a la página oficial, y en caso de que no se pueda por directrices de (Oficina Regional o Internacional: OIR / OI) podríamos contar con eso.**
* Sobre el servicio de hosting, ¿que mecanismos de seguridad implementan para la comunicación con integraciones o entre servicios? 
    * De implementar algún mecanismo de seguridad, ¿que tipos de certificados utilizan?
* Sobre las APIs para integrarse, ¿tienen algun mecanismo de seguridad a tener en cuenta?
* ¿Existen restricciones o requisitos de seguridad específicos, especialmente para la gestión de pagos y datos personales? 
	- **A confirmar**

## Sobre las Donaciones. 
* ¿Qué plataformas de pago utilizan actualmente, y están abiertas a integraciones con nuevas plataformas? 
	- _PROVEEDOR DE COBRANZAS EXTERNO Y PAYWAY COMO PLATAFORMA DE PAGO_
	- _NO TENEMOS 100% DE LA PLATAFORMA INTEGRADADE COBRANZAS POR COSTOS_
	- _NO SOMOS PCI COMPLIENCE Y NOSOTROS NECESITAMOS TENER KIS DATOS DEL MEDIO DE PAGO (TARJETAS) - estamos bajo las normas de protección de datos de la UE_
	- _LOS CBU SE ENVIAN A COBRAR CON ICBC Y GALICIA_
* ¿Tienen algún sistema para emitir recibos de donación? 
	- _SALESFORCE_
	- _PUCARA_
	- _EN SALESFORCE ESTAN ALOJADOS UN ENLACE PARA DESCARGAR CADA RECIBO DEL DONANTE Eje:  https://mktfacturaelectronica.com/DescargaFactura.do?facturaId=11248797_
* ¿Hay algún recaudo a nivel contable que haya que tener? 
	- **A CONFIRMAR**

* Considerando que se puede descargar el certificado de donante, ¿Se puede hacer lo mismo con la donacion individual?   

## Sobre la Gestión del Contenido. 
* ¿Quién será responsable de mantener las secciones de noticias y programas? 
	- _Dirección de Comunicación, coordinadorxs y analistas._
* ¿Qué tan frecuente esperan actualizar esta información? 
	- _Diariamente_
	- _Semanalmente_
	- _Mensualmente_
	- _Bimensualmente_
	- _Trimestralmente_
	- _Semestralmente_
	- _Anualmente_
* ¿Cuentan con un sistema de gestión de datos para los donantes que pueda integrarse con la aplicación? 
	- _Sobre Métricas de Éxito_
* ¿Cómo medirán el éxito de esta plataforma?  
	- _En nuestra web contamos con Google Analitycs. (Si se desarrolla en ella)_
	- _Encuestas NPS_
	- _Existe algo en el back end para medición que no conozcamos?_
* ¿Hay alguna disponibilizacion de datos que deba tener la plataforma para esta medición
	- _EN CASO DE QUE SE SELECCIONES SERIAN PARA GOOGLE ANALITICS_
