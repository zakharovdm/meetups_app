import { MongoClient } from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dzaharov:Eu7BcjbneGIsUAEk@cluster0.qbjtqnv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
        };
      }),
    },
    revalidate: 1,
  };
}

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
