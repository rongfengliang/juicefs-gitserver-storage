#  juicefs  s3 git repo 

## how to running 

* starting s3 service

```code
docker-compose up -d
```

* format juicefs

```code
juicefs format --storage minio \
    --bucket http://127.0.0.1:9000/jfs2 \
    --access-key minio \
    --secret-key minio123 \
    sqlite3://myjfs.db myjfs
```

* mount

```code
juicefs mount sqlite3://myjfs.db mydemoapp
```

* starting git service

```code
node app.js
```

* do some test

```code
git init 
touch demo.txt
git add .
git commit -m "demo"
git remote add http://localhost:7005/demo.git
git push -u origin master
```