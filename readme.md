### Hello GraphQL
To query

``` 
$ curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' http://localhost:3000/graphql
{
  "data": {
    "count": 0
  }
}
```

To mutate object

```
$ curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' http://localhost:3000/graphql

```
