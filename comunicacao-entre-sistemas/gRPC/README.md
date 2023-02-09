# Iniciando o projeto

Excute a imagem:

```bash
docker run -it --mount type=bind,source="$(pwd)"/,target=/app grpc_image bash
```

Iniciando o projeto

```bash
go mod init github/rocheleedenis/full-cycle-3.0
```

Baiando as dependências

```bash
go mod tidy
```

Gerando os arquivos da entidade category para falar com o gRPC e o arquivo com as interfaces que fazem a conversão para Protocol Buffers.

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```
