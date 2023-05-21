import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails() {
  return (
    <MeetupDetail
      image=
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
      
      title="A Fist Meetup"
      address="Some Street 5, 12345 Some City"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;
