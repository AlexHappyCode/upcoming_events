import EventCard from "./EventCard";
const eventDescription =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\
                  fuga fugit quae quia adipisci consectetur non eaque saepe,\
                  quibusdam deleniti delectus recusandae, ipsam sint et ipsum\
                  consequatur nisi teest voluptate obcaecati.";

const eventHeader = "Coming Soon!";

export default function Content() {



  
  return (
    <>
      <EventCard
        header
        date="Nov 29th, 2021"
        eventHeader="Next Event"
        eventTitle="First event"
        eventPicture = "https://www.google.com/logos/doodles/2021/halloween-2021-6753651837109122-law.gif"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        header
        date="Nov 29th, 2021"
        eventHeader="Coming Soon!"
        eventTitle="Second Event"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        date="Nov 29th, 2021"
        eventHeader={eventHeader}
        eventTitle="Third Event"
        eventDescription={eventDescription}
      ></EventCard>
    </>
  );
}
