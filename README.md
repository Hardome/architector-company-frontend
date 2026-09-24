# ELLORIA — frontend

Сайт посёлка ELLORIA на Next.js 16, React 19 и TypeScript. Здесь находятся главная страница с проектами и медиагалереей, форма заявки, страницы согласия и политики обработки данных. Изображения и видео лежат в `public/`.

## Быстрый запуск

Нужны Node.js 20 и pnpm 10.20.0. Версия pnpm указана в `package.json`; команды ниже выполняются из каталога `frontend/` и используют Corepack.

```sh
corepack pnpm install --frozen-lockfile
```

Создайте `.env.local`:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

Запустите backend с PostgreSQL, затем frontend:

```sh
corepack pnpm run dev
```

Сайт откроется на `http://localhost:3000`. Для запуска всего стека через Docker Compose используйте команды из [корневого README](../README.md).

## Как устроено приложение

| Путь | Назначение |
| --- | --- |
| `/` | Главная страница: посёлок, медиа и проекты домов |
| `/privacy` | Политика обработки персональных данных |
| `/consent` | Условия согласия на обработку данных |

Основные секции главной страницы расположены в `src/app/(main)/Sections/`. Компоненты формы, навигации и галереи находятся в `src/components/`. Форма отправляет `POST` на `${NEXT_PUBLIC_BACKEND_URL}/contacts`.

## Проверки и production-сборка

```sh
corepack pnpm run lint
corepack pnpm exec tsc --noEmit
```

Для production-сборки задайте `NEXT_PUBLIC_BACKEND_URL` как HTTPS-адрес API, например `https://api.elloria.ru`: `next.config.ts` проверяет это значение. Переменная `NEXT_PUBLIC_*` попадает в клиентский код во время сборки, поэтому при смене адреса API frontend нужно пересобрать.

В корневом `docker-compose.yml` адрес передаётся как аргумент сборки. На сервере обновляйте frontend через корневой репозиторий: он закрепляет конкретную ревизию этого субмодуля.
