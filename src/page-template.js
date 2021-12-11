
const managerInfo = (aboutManager) => {
  // if (!name,email){
  //   return ""
  // } 
  const {managerName, managerEmail, managerId, managerOffice}= aboutManager
  
  return `
    <section class="card row" style="width: 18rem;">
    <div class="">
        <div class="card-body">
        
            <h5 class="card-title">${managerName}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email:${managerEmail}</li>
            <li class="list-group-item">ID:${managerId}</li>
            <li class="list-group-item">Office:${managerOffice}</li>
        </ul>
        </div>
    </div>
  </section>
  `
}

const engineerInfo = (aboutEngineer) => {
  // if (!name,email){
  //   return ""
  // } 
  const {engineerName, engineerEmail, engineerId, engineerOffice}= aboutEngineer
  
  return `
    <section class="card row" style="width: 18rem;">
    <div class="">
        <div class="card-body">
        
            <h5 class="card-title">${engineerName}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email:${engineerEmail}</li>
            <li class="list-group-item">ID:${engineerId}</li>
            <li class="list-group-item">Office:${engineerOffice}</li>
        </ul>
        </div>
    </div>
  </section>
  `
}

  module.exports = generatePage = (answers)=>{
    // const {managerName, managerEmail} = answers
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../dist/style.css">
    <title>My Team Info</title>
</head>
<body>
    <header class="d-block p-2 bg-primary text-white text-center">
        <h1 class=" ">
            MY TEAM
        </h1>
    </header>
     <main class="container d-flex justify-content-center">
      ${managerInfo(answers)}
      ${engineerInfo(aboutEngineer)}
       
        </main>   
</body>
</html>
`
  }



{/* <section class="card row" style="width: 18rem;">
<div class="">
    <div class="card-body">
        <h5 class="card-title">${aboutManager}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Email:${aboutManager}</li>
        <li class="list-group-item">ID:${aboutManager}</li>
        <li class="list-group-item">Office:</li>
    </ul>
    </div>
</div>
</section> */}