<div align="center">

# Wiki Romântica

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-7952B3.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

Pequena wiki sobre as 3 gerações do romantismo em verso no Brasil feita com HTML, CSS e Bootstrap como trabalho para as disciplinas de _Técnicas de Desenvolvimento de Software I_ e _Língua Portuguesa e Literatura II_.

Acesse o site [aqui](https://davi-furtado.github.io/wiki-romantica)

## Desenvolvimento

Para preparar os arquivos fornecidos pelo Bootstrap e rodar localmente, abra o terminal e execute:

```bash
git clone https://github.com/davi-furtado/wiki-romantica.git
cd wiki-romantica
npm install
npm run prepare-assets
python -m http.server
```

Em seguida, abra o navegador e acesse `http://localhost:8000`.

O projeto é HTML puro: não depende de Vite durante o desenvolvimento ou o deploy. O Bootstrap é instalado pelo npm e copiado para `css/` e `js/`; o workflow do GitHub Pages publica os arquivos estáticos da raiz a cada push na branch `main`.

## Autores

- Davi Reis Furtado
- Arthur Figueiredo Mozella
- Nicolas Mangefeste Caldas

