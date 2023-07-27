import React from 'react';
import './Blog.css'; // Importa el archivo CSS

const Blog = () => {
  const articles = [
    {
      title: 'Cómo preparar una auténtica paella española',
      content: 'En este artículo, te enseñaremos paso a paso cómo preparar una paella española llena de sabores mediterráneos...',
      date: 'Publicado el 15 de Julio, 2023'
    },
    {
      title: 'Los beneficios para la salud de la dieta mediterránea',
      content: 'Descubre por qué la dieta mediterránea es considerada una de las más saludables del mundo y cómo puedes adoptarla en tu vida diaria...',
      date: 'Publicado el 22 de Julio, 2023'
    },
    {
      title: 'Receta: Ensalada griega con queso feta',
      content: 'Te presentamos una deliciosa receta de ensalada griega con auténtico queso feta y aceitunas kalamata...',
      date: 'Publicado el 30 de Julio, 2023'
    },
    {
        title: 'Receta: Gazpacho andaluz',
        content: 'Refrescante y lleno de sabor, disfruta de esta deliciosa sopa fría de tomate, pimiento, pepino y ajo...',
        date: 'Publicado el 5 de Septiembre, 2023'
      },
      {
        title: 'Los secretos de la dieta mediterránea',
        content: 'Descubre los ingredientes clave y las prácticas alimenticias que hacen que la dieta mediterránea sea tan beneficiosa para la salud...',
        date: 'Publicado el 12 de Septiembre, 2023'
      },
      {
        title: 'Las maravillas del aceite de oliva virgen extra',
        content: 'Sumérgete en el mundo del aceite de oliva virgen extra y conoce sus variedades, usos y beneficios para la salud...',
        date: 'Publicado el 19 de Septiembre, 2023'
      },
      {
        title: 'Viaje culinario a Grecia: Sabores de la antigua Hellas',
        content: 'Embárcate en un emocionante viaje gastronómico a través de los platos más emblemáticos de la cocina griega...',
        date: 'Publicado el 26 de Septiembre, 2023'
      },
      {
        title: 'Los mejores vinos del Mediterráneo',
        content: 'Conoce las regiones vinícolas más destacadas del Mediterráneo y descubre sus vinos únicos y exquisitos...',
        date: 'Publicado el 3 de Octubre, 2023'
      },
      {
        title: 'Receta: Paella de mariscos',
        content: 'Aprende a preparar una auténtica paella de mariscos con camarones, mejillones y calamares...',
        date: 'Publicado el 10 de Octubre, 2023'
      },
      {
        title: 'El encanto de las islas mediterráneas',
        content: 'Explora las islas más bellas del Mediterráneo y descubre su encanto único, cultura y gastronomía...',
        date: 'Publicado el 17 de Octubre, 2023'
      },
      {
        title: 'Cómo organizar una cena temática mediterránea',
        content: 'Consejos y recetas para planificar una cena temática mediterránea con amigos y familiares...',
        date: 'Publicado el 24 de Octubre, 2023'
      },
      {
        title: 'Receta: Tzatziki griego',
        content: 'Prepara este refrescante y delicioso dip griego a base de yogur, pepino y hierbas aromáticas...',
        date: 'Publicado el 31 de Octubre, 2023'
      },
      {
        title: 'Los misterios de la dieta mediterránea para una vida más longeva',
        content: 'Investigaciones recientes revelan los secretos detrás de la longevidad y la salud en la dieta mediterránea...',
        date: 'Publicado el 7 de Noviembre, 2023'
      }
  ];

  return (
    <div className="blog-container">
      {articles.map((article, index) => (
        <div className="article-card" key={index}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p className="date">{article.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
