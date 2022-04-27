// licznik do wyników
$(document).ready( function() {
    $('.counter').each(function() {
      let $this = $(this),
          countTo = $this.attr('data-count');
    
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },{
        duration: 7000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
    });
  });
});

//pracownicy
const persons = [{
  name: 'Joanna Kowalczyk',
  spec: 'Specjalistka ds. prawa karnego',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  src: './img/persons/woman1.jpg'
}, {
  name: 'Edward Nowak',
  spec: 'Ekspert prawa handlowego',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  src: './img/persons/men3.jpg'
},{
  name: 'Wiktoria Polak',
  spec: 'Specjalistka ds. prawa cywilnego',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  src: './img/persons/woman2.jpg'
}, {
  name: 'Daniel Niedzielski',
  spec: 'Specjalist ds. prawa pracy',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  src: './img/persons/men2.jpg'
}, {
  name: 'Adrian Tatar',
  spec: 'Radca prawny',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  src: './img/persons/men1.jpg'
}];

const person1 = document.querySelector('.person1');
const person2 = document.querySelector('.person2');
const person3 = document.querySelector('.person3');

const changePersonRight = () => {
  let p1Counter = person1.getAttribute('data-counter');
  let p2Counter = person2.getAttribute('data-counter');
  let p3Counter = person3.getAttribute('data-counter');

  if (p1Counter < persons.length-1) {
    p1Counter++;
    person1.setAttribute('data-counter', p1Counter);
  } else {
    person1.setAttribute('data-counter', 0);
    p1Counter = 0;
  }

  if (p2Counter < persons.length-1) {
    p2Counter++;
    person2.setAttribute('data-counter', p2Counter);
  } else {
    p2Counter = 0;
    person2.setAttribute('data-counter', p2Counter);
  }

  if (p3Counter < persons.length-1) {
    p3Counter++;
    person3.setAttribute('data-counter', p3Counter);
  } else {
    p3Counter = 0;
    person3.setAttribute('data-counter', p3Counter);
  }

  person1.querySelector('img').src = persons[p1Counter].src;
  person1.querySelector('.card-title').innerHTML = persons[p1Counter].name;
  person1.querySelector('.card-subtitle').innerHTML = persons[p1Counter].surname;
  person1.querySelector('.card-subtitle').innerHTML = persons[p1Counter].spec;

  person2.querySelector('img').src = persons[p2Counter].src;
  person2.querySelector('.card-title').innerHTML = persons[p2Counter].name;
  person2.querySelector('.card-subtitle').innerHTML = persons[p2Counter].surname;
  person2.querySelector('.card-subtitle').innerHTML = persons[p2Counter].spec;

  person3.querySelector('img').src = persons[p3Counter].src;
  person3.querySelector('.card-title').innerHTML = persons[p3Counter].name;
  person3.querySelector('.card-subtitle').innerHTML = persons[p3Counter].surname;
  person3.querySelector('.card-subtitle').innerHTML = persons[p3Counter].spec;
}

const changePersonLeft = () => {
  let p1Counter = person1.getAttribute('data-counter');
  let p2Counter = person2.getAttribute('data-counter');
  let p3Counter = person3.getAttribute('data-counter');

  if (p1Counter > 0) {
    p1Counter--;
    person1.setAttribute('data-counter', p1Counter);
  } else {
    p1Counter = persons.length-1;
    person1.setAttribute('data-counter', p1Counter);
  }

  if (p2Counter > 0) {
    p2Counter--;
    person2.setAttribute('data-counter', p2Counter);
  } else {
    p2Counter = persons.length-1;
    person2.setAttribute('data-counter', p2Counter);
  }

  if (p3Counter > 0) {
    p3Counter--;
    person3.setAttribute('data-counter', p3Counter);
  } else {
    p3Counter = persons.length-1;
    person3.setAttribute('data-counter', p3Counter);
  }

  person1.querySelector('img').src = persons[p1Counter].src;
  person1.querySelector('.card-title').innerHTML = persons[p1Counter].name;
  person1.querySelector('.card-subtitle').innerHTML = persons[p1Counter].surname;
  person1.querySelector('.card-subtitle').innerHTML = persons[p1Counter].spec;

  person2.querySelector('img').src = persons[p2Counter].src;
  person2.querySelector('.card-title').innerHTML = persons[p2Counter].name;
  person2.querySelector('.card-subtitle').innerHTML = persons[p2Counter].surname;
  person2.querySelector('.card-subtitle').innerHTML = persons[p2Counter].spec;

  person3.querySelector('img').src = persons[p3Counter].src;
  person3.querySelector('.card-title').innerHTML = persons[p3Counter].name;
  person3.querySelector('.card-subtitle').innerHTML = persons[p3Counter].surname;
  person3.querySelector('.card-subtitle').innerHTML = persons[p3Counter].spec;

}


document.querySelector('.slideLeft').addEventListener('click', changePersonRight);
document.querySelector('.slideRight').addEventListener('click', changePersonLeft);

// ostatnie newsy
const tabObj = [];

window.onload = function () {
  const accessKey = 'nekm_7ZkoaOah4WUxQN6RK6PtQnRsslkfa9uXMCRxZ0'; 
  fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => renderData(data))
}

function renderData(data) {
  // data.reverse();
  data.length = 5;

  for (i = 0; i < data.length; i++) {
    tabObj[i] = new Post(data[i].user.name, data[i].user.profile_image.large, data[i].user.bio, data[i].urls.small, data[i].created_at.slice(0,10), data[i].user.links.html);
  }

}