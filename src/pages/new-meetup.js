import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function newMeetupPages () {
    const addMeetupHandler = (meetupData) => {
      console.log(meetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default newMeetupPages;