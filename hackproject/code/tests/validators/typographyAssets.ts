export const noLineHeightHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      letter-spacing: 0.12;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;

export const invalidLineHeightHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      line-height: 1;
      letter-spacing: 0.12;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;

export const noLetterSpacingHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      line-height: 1.5;
      letter-spacing: 0.15;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;

export const invalidLetterSpacingHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      line-height: 1.5;
      letter-spacing: 0.1;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;

export const validLetterSpacingInPxHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      line-height: 1.5;
      font-size: 1rem;
      letter-spacing: 2px;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;

export const validHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1, p {
      line-height: 1.5;
      letter-spacing: 0.12;
    }
    h1 {
      font-size: 24px;
    }
  </style>
</head>
<body>
  <section>
    <h1>Test title</h1>
    <p>This is a test</p>
  </section>
</body>
</html>
`;