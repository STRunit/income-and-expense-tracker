import { Card } from "@/components/card";
import { FinanceCard } from "@/components/financeCard";
import { DecreasingIcon } from "@/components/icon/decreasingIcon";
import { IncreasingIcon } from "@/components/icon/increasingIcon";
import { IncomeExpenseChart } from "@/components/incomeExpenseChart";
import { DashboardLayout } from "@/layout/dashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-6 mt-8">
        <Card cashAmount="21,000,00" />
        <FinanceCard
          dotColor="#84CC16"
          label="Your Income"
          amount="1,200,000"
          currency="₮"
          amountLabel="Your Income Amount"
          incrementOrDecrement={<IncreasingIcon />}
          fromLastMonth="32%"
        />
        <FinanceCard
          dotColor="#0166FF"
          label="Total Expenses"
          amount="-1,200,000"
          currency="₮"
          amountLabel="Your Expense Amount"
          incrementOrDecrement={<DecreasingIcon />}
          fromLastMonth="43%"
        />
      </div>
      <div className="flex w-[588px] h-[284px] flex-col items-start shrink-0 bg-white rounded-xl">
        <div className="flex items-center self-stretch gap-2 p-4 border-b-[1px]">
          <p className="text-base font-semibold">Income-Expense</p>
        </div>
        <div className="flex flex-col items-start self-stretch justify-end gap-8 px-6 py-8">
          <div className="flex items-start gap-[17px]">
            <IncomeExpenseChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
