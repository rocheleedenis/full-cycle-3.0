# Iniciando o projeto

```bash
docker-compose up -d
```

Crie o banco de dados. Para isso abra um novo terminal para o container:

```bash
docker exec -it grpc_go bash

sqlite3 db.sqlite
create table categories (id string, name string, description string);
```

Inicie o Evans.

```bash
evans -r repl
```

Toda vez que o arquivo course_category é alterado precisamos rodar o comando abaixo para regerar os arquivos de comunicação.

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```
