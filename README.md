# frontReact
Practica Grupo PacificTIC Univalle Tulua

CONFIGURACION DEL VISTUAL HOST CON APACHE

<VirtualHost *:80>
	ServerName Rick
	DocumentRoot "c:/wamp/www/buildrick"
	<Directory  "c:/wamp/www/buildrick/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>

