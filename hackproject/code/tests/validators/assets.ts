export const invalidHeadingHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      body {
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      header {
        background-color: #fff333;
        color: #fff;
        padding: 20px;
      }

      h1 {
        margin: 0;
        font-size: 36px;
        line-height: 1.6;
        letter-spacing: 0.13;
      }

      nav {
        display: flex;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
        padding: 10px;
      }

      nav a {
        text-decoration: none;
        color: #333;
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
      }

      nav a:hover {
        background-color: #ddd;
      }

      main {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .post {
        border: 1px solid #ddd;
        padding: 20px;
        margin-bottom: 20px;
      }

      .post h2 {
        margin: 0;
        font-size: 24px;
      }

      .post p {
        margin: 10px 0;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      .post .author {
        font-style: italic;
        margin-top: 10px;
      }

      .post .date {
        font-style: italic;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Blog</h1>
    </header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    <main>
      <div class="post">
        <h2>My First Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By John Doe</p>
        <p class="date">Posted on January 1, 2022</p>
      </div>
      <div class="post">
        <h2>My Second Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By Jane Smith</p>
        <p class="date">Posted on February 1, 2022</p>
      </div>
    </main>
  </body>
</html>;
`;

export const invalidParagraphHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      body {
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      header {
        background-color: #fff333;
        color: #fff;
        padding: 20px;
      }

      h1 {
        margin: 0;
        font-size: 36px;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      nav {
        display: flex;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
        padding: 10px;
      }

      nav a {
        text-decoration: none;
        color: #333;
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
      }

      nav a:hover {
        background-color: #ddd;
      }

      main {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .post {
        border: 1px solid #ddd;
        padding: 20px;
        margin-bottom: 20px;
      }

      .post h2 {
        margin: 0;
        font-size: 24px;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      .post p {
        margin: 10px 0;
        line-height: 1.5;
      }

      .post .author {
        font-style: italic;
        margin-top: 10px;
      }

      .post .date {
        font-style: italic;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Blog</h1>
    </header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    <main>
      <div class="post">
        <h2>My First Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By John Doe</p>
        <p class="date">Posted on January 1, 2022</p>
      </div>
      <div class="post">
        <h2>My Second Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By Jane Smith</p>
        <p class="date">Posted on February 1, 2022</p>
      </div>
    </main>
  </body>
</html>;
`;

export const validHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      body {
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      header {
        background-color: #fff333;
        color: #fff;
        padding: 20px;
      }

      h1 {
        margin: 0;
        font-size: 36px;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      nav {
        display: flex;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
        padding: 10px;
      }

      nav a {
        text-decoration: none;
        color: #333;
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
      }

      nav a:hover {
        background-color: #ddd;
      }

      main {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .post {
        border: 1px solid #ddd;
        padding: 20px;
        margin-bottom: 20px;
      }

      .post h2 {
        margin: 0;
        font-size: 24px;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      .post p {
        margin: 10px 0;
        line-height: 1.5;
        line-height: 1.5;
        letter-spacing: 0.12;
      }

      .post .author {
        font-style: italic;
        margin-top: 10px;
      }

      .post .date {
        font-style: italic;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Blog</h1>
    </header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    <main>
      <div class="post">
        <h2>My First Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By John Doe</p>
        <p class="date">Posted on January 1, 2022</p>
      </div>
      <div class="post">
        <h2>My Second Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui ultricies, congue nisl id, iaculis massa. Fusce viverra nibh sapien, vel porttitor lectus aliquam eu.</p>
        <p class="author">By Jane Smith</p>
        <p class="date">Posted on February 1, 2022</p>
      </div>
    </main>
  </body>
</html>;
`

export const css = `
@media (max-width: 767px) {
    nav {
      flex-direction: column;
    }
  
    nav a {
      margin-right: 0;
      margin-bottom: 10px;
      display: block;
    }
}
`;