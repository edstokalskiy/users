# users

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```


### страница 1 

 - Тут получаю всех юзеров. Разбиваю их на страницы (пагинация).
 - Форма добавления нового юзера(валидация полей, нотификейшены), он сразу появляется в конце массива.

### страница 2

- страница самого юзера с инфой (беру инфу отталкиваясь от параметра в роуте, работает при перезагрузке стр.)
- редактирование базовых полей юзера с сохранением в стор.
