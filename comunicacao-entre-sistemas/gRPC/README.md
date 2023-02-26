# Iniciando o projeto

Excute a imagem:

```bash
docker build -t grpc_image . --no-cache
```

```bash
docker run -it --rm --name grpc_container --mount type=bind,source="$(pwd)"/,target=/app grpc_image bash
```

Inicie o serviço Go

```bash
go run cmd/grpcServer/main.go
```

Crie o banco de dados. Para isso abra um novo terminal para o container:

```bash
docker exec -it grpc_container bash

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