# disruptiveLogic

wilmerzom es un idioma inventado para el Curso de Fundamentos de javascript
dictado en Platzi.

## descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install wilmerzom
```

## Uso

```
import wilmerzom from 'wilmerzom'

wilmerzom("Programar") // Program
wilmerzom("Zorro") // Zorrope
wilmerzom("Zarpar") // Zarppe
wilmerzom("abecedario") // abece-dario
wilmerzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Wilmer Moina](https://wilmermoina.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
