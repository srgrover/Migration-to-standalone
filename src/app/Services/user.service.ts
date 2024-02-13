import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users: User[] = [
    {
      id: 1,
      name: 'Mario',
      avatar:
        'https://royaldecorhome.store/wp-content/uploads/2019/12/mp840x830mattef8f8f8t-pad1000x1000f8f8f8.u1-6873.jpg',
    },
    {
      id: 2,
      name: 'Link',
      avatar: 'https://avatarfiles.alphacoders.com/148/thumb-1920-148364.jpg',
    },
    {
      id: 3,
      name: 'Clank',
      avatar:
        'https://th.bing.com/th/id/R.fc30d7763174e0e84cb08ebb8a2c73d0?rik=U9ToW%2fWmIpZVzw&pid=ImgRaw&r=0',
    },
    {
      id: 4,
      name: 'Ratchet',
      avatar:
        'https://i.pinimg.com/originals/a1/5c/3b/a15c3b3f9f9e4ae9bd29f5f9709746c8.jpg',
    },
    {
      id: 5,
      name: 'Daxter',
      avatar:
        'https://th.bing.com/th/id/OIP.FntwoeArr0XX8fODejgWugAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 6,
      name: 'Michael Scott',
      avatar:
        'https://www.looper.com/img/gallery/the-untold-truth-of-michael-scott/intro-1600107071.jpg',
    },
    {
      id: 7,
      name: 'Sheldon Cooper',
      avatar:
        'https://pbs.twimg.com/profile_images/956070035675602944/7CsEcdHH_400x400.jpg',
    },
    {
      id: 8,
      name: 'Harry Potter',
      avatar:
        'https://cdn.mos.cms.futurecdn.net/9e994433f4074ac9a2cf71873b3b773d-1200-80.jpg',
    },
    {
      id: 9,
      name: 'Jack Sparrow',
      avatar: 'https://avatarfiles.alphacoders.com/268/thumb-1920-268921.jpg',
    },
  ];

  public getUsers(): User[] {
    return this.users;
  }

  public getUserById(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new Error(`Usuario con ID ${id} no encontrado`);
    return user;
  }
}
