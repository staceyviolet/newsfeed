# Новостная лента

### Начало работы

Сперва запустите:
```sh
yarn install 
```

* Потом
```sh
yarn start
```

##  Пользование приложением

Домашняя страницв показывает приветствие, обращасясь к пользователю в зависимости от его роли: 
"Гость", если это гость и по имени пользователя, если это залогиненный пользователь

### Данные для входа

Пользователь:
```sh
login: test@test.com
password: 123456
```
Администратор:
```sh
login: admin@test.com
password: 123456
```

Пользователь может создавать посты

Администратор может одобрять или удалять посты

Гость видит только одобренные посты в ленте

## ВАЖНО

Бэкенд эмулируется хранением в local storage. 
Пожалуйста, очистите его вручную при окончании работы с приложением
_______________________________________________

# Newsfeed

## Getting Started

### Prerequisites

First run:
```sh
yarn install
```
The installation process could take some time, don't be afraid, it is normal

* To start run
```sh
yarn start
```

## Usage

Home page should show greeting message addressing to: guest for guest and login for admin and user

### Login credentials

Regular user: 
```sh
login: test@test.com
password: 123456
```
Admin user:
```sh
login: admin@test.com
password: 123456
```

Regular user should be able to create posts

Admin should be able to approve and delete posts

Guest user should see only approved posts in his feed

## IMPORTANT

Backend is being emulated by storing data in local storage.
Please clear local storage manually after tou finish working with the app