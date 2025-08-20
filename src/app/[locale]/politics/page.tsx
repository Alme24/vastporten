import Politica from "@/app/[locale]/components/templates/politicas";
import ReportError from "../components/organism/reportError";

export default function PoliticsPage() {
  return (
    <div className="flex flex-col items-center justify-center">
        <Politica />
        <ReportError />
    </div>
  );
}
