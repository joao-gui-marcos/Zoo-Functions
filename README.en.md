# Welcome to the Zoo Functions project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   Knowing my skills with`ES6`,`Higher Order Functions`and tests, the city hall gave me an important mission: to organize the zoo's information! 🐘

    I was responsible for developing functions that seek information about zoo animals such as: species and place of origin. In addition, I also looked for data on the people who collaborate with the maintenance and care of the zoo. 🧑‍🌾

    It does not stop there! 🤩

    We know the importance of having a test-oriented mindset, as well as how testing implementation contributes to writing more reliable and performing code.

    The sequence of requirements for this project has been arranged in such a way as to provide the experience of understanding in practice how test-driven development helps ensure quality code. For this, I implemented tests for existing functions, realizing the use cases of your application and ensuring that it is working correctly! 🚀

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

In the root folder of the project, we have the folders`src`,`test`,`evaluator`e`data`.

to paste`src`consists of files referring to each of the implemented functions, the folder`data`contains the file`zoo_data.js`, which stores the data used to return information about the zoo.

This project also has some requirements for the implementation of tests. The folder`test`, contains the files in which the unit tests corresponding to each function were implemented, the file name is the name of the target function plus the suffix`.test.js`.

**For example:**the file`src/getOpeningHours.js`will contain the implementation of the function`getOpeningHours`and the file`test/getOpeningHours.test.js`contains the tests I developed referring to it.

to paste`evaluator`has the automated tests that evaluate the project.

<details>
  <summary>
    O arquivo <code>zoo_data.js</code> contém um <strong>objeto</strong> no seguinte formato:
  </summary> <br />

```javascript
{
	species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        }
      ],
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    }
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
}
```

<details>
  <summary>
  O array <code>species</code> guarda as informações de cada espécie do zoológico
  </summary> <br />

| Key            | Description                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | is the species identifier                                                                                                                                                                                                                               |
| `name`         | is the species name, for example,`lions`                                                                                                                                                                                                                |
| `popularity`   | is the popularity of that species                                                                                                                                                                                                                       |
| `location`     | is the region where the animal species came from, it can have the following values:<br>-`NE`: North East;<br>-`NW`: northwest;<br>-`SE`: southeast;<br>-`SW`: southwest.                                                                                |
| `availability` | is the availability of visitation of animals of this species                                                                                                                                                                                            |
| `residents`    | are the information of the animals of that species that reside in the zoo, where:<br>-`name`: is the name of the animal, for example`'Zena'`;<br>-`sex`: is the sex of the animal, for example:`'female'`(female);<br>-`age`: is the age of the animal. |

</details>

<details>
  <summary>
  O array <code>employees</code> é onde ficam as informações de cada pessoa colaboradora
  </summary> <br />

| Key              | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| `id`             | is the identifier of that person                           |
| `firstName`      | is that person's first name                                |
| `lastName`       | is that person's last name                                 |
| `managers`       | they are the`ids`of that person's leadership               |
| `responsibleFor` | they are the`ids`of the species that person is responsible |

</details>

<details>
  <summary>
  O objeto <code>hours</code> guarda as informações sobre o horários de funcionamento do zoológico
  </summary> <br />

| Key                                                                                      | Description                                                                                                         |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `Tuesday`<br>`Wednesday`<br>`Thursday`<br>`Friday`<br>`Saturday`<br>`Sunday`<br>`Monday` | are the days of the week:<br>-`open`: is the time that the zoo opens;<br>-`close`: is the time that the zoo closes. |

</details>

<details>
  <summary>
    O objeto <code>prices</code> é responsável por guardar as informações sobre o valor da entrada do zoológico
  </summary> <br />

| Key      | Description               |
| -------- | ------------------------- |
| `adult`  | is the price for adults   |
| `senior` | is the price for seniors  |
| `child`  | is the price for children |

</details>

</details>

<br />
	
</details>

* * *

# Mandatory Requirements

## 1. Implement the function`getSpeciesByIds`

<details>
  <summary>
  Busque as espécies dos animais por meio de um <code>id</code> e retorne um array contendo todos os animais dessa espécie.
  </summary> <br />

-   Make the function`getSpeciesByIds`can receive multiple parameters;

-   Return an empty array if the function does not receive a`id`;

-   Return the following file information`data`:

    -   If the function receives only one`id`, return the species of the animal referring to this`id`;

    -   If the function receives multiple`ids`, return all species referring to these`ids`.

**What will be tested:**

