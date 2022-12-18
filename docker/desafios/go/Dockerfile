FROM golang AS builder

RUN mkdir app

WORKDIR /app

COPY main.go .

RUN go build -ldflags "-w" main.go

# -------------------- x --------------------

FROM scratch

COPY --from=builder /app .

ENTRYPOINT [ "./main" ]