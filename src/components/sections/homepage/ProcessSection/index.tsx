import SectionHeading from "@/components/ui/SectionHeading";
import Processes from "./Processes";

export default function index() {
  return (
    <section className="section-padding black-bg">
      <div className="site-container">
        <div className="space-y-20">
          <SectionHeading
            label="How We Work"
            heading="From Vision to Completion"
            align="center"
            variant="white"
          />
          
          {/* Processes */}
          <Processes/>
        </div>
      </div>
    </section>
  );
}