FROM php:8.0-cli

WORKDIR /var/www

RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

RUN php composer.phar create-project --prefer-dist laravel/laravel:^9.0 full-cycle

EXPOSE 8000

ENTRYPOINT [ "php", "full-cycle/artisan", "serve" ]
CMD [ "--host=0.0.0.0" ]

# docker run -d --rm --name laravel -p 8000:8000 rocheleedenis/laravel