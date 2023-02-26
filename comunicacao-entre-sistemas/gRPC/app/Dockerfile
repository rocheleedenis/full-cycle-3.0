FROM golang

WORKDIR /app

RUN apt-get update && apt-get install -y protobuf-compiler

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28 && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

RUN go install github.com/ktr0731/evans@latest

RUN apt-get install -y sqlite3 libsqlite3-dev