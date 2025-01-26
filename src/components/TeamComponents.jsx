import TeamMemebers from "./TeamMemebers";
function TeamComponents() {
  return (
    <section className=" flex flex-col gap-[4rem] py-[4rem] mt-8">
      <header className="team_header  flex justify-between items-center w-[70%] mx-auto ">
        <div className="header_team_text flex flex-col gap-4">
          <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold">
            meet the team
          </h3>
          <h1 className="font-bold leading-[48px] uppercase text-[34px] tracking-[3px]">
            Professional <br /> Creative Team Members
          </h1>
        </div>
        <div className="team_btn">
          <button className=" border-2  border-webpurple p-2 text-webpurple text-[12px] leading-[22px] font-bold uppercase">
            view all members
          </button>
        </div>
      </header>
      <TeamMemebers />
    </section>
  );
}

export default TeamComponents;
