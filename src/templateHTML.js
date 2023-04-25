const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');


const generateManager = managerTitle => {return managerTitle.map(manager => {
    return `<div class=  "col">)}
    <div class="card shadow-lg" style="width: 18rem;">
    <div class="card-body identity">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-title"> width="16" height="16"
                fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
             Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>`
}
).join('');
};

    const generateEngineer = engineerTitle => { return engineerTitle.map(engineer => {
        return `<div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h6 class="card-title"> width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                 Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`
    }).join('');
    };

    const generateIntern = internTitle => {return internTitle.map(intern => {
        return `<div clas="col">
        <div class="card shadow-lg" style="width: 18rem;">
        <h5> class="card-title">${engineer.getName()}</h5>
        <h6 class="card-title">width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
         Intern</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>`
    }
    ).join('');
};
const generateCards = teamArray => {
    let cardsArray = [];
    const managerTitle = teamArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerTitle = teamArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internTitle = teamArray.filter(team => {
        return team.getRole() === 'Intern';
    });
    if (managerTitle) {
        cardsArray.push(generateManager(managerTitle));
    } 
    if (engineerTitle) {
        cardsArray.push(generateEngineer(engineerTitle));
    } 
    if (internTitle) {
        cardsArray.push(generateIntern(internTitle));
    }
    return cardsArray.join('');
    };



    module.exports = cardsArray => {
        return ` 
        <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My Team</title>
          <link rel="stylesheet" type="text/css" href="style.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
              integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      </head>
      <body>
          <header>
              <h1>My Team</h1>
          </header>
          <main class="container my-5">
              <div class="row">
                  ${generateCards(cardsArray)}
              </div>
          </main>
      </body>
      </html>
          `;
        };