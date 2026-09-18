# control de gastos

## Fase 1: Crear la Estructura HTML Básica

```
 html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control de gastos</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <main>
        <h1>Control de Gastos</h1>
        <section>
            <h2>Registrar Gatos</h2>
            <form id="form-gasto">
                
                <label for="description">description</label>
                <input type="text" id="description" name="description" required>
                
                <label for="cantidad">Cantidad</label>
                <input type="number" id="cantidad" name="cantidad" required>

                <label for="categoria">Categoría</label>
                <select name="categoria" id="categoria" required>
                    <option value="">Selecciona una categoria</option>
                    <option value="Alimentacion">Alimentacion</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Otros">Otros</option>
                </select>

                <label for="Fecha">Fecha</label>
                <input type="date" name="Fecha" id="Fecha" required>

                <button type="submit">agregar gastos</button>

                <section>
                    <h2>Gastos Registrados</h2>
                    <ul id="lista-gastos"></ul>
                    <p>
                        Total: <strong id="total-gastos">$0.00</strong>
                    </p>
                </section>
            </form>
        </section>
    </main>
    <script src="js/app.js"></script>    
</body>
</html>
```

### Puntos importantes

`UTF-8` permite caracteres como:
```text
á é í ó ú ñ
```

el `viewport` permite que el CSS responsivo se adapte correctamente

## Fase 1: Aplicar estilos base

``` 
css
* {
    box-sizing: border-box;
}

body {
    margin: 0%;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f4f4;
    color: #222;
}

main {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;

}

h1,
h2 {
    margin-top: 0;

}

section {
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
}

label {
    display: block;
    margin-top: 10px;
}

input,
select,
button {
    width: 100%;
    padding: 10px;
    font: inherit;
}

button {
    margin-top: 15px;
    cursor: pointer;

}

ul {
    margin-top: 10px;
}

li {
    margin-bottom: 10px;
}

#total-gastos {
    font-size: 1.2rem;
}

@media (max-width: 480px) {

    body {
        padding: 10px;
    }

    main {
        width: 100%;
    }

    section {
        padding: 15px
    }
}
```
### Puntos importantes

``` css
box-sizing: border-box;
```
hace que `width` incluya `padding` y border dentro del tamaño total del elemento

``` css
width: 90%
max-width: 700px
```

permite un ancho flexible sin crecer indefinidamente en pantallas grandes

### CSS Responsive

``` css
@media (max-width: 480px) {

    body {
        padding: 10px;
    }

    main {
        width: 100%;
    }

    section {
        padding: 15px
    }
}
```

### Puntos Importantes

cuando el `viewport` tenga `480 px` o menos, se aplican esos ajustes