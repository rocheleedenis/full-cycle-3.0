FROM node:16

WORKDIR /usr/src/app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

EXPOSE 3000

# CMD ["node", "index.js"]

# docker run --rm -d --name projetinho -p 3000:3000 rocheleedenis/projetinho-node