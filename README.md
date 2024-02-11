# TreeView

## Как запустить приложение

1) установите зависимости: `npm install`
2) переименуйте файл `.env.example` на `.env`
3) если у вас есть свой API по получение `services`, замените в `.env` строку
   `VITE_API_BASE_URL=ваша_адрес_сервера/services` и удалите файл `server.json`
4) **запустите** фейковый **backend**, если нет своего api: `npm run backend`
5) **запустите frontend**: `npm run frontend`

## Описание состава данных:

```
{
  "services": [
    {
      "id": int,
      "head": int,
      "name": str,
      "node": int,
      "price": float,
      "sorthead": int
    }
  ]
}
```

**head** = id вышележащего узла (null означает, что услуга находится в корневом узле)   
**node** = флаг “узел дерева” (1-узел, 0-лист)
