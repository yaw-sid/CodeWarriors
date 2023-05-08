export const validHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <section>
    <img src="/path/to/img" alt="Profile picture" />
    <img src="/path/to/img2" alt="Second image" />
  </section>
</body>
</html>
`;

export const noImgAltHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <section>
    <img src="/path/to/img" alt="Profile picture" />
    <img src="/path/to/img2" />
  </section>
</body>
</html>
`;