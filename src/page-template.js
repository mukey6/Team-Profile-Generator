const generatePage = (data) => {
    const finalPage = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team info</title>
    </head>
  
    <body>
      <h1>${data.managerName}</h1>
      <h2><a href="https://github.com/">Github</a></h2>
      <h3></h3>
      <h4></h4>

    </body>
    </html>
    `;
    return finalPage
  };

  module.exports = generatePage;