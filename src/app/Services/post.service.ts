import { Injectable } from '@angular/core';
import { User, UserService } from './user.service';

export interface Post {
  id: number;
  title: string;
  date: Date;
  content: string;
  tags: string[];
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private userService: UserService) {}
  posts: Post[] = [
    {
      id: 1,
      title: '¡He encontrado una nueva forma de comer champiñones!',
      date: new Date('2023-11-15'),
      content:
        '¡Hola amigos! Soy Mario y he descubierto una nueva forma de comer champiñones que les encantará. He creado una receta deliciosa para champiñones rellenos de queso y espinacas. ¡Es una verdadera explosión de sabor! Estoy seguro de que se convertirá en su nueva forma favorita de comer champiñones. ¿Se animan a probarla?',
      tags: ['comida', 'receta', 'champiñones'],
      user: this.userService.getUserById(1),
    },
    {
      id: 2,
      title: '¡He encontrado un nuevo enemigo en Hyrule!',
      date: new Date('2023-10-25'),
      content:
        '¡Hola Hyrule! Soy Link y mientras exploraba el Bosque Kokiri me he encontrado con un nuevo enemigo: un monstruo gigante con forma de planta carnívora. ¡Es muy peligroso y lanza bolas de semillas explosivas! He tenido que usar todas mis habilidades para derrotarlo. ¡Tengan cuidado si se encuentran con él!',
      tags: ['zelda', 'enemigo', 'peligro'],
      user: this.userService.getUserById(2),
    },
    {
      id: 3,
      title: '¡Mi último invento: un traductor de ladridos!',
      date: new Date('2023-12-01'),
      content:
        '¡Hola amigos! Soy Clank y he creado un nuevo invento que revolucionará la comunicación entre humanos y robots: un traductor de ladridos. ¡Ahora podré entender a mi amigo Ratchet y él podrá entenderme a mí! Estoy seguro de que este invento será un éxito rotundo en el mercado. ¿Se animan a probarlo?',
      tags: ['inventos', 'tecnología', 'animales'],
      user: this.userService.getUserById(3),
    },
    {
      id: 4,
      title: '¿Es posible viajar en el tiempo?',
      date: new Date('2023-11-08'),
      content:
        'He estado investigando la posibilidad de viajar en el tiempo y he encontrado algunas teorías fascinantes. ¿Podría ser posible construir una máquina del tiempo? ¿Qué paradojas temporales se podrían crear? Es un tema complejo que me tiene fascinado. Estoy impaciente por seguir investigando y compartir mis descubrimientos.',
      tags: ['ciencia', 'tiempo', 'teoría'],
      user: this.userService.getUserById(7),
    },
    {
      id: 5,
      title: '¡He descubierto un nuevo planeta en el sistema solar!',
      date: new Date('2023-09-22'),
      content:
        '¡Hola astronautas! Soy Ratchet y he analizado los datos de la última misión espacial y he encontrado un nuevo planeta en el sistema solar. ¡Es similar a la Tierra y tiene todas las condiciones para albergar vida! Estoy seguro de que este descubrimiento cambiará la perspectiva de la humanidad sobre el universo. ¿Estamos solos?',
      tags: ['espacio', 'planetas', 'vida extraterrestre'],
      user: this.userService.getUserById(4),
    },
    {
      id: 6,
      title: 'Las 5 mejores estrategias para ganar en Mario Kart',
      date: new Date('2023-10-05'),
      content:
        '¡Hola amigos! Soy Daxter y soy un gran fanático de Mario Kart. He jugado durante horas y he desarrollado algunas estrategias infalibles para ganar. ¿Quieren saber cuáles son? ¡Prepárense para descubrir los secretos para convertirte en el campeón del circuito!',
      tags: ['juegos', 'Mario Kart', 'consejos'],
      user: this.userService.getUserById(5),
    },
    {
      id: 7,
      title:
        'He resuelto el misterio del jarrón robado: ¡El culpable era el conserje!',
      date: new Date('2023-11-20'),
      content:
        '¡Hola detectives! Soy Michael Scott y después de una larga investigación, he resuelto el misterio del jarrón robado en la oficina. ¡El culpable era el conserje! No lo van a creer, pero tenía una cámara oculta en la sala de descanso y estaba grabando a todos los empleados. ¡Al final lo atrapé y confesó su crimen!',
      tags: ['misterio', 'robo', 'detective'],
      user: this.userService.getUserById(6),
    },
    {
      id: 8,
      title:
        '¡He encontrado una nueva forma de usar la magia en el mundo muggle!',
      date: new Date('2023-12-15'),
      content:
        '¡Hola amigos magos y muggles! Soy Harry Potter y he descubierto una nueva forma de usar la magia en el mundo muggle. He creado un hechizo que convierte las tareas cotidianas en algo más divertido y emocionante. ¡Ya no tengo que usar la aburrida escoba para barrer, ahora puedo usar un hechizo de limpieza que hace que la casa brille en segundos! Estoy seguro de que esta nueva forma de usar la magia será un éxito rotundo en ambos mundos.',
      tags: ['magia', 'hechizos', 'mundo muggle'],
      user: this.userService.getUserById(8),
    },
    {
      id: 9,
      title: '¡He encontrado el mapa del tesoro más codiciado del Caribe!',
      date: new Date('2023-12-20'),
      content:
        '¡Ahoy, marineros! Soy Jack Sparrow y tengo el placer de anunciar que he encontrado el mapa del tesoro más codiciado del Caribe. ¡Se rumorea que este mapa conduce a un tesoro legendario que hará al portador más rico que el mismísimo Rey Midas! Estoy buscando una tripulación valiente y aventurera para acompañarme en la búsqueda de este tesoro. ¿Se atreven a unirse a mí en esta emocionante aventura?',
      tags: ['piratas', 'tesoros', 'aventura'],
      user: this.userService.getUserById(9),
    },
  ];

  public getPosts(): Post[] {
    return this.posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }

  public getLastPost(): Post {
    return this.getPosts()[0];
  }
}
