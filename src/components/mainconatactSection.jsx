import ContactContent from "./ContactContent";
import MapLocation from "./mapLocation";
const MainContact = () => {
  return (
    <>
      <section className="flex  justify-center  py-[5rem]">
        <div className="contact-content w-[70%] flex flex-col gap-16 laptop:w-[90%]">
          <ContactContent />
          <MapLocation />
        </div>
      </section>
    </>
  );
};

export default MainContact;
