const managerInfo = (managers) => {
  if (!managers) {
    return "";
  }

  const { managerName, managerEmail, managerId, managerOffice } = managers;

  return `
  <section class="card col-3 mb-2 m ms-2" style="width: 18rem;">
  <div class="">
        <div class="card-body">
        <div class=" about bg-primary text-white text-center">
        <h4 class="card-title">${managerName}</h4>
              <h5>Manager
              <span class="oi oi-laptop"></span>  
              </h5>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            Email: 
            <a href="mailto:${managerEmail}">${managerEmail}</a>
          </li>
            <li class="list-group-item">ID:${managerId}</li>
            <li class="list-group-item">Office:${managerOffice}</li>
        </ul>
        </div>
    </div>
  </section>
  `;
};

const engineerInfo = (engineers) => {
  if (engineers.length === 0) {
    return "";
  }
  // const { engineerName, engineerEmail, engineerId, engineerGitHub } = aboutEngineer;

  return `
  ${engineers.map(
    ({ engineerName, engineerEmail, engineerId, engineerGitHub }) => {
      return `
      <section class="card col-3 mb-2 m ms-2" style="width: 18rem;">
          <div class="">
            <div class="card-body">
            <div class=" about bg-primary text-white text-center">
            <h4 class="card-title">${engineerName}</h4>
            <h5>Engineer
            <span class="oi oi-monitor"></span>
            </h5>
          </div>           
             <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Email: 
                    <a href="mailto:${engineerEmail}">${engineerEmail}</a>
                  </li>
                <li class="list-group-item">ID:${engineerId}</li>
                <li class="list-group-item">
                GitHub: 
                <a href="https://github.com/${engineerGitHub}" target="_blank" >${engineerGitHub}</a>
              </li>
           </ul>
            </div>
          </div>
        </section>
      `;
    }
  )}
 `;
};

const internInfo = (aboutIntern) => {
  if (!aboutIntern){
    return ""
  }
  // const { internName, internEmail, internId, internSchool } = aboutInter;

  return `
  ${aboutIntern.map(
    ({internName, internEmail, internId, internSchool}) =>{
      return `
      <section class="card col-3 mb-2 m ms-2" style="width: 18rem;">
      <div class="">
          <div class="card-body">
          <div class=" about bg-primary text-white text-center">
          <h4 class="card-title">${internName}</h4>
            <h5>Intern
            <span class="oi oi-person"></span>
            </h5>
        </div> 
          <ul class="list-group list-group-flush">
              <li class="list-group-item">
              Email: 
              <a href="mailto:${internEmail}">${internEmail}</a>
            </li>
              <li class="list-group-item">ID:${internId}</li>
              <li class="list-group-item">School:${internSchool}</li>
          </ul>
          </div>
      </div>
    </section>
      `
    }
  )}
  `;
};

module.exports = generatePage = async (managers, engineers, interns) => {
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />

<link rel="stylesheet" href="./dist/style.css">
    <title>My Team Info</title>
</head>
<body>
    <header class="d-block p-2 bg-primary text-white text-center">
        <h1 class=" ">
            MY TEAM
        </h1>
    </header>
     <main class="container d-flex justify-content-center">
     <section class="row d-flex justify-content-center"> 
      ${managerInfo(managers)}
      ${engineerInfo(engineers)}
      ${internInfo(interns)} 
        </main>   
     </section>   
</body>
</html>
`;
};

{
  /* <section class="card row" style="width: 18rem;">
<div class="">
    <div class="card-body">
        <h4 class="card-title">${aboutManager}</h4>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Email:${aboutManager}</li>
        <li class="list-group-item">ID:${aboutManager}</li>
        <li class="list-group-item">Office:</li>
    </ul>
    </div>
</div>
</section> */
}