-   If it receives no parameters, it is necessary to return an empty array;

-   When receiving as a parameter a single`id`, returns an array with the species referring to this`id`;

-   When receiving more than one`id`, returns an array with the species referring to the`ids`.

</details>

* * *

## 2. Implement the function`getAnimalsOlderThan`

<details>
  <summary>
  Ao receber uma espécie e uma idade como parâmetro, retorne se todos os animais dessa espécie possuem essa idade ou são mais velhos.
  </summary> <br />

-   Check that all animals of the species passed as a parameter have the minimum age:
    -   Animals must be this age or older.

-   Return a boolean value.

**What will be tested:**

-   By passing the name of a species and an age, it tests if all the animals of that species have the specified minimum age.

</details>

* * *

## 3. Implement the function`getEmployeeByName`

<details>
  <summary>
    Busque as pessoas colaboradoras pelo primeiro ou último nome delas
  </summary> <br />

-   Return an empty object if the function takes no parameters;

-   Return the information of the collaborating person if the parameter is the same as the name**or**equal to the last name in the following format:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```

**What will be tested:**

-   With no parameters, it should return an empty object;

-   When the first name of the collaborating person is informed, it must return the object of the collaborating person;

-   When the last name of the collaborating person is informed, the object of the collaborating person must be returned;

</details>

* * *

## 4. Implement the function`getRelatedEmployees`

<details>
  <summary>
    Verifique se uma pessoa colaboradora é gerente e quais pessoas ela lidera
  </summary> <br />

Considering the good practice of breaking the code into smaller parts, the file will have two functions:

1.  `isManager`who will be responsible for verifying that a collaborating person is a manager:
    -   return`true`in o`id`past for a manager person;
    -   return`false`in o`id`past is not of a manager person.

2.  `getRelatedEmployees`which returns people led by management:

        - Utilize a função `isManager` para verificar se a pessoa é gerente ou não e faça as seguintes verificações:

          - Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

          Exemplo de output:

          ```javascript

          [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];

          ```

          - Caso a pessoa não seja gerente, dispare um erro com a mensagem: **'O id inserido não é de uma pessoa colaboradora gerente!'**.

          Para lançar o erro, você vai utilizar a função construtora **Error** da biblioteca padrão do JavaScript.

          Exemplo:

          ```javascript

          throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');

          ```

          Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

    **What will be tested:**

-   Returns`true`in o`id`past for a manager person;

-   Returns`false`in o`id`past is not a manager person;

-   In o`id`passed for of the manager person, returns an array containing the first and last names of the collaborating people he is responsible for;

-   In o`id`past**no**for the manager person, it throws an error with the message:`'O id inserido não é de uma pessoa colaboradora gerente!'`.

</details>

* * *

## 5. Implement the function`countAnimals`

<details>
  <summary>
    Contabilize a quantidade de espécies de animais residentes no zoológico
  </summary> <br />

The function`countAnimals`is responsible for counting the amount and animals residing in the zoo.

-   Return the number of resident animals per species, if the function does not receive a parameter. The return must be an object whose name of each species is the key and the total number of animals (residents) of that species is the value. For example:

```javascript
  {
    lions: 4,
    // [...]
  }
