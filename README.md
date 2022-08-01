# Introducció general.

## Descripció del projecte.

El projecte tracta sobre la creació d'un CRUD d'usuaris amb un sistema d'inici de sessió. L'aplicació està creada amb React i una API basada en Laravel, juntament amb una base de dades SQL.

### Passos per crear l'API.

1. Descarregar Laragon. Laragon és un és una suit de desenvolupament que ens permet tenir entorns, entre ells, un projecte amb Laravel.
2. De manera predeterminada Laragon disposa de PHP 7. Per poder tindre un projecte amb l'última versió de Laravel, és a dir, Laravel 9, és necessari tindre PHP 8 habilitat. Per poder tindre PHP 8 disponible hem de descarregar-ho de:
- https://www.php.net/downloads.php
3. Descomprimim i copiem la carpeta descomprimida a **laragon\bin\php**. D'aquesta manera, ja podem crear projectes amb Laravel 9.
4. Ara, dins de Laragon, ja ens és possible crear un projecte amb PHP 8.

![image](https://user-images.githubusercontent.com/104025496/182156736-32e1ca15-4ab4-4a96-8484-3f6c7036852d.png)

5. Utilitzarem la comanda ```Laravel new api``` dintre de la ruta del nostre projecte per crear l'API. En el cas que no reconegui el comando 'Laravel', haurem de fer servir la instrucció: 

```composer global require laravel/installer```

6. Podem comprovar que hem creat l'API amb Laravel 9. 

![image](https://user-images.githubusercontent.com/104025496/182186528-5bc56a7a-841f-4a62-bf3f-98ded84a907f.png)

### Passos per crear la base de dades.

1. Modificarem les següents dades de l'arxiu .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=users_db
DB_USERNAME=root
DB_PASSWORD=
```

2. Dintre de Laragon, cliquem a Database i entrem al gestor de base de dades. 

3. Creem una base de dades amb el mateix nom de l'arxiu .env. 
