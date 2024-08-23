import { Record } from "@/components/record";
import { RecordDetails } from "@/components/recordDetails";
import { DashboardLayout } from "@/layout/dashboardLayout";

const Records = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
      <Record />
      <RecordDetails/>
      </div>
    </DashboardLayout>
  );
};

export default Records;
