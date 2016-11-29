# Actualizando el sistema
sudo apt-get update && sudo apt-get upgrade

# Instalando git
sudo apt-get install git

# Instalando nodejs
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalando paquetes esenciales para compilar ciertos paquetes NPM
sudo apt-get install -y build-essential

# Instalando express-generator
sudo npm install express-generator bower -g
# instalando bower
sudo npm install -g bower
# Instalando postgreqsl
sudo apt-get install postgresql postgresql-contrib -y

# Copiando el archivo de configuración para que no de problemas
# con al tratar de conectarse desde afuera del usuario psql.
sudo cp /vagrant/config/pg_hba.conf /etc/postgresql/9.3/main/pg_hba.conf
sudo /etc/init.d/postgresql restart
sudo apt-get install nodejs
 npm install -g sequelize-cli --save



# Creando base de datos
psql -U postgres -c "CREATE USER express WITH ENCRYPTED PASSWORD 'password';"
psql -U postgres -c "CREATE DATABASE presupuesoft;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE presupuesoft TO express;"