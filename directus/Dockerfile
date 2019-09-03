FROM php:7.0-apache
COPY . /var/www/html

ENV DB=directus
ENV DB_USER=root
ENV DB_PASSWORD=123
ENV DB_HOST=192.168.120.25
ENV DB_PORT=3306
ENV ADMIN_EMAIL=admin@example.com
ENV ADMIN_PASS=password

RUN sed -i 's|/var/www/html|/var/www/html/public|' /etc/apache2/sites-available/000-default.conf
RUN chmod -R 777 /var/www/html/logs/
RUN chown -R www-data:www-data /var/www/html/logs/
RUN chown -R www-data:www-data /var/www/html/public/uploads

RUN a2enmod rewrite

RUN docker-php-ext-install pdo_mysql

RUN /var/www/html/bin/directus install:config -n $DB -u $DB_USER -p $DB_PASSWORD -h $DB_HOST -P $DB_PORT -e $ADMIN_EMAIL
RUN /var/www/html/bin/directus install:database
RUN /var/www/html/bin/directus install:install -e $ADMIN_EMAIL -p $ADMIN_PASS

EXPOSE 80
