import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts = [
    {
      id: 40,
      title: 'Testee',
      description: 'teste, teste',
      image:
        'https://media.bitdegree.org/storage/media/images/2018/12/node-js-interview-questions-logo-2-266x300.png',
      gist: null,
      created_at: '2021-11-10T18:04:09.000Z',
      StudentId: 1,
      Student: {
        id: 1,
        name: 'Rafael',
        image: 'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
      },
      Categories: [
        {
          id: 5,
          description: 'Mobile Backend',
        },
        {
          id: 6,
          description: 'Kotlin',
        },
      ],
      Answers: [
        {
          id: 255,
          description: 'testeee quantidade de caracteres',
          created_at: '2021-11-10T18:13:15.000Z',
          Student: {
            id: 1,
            name: 'Rafael',
            image:
              'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
          },
        },
        {
          id: 256,
          description: 'testando o comentário',
          created_at: '2021-11-10T19:50:59.000Z',
          Student: {
            id: 1,
            name: 'Rafael',
            image:
              'http://fiap-social-api.herokuapp.com/uploads/1636312523776.jpg',
          },
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  saveComment(){
    alert("Comentário está sendo salvo!")
  }
}
