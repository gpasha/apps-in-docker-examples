- create image

```bash
docker build -t docker-simple-nodejs-server .
```

- Run Docker-container
```bash
docker run -d -p 3010:3000 --name docker-simple-nodejs-container docker-simple-nodejs-server
```

```bash
docker run -d -p 3011:3000 --name docker-simple-nodejs-container-2 docker-simple-nodejs-server
```

- Stop Docker-container
```bash
docker stop docker-simple-nodejs-container-2
```

```bash
docker rm -f docker-simple-nodejs-container
```
