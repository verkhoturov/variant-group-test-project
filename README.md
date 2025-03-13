# Variant group test project

## Стэк

Для создания проекта использовались:

[Nextjs](https://nextjs.org/docs)

[Chakra UI](https://chakra-ui.com/docs/get-started/installation)

[React Hook Form](https://react-hook-form.com/get-started)

[Tanstack Query](https://tanstack.com/query/latest)

[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

[React Toastify](https://fkhadra.github.io/react-toastify/category/getting-started)

[FSD](https://feature-sliced.design/docs)

Демо можно посмотреть [здесь](https://variant-group-test-project.vercel.app/)

## Немного про мотивацию использовать указанный стэк и подробности реализации

- **Nextjs** (pages route) - используется для [проксирования запросов к OpenAI API](https://github.com/verkhoturov/variant-group-test-project/blob/main/src/pages/api/openai.ts), так как использовать API key на клиенте небезопасно. Заводить отдельный проект с бэкенд сервисом всего для одной ручки API мне показалось лишним, проще было взять фуллстек фреймворк типа Nextjs.
- **Chakra UI** - взят чтобы не городить велосипеды из базовых компонентов. В библиотеке есть все нужные элементы, легко стилизуются через [конфигурацию](https://github.com/verkhoturov/variant-group-test-project/blob/main/src/shared/ui/theme.ts) библиотеки и через параметры самих компонентов.
- **Zustand** - минималистичный store, из коробки (в одну строку кода) работает сохранение текущих данных в локальное хранилище. Вместо Zustand можно было организовать управление данными через React Context, но в данном случае было бы просто больше кода, плюс велосипед для работы с локальным хранилищем.
- **React Toastify** - для отображения всплывающих уведомлений с ошибками, если по какой-то причине не работает подключение к OpenAI API (протух ключ, недоступен сам сервис). В макетах не было состояний ошибок, поэтому проще всего их было показывать через всплывашки.
- **Tanstack Query** - для управления состоянием запросов к API. Конечно, можно было бы написать свое решение в виде отдельного хука с useState'ами для хранения состояний запросов к API, но расширять и поддерживать такие кастомные решения становится сложно по мере роста проекта. Tanstack Query уже закрывает большенство задач, плюс у библиотеки очень хорошая документация.
- **FSD** - для организации файловой структуры. В данном конкретном случае, FSD используется с двумя оговорками:
  1) Cтруктура FSD конфликтует со структурой Nextjs на уровне каталога pages (Nextjs хранит в pages роуты, а FSD компоненты для страниц), чтобы решить конфликт, по [рекомендации из документации](https://feature-sliced.design/docs/guides/tech/with-nextjs#renaming-the-pages-layer-within-the-fsd-structure) FSD pages был переименован во views.
  2) Не был реализован слой Features, фактически все фичи находятся в рамках Widgets
