import Card from "./card";

const BothSides = () => {
  return (
    <Card className="flex flex-col justify-center text-center items-center gap-2 h-[160px] w-[400px] md:w-[1200px] mx-auto absolute bottom-[-80px]" id="both-sides">
      <div>
        <p className="text-[#4169E1] text-[28px] font-semibold inline">
          Built for
        </p>
        <p className="text-[#4169E1] text-[28px] font-bold inline">
          {" "}
          Both Sides
        </p>
      </div>
      <p className="text-[#475569] text-[18px]">
        Whatever your goal, My Trade Pal simplifies the process.
      </p>
    </Card>
  );
};

export default BothSides;
