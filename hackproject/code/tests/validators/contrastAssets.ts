export const validHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  section {
      background-color: #f7f7f7;
    }
    
    .poor-color {
      color: #000;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
    
    button {
      display: inline-block;
      padding: 1.25rem;
      font-size: 1rem;
      color: #4169e1;
    }  
  </style>    
</head>
<body>
  <section>
    <h1 class="poor-color">Test title</h1>
    <p class="poor-color">This is a test</p>
    <button>Click me!</button>
  </section>
</body>
</html>`

export const invalidHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  section {
      background-color: #f7f7f7;
    }
    
    .poor-color {
      color: #bdbdff;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
    
    button {
      display: inline-block;
      padding: 1.25rem;
      font-size: 1rem;
      color: #4169e1;
    }  
  </style>    
</head>
<body>
  <section>
    <h1 class="poor-color">Test title</h1>
    <p class="poor-color">This is a test</p>
    <button>Click me!</button>
  </section>
</body>
</html>`
