FROM nginx:latest

# cria a pasta especificada e te joga la dentro quando o container sobe
WORKDIR /app

RUN apt-get update && \
# o -y é para responder sim automaticamente quando perguntar se deseja instalar
    apt-get install vim -y

COPY . /usr/share/nginx/html

EXPOSE 80

# O entrypoint é fixo e o CMD é substituível. Pode entrar como parâmetro para o entrypoint.
# docker run rocheleedenis/nginx-with-vim teste
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

# docker run -d --rm --name nginx -p 8000:80 rocheleedenis/nginx-with-vim