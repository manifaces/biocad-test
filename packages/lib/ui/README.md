# @biocad-test/ui

UI-библиотека компонентов, используемых в сервисах.

## Логика

В качестве основы используется [Radix UI](https://www.radix-ui.com/themes/docs/overview/getting-started).

Библиотека содержит следующие части:

1. ThemeProvider - задает список тем, доступных веб-приложению.
2. Папка styles - общие для всех тем стили, тут используются css vars из Radix, к которым обращаются все компоненты.
3. components / features - компоненты, используют в качестве примитивов компоненты из Radix.