```

-   Return the amount of animals resident in the zoo of the passed species by parameter. For example:

    -   when receiving the argument`{ specie: 'penguins' }`, returns only the amount (number) of penguins residing in the zoo;

    -   when passing the argument`{ specie: 'giraffes', sex: 'female' }`, returns only the amount (number) of female giraffes residing in the zoo.

**What will be tested:**

-   Without parameters, returns all species and the number of residents of each one;

-   Receiving as a parameter an object with the key`specie`, returns the number of animals of that species;

-   Receiving as a parameter an object with the key`specie`e`sex`, returns the number of animals of that species, in the selected sex.

</details>

* * *

## 6. Get at least 80% test coverage in the role`handlerElephants`

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 80% de cobertura
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| `count`        | return the number of elephants                                                          |
| `names`        | returns an array listing the names of all elephants                                     |
| `averageAge`   | returns the average age of elephants                                                    |
| `location`     | returns the location of the elephants inside the Zoo                                    |
| `popularity`   | elephants popularity returns                                                            |
| `availability` | returns an array with the number of days in which it is possible to visit the elephants |

> **Keeping an eye on the tip 👀:**Before you start writing the tests, read the function`handlerElephants`and try to understand it line by line

-   Deploy the tests to the files in the folder`test`which is at the root of the project;

-   The function`handlerElephants`is already implemented, being only necessary to create the tests;

-   The function is case sensitive;

-   use the command`npm test handlerElephants`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage.

**Coverage will only check the highlighted functions and not the entire application!**

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches at least 80%

-   for the argument`count`must return the integer`4`;

-   for the argument`names`should return an array of names that has the name`Jefferson`;

-   for the argument`averageAge`should return a number close to`10.5`;

</details>

</details>

* * *

## 7. Get at least 90% test coverage in the role`handlerElephants`

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 90% de cobertura
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| `count`        | return the number of elephants                                                          |
| `names`        | returns an array listing the names of all elephants                                     |
| `averageAge`   | returns the average age of elephants                                                    |
| `location`     | returns the location of the elephants inside the Zoo                                    |
| `popularity`   | elephants popularity returns                                                            |
| `availability` | returns an array with the number of days in which it is possible to visit the elephants |

-   The function is case sensitive;

-   use the command`npm test handlerElephants`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage.

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches at least 90%.

-   for the argument`count`must return the integer`4`;

-   for the argument`names`should return an array of names that has the name`Jefferson`;

-   for the argument`averageAge`should return a number close to`10.5`;

-   for the argument`location`must return the string`NW`;

-   for the argument`popularity`must return a number equal to or greater than 5;

-   for the argument`availability`should return an array of days of the week that does not contain`Monday`;

-   Not passing arguments the function must return`undefined`;

</details>

</details>

* * *

## 8. Implement the function`calculateEntry`

<details>
  <summary>
    Calcule o valor <strong>total</strong> da entrada dos visitantes do zoológico
  </summary> <br />

The value of zoo tickets is calculated from the age group, where:

-   `child`: they're people**minors**18 years old;

-   `adult`: are elderly people**Bigger or equal**to 18 years**it's smaller**than 50 years;

-   `senior`: are elderly people**Bigger or equal**to 50 years.

Considering the good practice of breaking the code into smaller parts, the file will have two functions, called`countEntrants`e`calculateEntry`.

Both functions receive an array in the following format:

```javascript
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
```

1.  `countEntrants`will be responsible for calculating the number of visitors by age group:

    It takes an array and should return a**object**. For that:

-   Make the sum of the number of visitors by age group;

-   Return an object in a format like this:`{ child: 3, adult: 2, senior: 1 }`.

2.  `calculateEntry`will be responsible for adding up the value of people entering the zoo:

    It takes an array and should return the sum**total**of the entry values. For that:

-   return`0`if no parameter is passed or is an empty array;

-   Use the function`countEntrants`to have the total number of people by age group;

-   Make the sum of the ticket values ​​by age group. Your return should look like this:`187.94`.

> **Keeping an eye on the tip 👀:**The amount to be charged for the age group is also included in the data file.

**Example of using the function`calculateEntry`:**

```javascript
calculateEntry(entrants);
```

**Exit:**

```javascript
187.94
```

**What will be tested:**

in function`countEntrants`:

-   When receiving an array of visitors, it returns an object with the count.

in function`calculateEntry`:

-   Returns 0 if no arguments are passed;

-   Returns 0 if an empty object is passed;

-   When receiving an array of people with 3 children, 2 adults and 1 older person returns the correct value;

-   When receiving an array with 1 adult person, it returns the correct value;

-   When receiving an array with 1 older person returns the correct value;

-   When receiving an array with 1 child returns the correct value;

-   When receiving an array with 1 child and 1 older person, it returns the correct value.

</details>

* * *

## 9. Implement the function`getSchedule`

<details>
  <summary>
    Crie um cronograma com os horários de visita disponíveis para cada espécie de animal
  </summary> <br />

Animal schedule information should be made available in a query to people visiting the zoo, who may want access to the schedule for a week, a day or a specific animal.

-   Return an array with the days of the week when an animal is available for visitation if the function parameter is an animal. For example:`[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

-   Return all available times for each day of the week if the function:

    -   do not receive parameter;

    -   the parameter passed to the function is not an animal or a day;

    For that:

    -   Create an object and add every day of the week as a key;

    -   The values ​​of each day of the week must be an object, having the keys`officeHour`e`exhibition`:

        -   `officeHour`it must have the text with the time that the zoo opens and closes on that day of the week;

        -   `exhibition`must have an array with the name of all the animals available for visitation on that day of the week.

<details>
  <summary>
    O retorno deve ser parecido com esse:
  </summary> <br />

```javascript
{
  Tuesday: { // Dia da semana
    officeHour: 'Open from 8am until 6pm', // n
    exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
  },
  // [...]
}
```

</details>

-   Return the animals available on the day, if the function parameter is only one day of the week;

> **Keeping an eye on the tip 👀:**Break the problem down into smaller roles so it's easier to manage the responsibility of each.

**What will be tested:**

-   If the name of an animal is passed, it must return an array with the days it will be on display;

-   Without parameters, returns the times for each day and which animals will be available;

-   With parameters that are neither an animal nor a day, it returns the times for each day and which animals will be available;

-   If a single day is passed, returns the times for that day and which animals will be available.

</details>

* * *

## 10. Implement the function`getOldestFromFirstSpecies`

<details>
  <summary>
    Encontre o animal mais velho de uma espécie que é gerenciado por uma pessoa colaboradora
  </summary> <br />

The function takes a parameter`id`referring to the collaborating person and from that`id`:

-   Find the collaborating person who owns the`id`passed by parameter;

-   Find her**first**species of animal that the collaborating person is responsible for;

-   Find the oldest animal of that species;

-   Return an array with the information of the oldest animal of that species.

**What will be tested:**

-   Passing the id of a collaborating person, it finds the first species of animal managed by that person, and returns an array with the name, sex and age of the oldest animal of that species.

</details>

* * *

## 11. Implement the function`getEmployeesCoverage`

<details>
  <summary>
    Busque as informações sobre a pessoa colaboradora e por quais espécies ela é responsável
  </summary> <br />

The function will receive an object as a parameter that will determine its behavior, being:

-   `name`: the name**or**surname of the person to be searched;

-   `id`: the id of the person to search for.

And it should return an object in the following format:

```javascript
{
	id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
	fullName: "Sharonda Spry", // nome completo: firstName + lastName
	species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
	locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

For that:

-   Return the corresponding person information when receiving an object with the property`name`:
    -   the property`name`can have the collaborating person's first or last name as a value, so make sure your code works both ways.

-   Return the corresponding person information when receiving an object with the property`id`;

-   Return an array with the information from**all**the collaborating people if the function does not receive a parameter;

-   Throw an error if the`id`be invalid.

**Examples of using the function`getEmployeesCoverage`:**

  <details>
    <summary>
      Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora 
    </summary> <br />

**PROHIBITED:**

```javascript
getEmployeesCoverage({ name:  'Sharonda' }); // name recebe o primeiro nome como parâmetro ou
getEmployeesCoverage({ name:  'Spry' }); // name recebe o último nome como parâmetro ou
getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro
```

**EXIT:**

```json
{
	"id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
	"fullName": "Sharonda Spry",
	"species": [ "otters", "frogs" ],
	"locations": [ "SE", "SW" ]
}
```

</details>

  <details>
    <summary>
      Caso a função não receba parâmetros, retorne um array com a informação de <strong>todas</strong> as pessoas colaboradoras
    </summary> <br />

**PROHIBITED:**

```javascript
getEmployeesCoverage();
```

**EXIT:**

```javascript
[
	{
		"id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
		"fullName":  "Nigel Nelson",
		"species": [ "lions", "tigers" ],
		"locations": [ "NE", "NW" ],
	},
	{
		"id":  "0e7b460e-acf4-4e17-bcb3-ee472265db83",
		"fullName":  "Burl Bethea",
		"species": [ "lions", "tigers", "bears", "penguins" ],
		"locations": [ "NE", "NW", "NW", "SE" ],
	},
	{
		"id":  "fdb2543b-5662-46a7-badc-93d960fdc0a8",
		"fullName":  "Ola Orloff",
		"species": [ "otters", "frogs", "snakes", "elephants" ],
		"locations": [ "SE", "SW", "SW", "NW" ],
	},
	//[...]
];
```

</details>

<details>
  <summary>
    Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro
  </summary> <br />

If no person is found with the first name, last name or id, an error generated with the constructor function should be thrown.**Error**from the JavaScript standard library with the message**"Invalid Information"**. Example:

```javascript
throw new Error('Informações inválidas');
```

You can read more about[constructor function**Error**, at this link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

</details> 

<br />

> **Keeping an eye on the tip 👀:**Create functions that break tasks into smaller parts. For example, you can create a function`getSpecies`charged only with searching for the name of the species for which the person is responsible.

**What will be tested:**

-   If the options object has the property`name`, returns only the corresponding person;

-   The options object's name property also works using the second name;

-   If the options object has the property`id`, returns only the corresponding person;

-   Without parameters, it returns a list with the coverage of all contributing people;

-   If there is no person with the`name`or`id`specified, a`error`.

</details>

* * *

## 12. Get at least 85% test coverage in the role`getOpeningHours`

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter ao menos 85% de cobertura
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

> **Keeping an eye on the tip 👀:**Before you start writing the tests, read the function`getOpeningHours`and try to understand it line by line.

-   Deploy the tests to the files in the folder`test`which is at the root of the project;

-   The function`getOpeningHours`is already implemented, being only necessary to create the tests;

-   use the command`npm test getOpeningHours`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage;

-   The name of the day of the week passed as an argument must be in English;

-   The time must have the following formatting`'XX:XX-XM'`;

-   The hours will be validated in the nomenclature`'AM'`e`'PM'`;

-   The function is not case sensitive;

**Coverage will only check the highlighted functions and not the entire application!**

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches at least 85%.

-   Test by not passing arguments. It should return the object:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

-   for the arguments`Monday`e`09:00-AM`must return the string`'The zoo is closed'`(Since the Zoo is always closed on Monday);

-   for the arguments`Tuesday`e`09:00-AM`must return the string`'The zoo is open'`;

-   for the arguments`Wednesday`e`09:00-PM`must return the string`'The zoo is closed'`;

</details>

</details>

* * *

## 13. Get at least 95% test coverage in the role`getOpeningHours`

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 95% de cobertura
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

-   use the command`npm test getOpeningHours`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage;

-   The name of the day of the week passed as an argument must be in English;

-   The time must have the following formatting`'XX:XX-XM'`;

-   The hours will be validated in the nomenclature`'AM'`e`'PM'`;

-   The function is not case sensitive.

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches at least 95%.

-   Test by not passing arguments. It should return the object:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

-   for the arguments`Monday`e`09:00-AM`must return the string`'The zoo is closed'`(Since the Zoo is always closed on Monday);

-   for the arguments`Tuesday`e`09:00-AM`must return the string`'The zoo is open'`;

-   for the arguments`Wednesday`e`09:00-PM`must return the string`'The zoo is closed'`;

-   for the arguments`Thu`e`09:00-AM`should throw an exception with the message:`'The day must be valid. Example: Monday'`

-   for the arguments`Friday`e`09:00-ZM`should throw an exception with the message:`'The abbreviation must be \'AM\' or \'PM\''`;

-   for the arguments`Saturday`e`C9:00-AM`should throw an exception with the message:`'The hour should represent a number'`;

-   for the arguments`Sunday`e`09:c0-AM`should throw an exception with the message:`'The minutes should represent a number'`;

</details>

</details>

* * *

## 14. Implement the function`getAnimalMap`

<details>
  <summary>
    Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.
  </summary> <br />

The function`getAnimalMap`is responsible for categorizing animals by location, in addition to filtering them by region, name and sex using a parameter. The structure of the function return is based on the location of the species:

```javascript
  {
    NE: [ /* dados aqui */],
    NW: [/* dados aqui */],
    SE: [/* dados aqui */],
    SW: [/* dados aqui */],
  }
```

The function parameters can be:

   <details>
     <summary>
      <code>includeNames: true</code>, que retorna o nome dos animais no seguinte formato:
     </summary> <br />

```javascript
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
```

   </details>

<details>
  <summary>
    <code>sorted: true</code> que retorna o nome dos animais por ordem alfabética no seguinte formato:
  </summary> <br />

```javascript
NE: [
  { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
  { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
],
// [...]
```

</details>

<details>
  <summary>
    <code>sex: male</code> ou <code>sex: female</code> retorna o <strong>nome</strong> dos animais que são machos ou fêmeas no seguinte formato:
  </summary><br />

```javascript
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
```

⚠️**Heads up:**If the parameter is`{ sex: male }`, return only the name of male animals and if the parameter is`{ sex: female }`return only the name of the female animals.

</details>

<details>
  <summary>
  Caso a função não receba parâmetro, as espécies dos animais devem ser categorizadas por localização e deve retornar um objeto no seguinte formato:
  </summary> <br />

```javascript
{
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
}
```

</details>

For that:

-   Return the species of all animals categorized by location if the function:

    -   do not receive parameter;

    -   do not receive the parameter`{includesName: true}`and receive only the parameter`{sex: female}`;

    -   do not receive the parameter`{includesName: true}`and receive only the parameter`{sex: female, sorted: true}`.

-   Return the species and the name of the animals if the function receives only the parameter`{includesName: true}`;

-   Return the species and name of animals in alphabetical order if the function receives the parameter`{includesName: true, sorted: true}`;

-   Return the species and animal names filtered by sex:

    -   Return the species and name of the female animals, if the function parameter is`{includesName: true, sex: female}`;

    -   Return the species and name of male animals if the function parameter is`{includesName: true, sex: male}`;

-   Return the species and animal names filtered by sex and alphabetical order:

    -   Return the species and name of female animals in alphabetical order if the function parameter is`{includesName: true, sex: female, sorted: true}`;

    -   Return the species and name of male animals in alphabetical order if the function parameter is`{includesName: true, sex: male, sorted: true}`;

> **Keeping an eye on the tip 👀:**You don't need to differentiate gender filters between`female`or`male`, only for`sex`.

**What will be tested:**

-   Without parameters, returns animals categorized by location;

-   without option`includeNames`specified, returns animals categorized by location;

-   with the option`includeNames: true`specified, returns animal names;

-   with the option`sorted: true`specified, returns sorted animal names;

-   with the option`sex: 'female'`or`sex: 'male'`specified, returns only male/female animal names;

-   with the option`sex: 'female'`or`sex: 'male'`specified and the option`sorted: true`specified, returns only male/female animal names with the animal names sorted;

</details>

* * *

# Bonus Requirements

## 15. Get 100% test coverage in the role`handlerElephants`

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter 100% de cobertura
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| `count`        | return the number of elephants                                                          |
| `names`        | returns an array listing the names of all elephants                                     |
| `averageAge`   | returns the average age of elephants                                                    |
| `location`     | returns the location of the elephants inside the Zoo                                    |
| `popularity`   | elephants popularity returns                                                            |
| `availability` | returns an array with the number of days in which it is possible to visit the elephants |

-   The function is case sensitive;

-   use the command`npm test handlerElephants`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage.

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches 100%.

-   for the argument`count`must return the integer`4`;

-   for the argument`names`should return an array of names that has the name`Jefferson`;

-   for the argument`averageAge`should return a number close to`10.5`;

-   for the argument`location`must return the string`NW`;

-   for the argument`popularity`must return a number equal to or greater than 5;

-   for the argument`availability`should return an array of days of the week that does not contain`Monday`;

-   Not passing arguments the function must return`undefined`;

-   Passing an empty object as an argument (`{}`) should return the string`'Parâmetro inválido, é necessário uma string'`;

-   Passed a string that does not include a functionality must return`null`.

</details>
</details>

* * *

## 16. Get at least 100% test coverage in the role`getOpeningHours`

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 100% de cobertura
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

-   use the command`npm test getOpeningHours`to verify that your tests are passing;

-   use the command`npm run test:coverage`to test coverage;

-   The name of the day of the week passed as an argument must be in English;

-   The time must have the following formatting`'XX:XX-XM'`;

-   The hours will be validated in the nomenclature`'AM'`e`'PM'`;

-   The function is not case sensitive.

⚠️**Heads up:**don't change the structure already implemented in the test files, just add the tests inside the block`describe`.

  <details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️**Heads up:**The topics below are just suggestions, feel free to test as you see fit as long as the function coverage reaches at least 100%.

-   Test by not passing arguments. It should return the object:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

-   for the arguments`Monday`e`09:00-AM`must return the string`'The zoo is closed'`(Since the Zoo is always closed on Monday);

-   for the arguments`Tuesday`e`09:00-AM`must return the string`'The zoo is open'`;

-   for the arguments`Wednesday`e`09:00-PM`must return the string`'The zoo is closed'`;

-   for the arguments`Thu`e`09:00-AM`should throw an exception with the message:`'The day must be valid. Example: Monday'`

-   for the arguments`Friday`e`09:00-ZM`should throw an exception with the message:`'The abbreviation must be \'AM\' or \'PM\''`;

-   for the arguments`Saturday`e`C9:00-AM`should throw an exception with the message:`'The hour should represent a number'`;

-   for the arguments`Sunday`e`09:c0-AM`should throw an exception with the message:`'The minutes should represent a number'`;

-   for the arguments`Monday`e`13:00-AM`should throw an exception with the message:`'The hour must be between 0 and 12'`;

-   for the arguments`Tuesday`e`09:60-AM`should throw an exception with the message:`'The minutes must be between 0 and 59'`.

</details>

</details>
