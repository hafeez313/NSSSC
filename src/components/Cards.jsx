import React from "react";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      imageUrl:
        "https://www.parquetematico.net/wp-content/uploads/2020/04/Bola-del-mundo-de-Universal-Orlando.jpg",
      title: "Orlando",
      date: "April 24-26,2004",
      link: "https://dummy.com",
    },
    {
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/01/16/54/53/1000_F_116545394_vdMH1inF7mjucTHmjTIp6XrLvUHh1z5n.jpg",
      title: "San Diego",
      date: "May 8-10, 2024",
      link: "https://dummy.com",
    },
    {
      imageUrl:
        "https://www.vmcdn.ca/f/files/via/images/tourism/new-york-times-square-lights.jpg",
      title: "NYC",
      date: "July 17-19, 2024",
      link: "https://dummy.com",
    },
    {
      imageUrl:
        "https://photographylife.com/wp-content/uploads/2017/02/Houston2.jpg",
      title: "Houston",
      date: "Oct 28-30, 2024",
      link: "https://dummy.com",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/2540653/pexels-photo-2540653.jpeg",
      title: "Las Vegas",
      date: "Nov 18-20, 2024",
      link: "https://dummy.com",
    },
  ];
  return (
    <div className="px-5 sm:px-16 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cards.map((card) => (
          <div className="h-48 md:h-56 lg:h-[300px] p-5 md:p-6 lg:p-8 rounded-sm">
            <Card
              imageUrl={card.imageUrl}
              date={card.date}
              title={card.title}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
