import { Header } from "@/components/header";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-center max-w-[1440px] h-screen m-auto bg-[#F3F4F6]">
      <Header />
      {children}
    </div>
  );
};
