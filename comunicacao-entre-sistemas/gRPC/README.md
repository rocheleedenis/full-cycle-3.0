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
