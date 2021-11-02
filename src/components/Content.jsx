import EventCard from "./EventCard";

const eventDescription =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\
                  fuga fugit quae quia adipisci consectetur non eaque saepe,\
                  quibusdam deleniti delectus recusandae, ipsam sint et ipsum\
                  consequatur nisi teest voluptate obcaecati.";


export default function Content() {
  return (
    <>
      <EventCard
        header
        eventHeader="Next Event"
        eventTitle="First event"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        header
        eventHeader="Coming Soon!"
        eventTitle="Second Event"
        eventDescription={eventDescription}
      ></EventCard>
      <EventCard
        eventHeader={eventHeader}
        eventTitle="Third Event"
        eventDescription={eventDescription}
      ></EventCard>
    </>
  );
}
