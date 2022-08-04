# Introducció general.

## Important.

Per poder testejar l'aplicació, és necessari crear un usuari, ja que, les contrasenyes dels usuaris generats de prova es troben encriptades en la base de dades. Per testejar els usuaris de prova, és necessari actualitzar la contrasenya, d'aquesta manera, amb la contrasenya i el seu correu, ja podrem accedir amb aquest usuari.

## Passos per preparar l'entorn.

1. Descarregar Laragon. Laragon és un és una suit de desenvolupament que ens permet tenir entorns, entre ells, un projecte amb Laravel.
2. De manera predeterminada Laragon disposa de PHP 7. Per poder tindre un projecte amb l'última versió de Laravel, és a dir, Laravel 9, és necessari tindre PHP 8 habilitat. Per poder tindre PHP 8 disponible hem de descarregar-ho de:
- https://www.php.net/downloads.php
3. Descomprimim i copiem la carpeta descomprimida a **laragon\bin\php**. D'aquesta manera, ja podem crear projectes amb Laravel 9.
4. Canviem la versió de PHP:

![image](https://user-images.githubusercontent.com/104025496/182156736-32e1ca15-4ab4-4a96-8484-3f6c7036852d.png)

## Passos per descarregar el projecte i configurar l'API.

1. Dins de la ruta **C:\Laragon\www** executem la comanda **git clone https://github.com/martipuigmartin/users-CRUD.git**.
2. Des de Laragon, obrim un terminal i entrem a la carpeta **users-CRUD**. Entrem a la carpeta api i executem la comanda **composer install**. Aquesta comanda instal·la els paquets necessaris.
3. Renombren l'arxiu **.envexample** a **.env** i modifiquem les dades de la base de dades.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=users_db
DB_USERNAME=root
DB_PASSWORD=
```
4. Executem la comanda **php artisan key:generate**.
5. Si no es troba creada, crearem la base de dades users_db
6. Executem la comanda **php artisan migrate:fresh --seed**. Aquesta comanda crearà l'estructura de la base de dades i l'inicialitzarà amb dades.
7. Executarem la comanda **php artisan test tests\Unit\UserTest.php**. Aquesta comanda executarà els tests de l'API.
8. Executem la comanda **php artisan serve**. Aquesta comanda executarà l'API en mode de desenvolupament.
9. L'API ja està disponible a la ruta **http://localhost:8000**.

## Passos per configurar el client.

1. Dins de la ruta **C:\Laragon\www\users-CRUD\client** executem la comanda **npm install**.
2. Executem la comanda **npm run start**. Aquesta comanda executarà el client en mode de desenvolupament.
3. El client ja està disponible a la ruta **http://localhost:3000**.

## Possibles errors

1. Si dona un error **d'unknown database**, comprovar que la base de dades del .env sigui correcta. Si continua fallant, executa la comanda **php artisan config:clear**. Si això no funciona, borra l'arxiu **bootstrap\cache\config.php**.
2. Si tenim el següent error:
```El término 'npm' no se reconoce como nombre de un cmdlet, función, archivo de script o programa ejecutable. Compruebe si escribió 
correctamente el nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e inténtelo de nuevo.
En línea: 1 Carácter: 1
```
Hem d'instal·lar NODE.js, ja que fem servir el gestor NPM per instal·lar les dependències necessàries al client.

